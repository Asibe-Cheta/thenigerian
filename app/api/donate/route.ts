import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

const VALID_AMOUNTS_GBP = [300, 500, 1000] // £3, £5, £10 in pence

export async function POST(req: NextRequest) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

  let amount: number
  try {
    const body = await req.json()
    amount = Number(body.amount)
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!VALID_AMOUNTS_GBP.includes(amount)) {
    return NextResponse.json({ error: 'Invalid donation amount' }, { status: 400 })
  }

  const labelMap: Record<number, string> = {
    300: '£3 Support',
    500: '£5 Support',
    1000: '£10 Support',
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: `Support The Nigerian — ${labelMap[amount]}`,
              description: 'Thank you for supporting independent Nigerian content.',
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/donate/success`,
      cancel_url: `${siteUrl}/donate`,
      metadata: {
        product: 'donation',
        amount_gbp: String(amount),
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('[donate]', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
