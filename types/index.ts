export interface ContentPost {
  id: string
  title: string
  slug: string
  category: 'pidgin' | 'naija-food' | 'throwback' | 'general'
  excerpt: string
  body: string
  cover_image_url?: string
  published_at: string
  created_at: string
}

export interface ContactSubmission {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  created_at?: string
}

export interface BookOrder {
  id?: string
  stripe_payment_intent_id: string
  customer_name: string
  customer_email: string
  shipping_name: string
  shipping_address_line1: string
  shipping_address_line2?: string
  shipping_city: string
  shipping_state: string
  shipping_postal_code: string
  shipping_country: string
  amount_paid: number
  status: 'pending' | 'paid' | 'fulfilled'
  created_at?: string
}
