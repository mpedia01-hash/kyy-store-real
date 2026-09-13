# KYY STORE REAL

Next.js storefront for Vercel + Supabase.

## Important deployment notes
- Next.js is pinned to 14.2.35, the patched Next 14 release.
- Supabase `products.description` is mapped to the app's `desc` property automatically.
- Set developer keys and Supabase secrets only in Vercel Environment Variables.
- Run `SUPABASE.sql` in Supabase SQL Editor before using persistent products/orders/settings/storage.
- Create a public Supabase Storage bucket named `site-assets`.
