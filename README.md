# KYY STORE REAL FINAL
Deploy: GitHub → Vercel. Isi Environment Variables dari `.env.example`.
Production: buat Supabase, jalankan `SUPABASE.sql`, buat bucket `site-assets` public, isi `SUPABASE_URL` + `SUPABASE_SERVICE_ROLE_KEY`.
Developer: set `DEV_KEY_1` dan `DEV_KEY_2`; jangan commit key asli. Dashboard ada di `/developer`. QRIS/Banner/Backsound diupload dari sana.
MyQuran v3 diproxy di `/api/myquran/*`; Sholat memakai endpoint resmi. Dokumentasi v3 saat ini menyatakan alQuran masih segera.
WhatsApp tidak bisa dipaksa melampirkan file; user tetap mengirim bukti di chat.
