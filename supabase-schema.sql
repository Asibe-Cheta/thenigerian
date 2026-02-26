-- ─── Contact Submissions ─────────────────────────────────────────────────────
create table if not exists contact_submissions (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  subject     text not null,
  message     text not null,
  created_at  timestamptz default now()
);

-- RLS: only service role can read
alter table contact_submissions enable row level security;
create policy "service role only" on contact_submissions
  using (false); -- block all public access; use service role key server-side

-- ─── Book Orders ──────────────────────────────────────────────────────────────
create table if not exists book_orders (
  id                          uuid primary key default gen_random_uuid(),
  stripe_payment_intent_id    text unique not null,
  customer_name               text not null,
  customer_email              text not null,
  shipping_name               text not null,
  shipping_address_line1      text not null,
  shipping_address_line2      text,
  shipping_city               text not null,
  shipping_state              text,
  shipping_postal_code        text not null,
  shipping_country            text not null,
  amount_paid                 integer not null, -- in pence/cents
  status                      text not null default 'paid',
  created_at                  timestamptz default now()
);

alter table book_orders enable row level security;
create policy "service role only" on book_orders
  using (false);

-- ─── Content Posts ────────────────────────────────────────────────────────────
create table if not exists content_posts (
  id                uuid primary key default gen_random_uuid(),
  title             text not null,
  slug              text unique not null,
  category          text not null check (category in ('pidgin', 'naija-food', 'throwback', 'general')),
  excerpt           text,
  body              text,
  cover_image_url   text,
  published_at      timestamptz default now(),
  created_at        timestamptz default now()
);

alter table content_posts enable row level security;
-- Public can read published content
create policy "public read" on content_posts
  for select using (published_at <= now());
