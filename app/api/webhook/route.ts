import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createClient } from '@supabase/supabase-js'
import { sendOrderNotification } from '@/lib/email'
import type Stripe from 'stripe'

// Supabase admin client (service role — server-only, never expose)
function getSupabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err) {
    console.error('[webhook] signature verification failed', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    if (session.metadata?.product !== 'pidgin-book') {
      return NextResponse.json({ received: true })
    }

    // In Stripe v20+, shipping details are under collected_information
    const shipping = session.collected_information?.shipping_details
    const customer = session.customer_details

    if (!shipping?.address || !customer) {
      console.error('[webhook] missing shipping or customer details')
      return NextResponse.json({ error: 'Missing details' }, { status: 400 })
    }

    const supabase = getSupabaseAdmin()

    const orderData = {
      stripe_payment_intent_id: session.payment_intent as string,
      customer_name: customer.name ?? '',
      customer_email: customer.email ?? '',
      customer_phone: customer.phone ?? null,
      shipping_name: shipping.name ?? customer.name ?? '',
      shipping_address_line1: shipping.address.line1 ?? '',
      shipping_address_line2: shipping.address.line2 ?? null,
      shipping_city: shipping.address.city ?? '',
      shipping_state: shipping.address.state ?? '',
      shipping_postal_code: shipping.address.postal_code ?? '',
      shipping_country: shipping.address.country ?? '',
      amount_paid: session.amount_total ?? 0,
      status: 'paid',
    }

    const { error } = await supabase.from('book_orders').insert(orderData)

    if (error) {
      console.error('[webhook] supabase insert error', error)
      return NextResponse.json({ error: 'DB insert failed' }, { status: 500 })
    }

    // Email notification to the creator
    try {
      await sendOrderNotification({
        customerName: orderData.customer_name,
        customerEmail: orderData.customer_email,
        customerPhone: orderData.customer_phone,
        shippingName: orderData.shipping_name,
        shippingLine1: orderData.shipping_address_line1,
        shippingLine2: orderData.shipping_address_line2,
        shippingCity: orderData.shipping_city,
        shippingState: orderData.shipping_state,
        shippingPostalCode: orderData.shipping_postal_code,
        shippingCountry: orderData.shipping_country,
        amountPaid: orderData.amount_paid,
        stripePaymentIntentId: orderData.stripe_payment_intent_id,
      })
    } catch (emailErr) {
      // Don't fail the webhook — order is saved, just log the email failure
      console.error('[webhook] email notification failed', emailErr)
    }
  }

  return NextResponse.json({ received: true })
}
