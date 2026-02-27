import nodemailer from 'nodemailer'

function getTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })
}

export interface OrderEmailData {
  customerName: string
  customerEmail: string
  customerPhone?: string | null
  shippingName: string
  shippingLine1: string
  shippingLine2?: string | null
  shippingCity: string
  shippingState?: string | null
  shippingPostalCode: string
  shippingCountry: string
  amountPaid: number // pence
  stripePaymentIntentId: string
}

export async function sendOrderNotification(order: OrderEmailData) {
  const transporter = getTransporter()

  const amount = `£${(order.amountPaid / 100).toFixed(2)}`

  const addressLines = [
    order.shippingLine1,
    order.shippingLine2,
    order.shippingCity,
    order.shippingState,
    order.shippingPostalCode,
    order.shippingCountry,
  ]
    .filter(Boolean)
    .join('\n')

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #0d0d0d;">
      <div style="background: #0d0d0d; padding: 24px 32px;">
        <h1 style="color: #ffffff; margin: 0; font-size: 22px;">📕 New Book Order!</h1>
      </div>
      <div style="padding: 32px; background: #f5f3ef; border: 1px solid #e5e2dc;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 13px; width: 160px;">Customer name</td>
            <td style="padding: 8px 0; font-weight: 600;">${order.customerName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 13px;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${order.customerEmail}" style="color: #3b6e52;">${order.customerEmail}</a></td>
          </tr>
          ${
            order.customerPhone
              ? `<tr>
            <td style="padding: 8px 0; color: #666; font-size: 13px;">Phone</td>
            <td style="padding: 8px 0;">${order.customerPhone}</td>
          </tr>`
              : ''
          }
          <tr><td colspan="2" style="padding-top: 16px; border-top: 1px solid #e5e2dc;"></td></tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 13px;">Ship to</td>
            <td style="padding: 8px 0; white-space: pre-line;">${addressLines}</td>
          </tr>
          <tr><td colspan="2" style="padding-top: 16px; border-top: 1px solid #e5e2dc;"></td></tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 13px;">Amount paid</td>
            <td style="padding: 8px 0; font-weight: 700; font-size: 18px; color: #3b6e52;">${amount}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 13px;">Payment ref</td>
            <td style="padding: 8px 0; font-size: 12px; color: #999;">${order.stripePaymentIntentId}</td>
          </tr>
        </table>
      </div>
      <div style="padding: 16px 32px; font-size: 12px; color: #999;">
        The Nigerian Pidgin Book — automated order notification
      </div>
    </div>
  `

  await transporter.sendMail({
    from: `"The Nigerian — Orders" <${process.env.GMAIL_USER}>`,
    to: 'ocheugbenyo@gmail.com',
    subject: `New order: ${order.customerName} — ${amount}`,
    html,
  })
}
