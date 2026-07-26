# Panduan Simpel: Hosting Wrapper MEC Fit Tracker via GitHub Pages

Tujuan: membuat URL baru yang lebih stabil (`https://username.github.io/nama-repo`) untuk mengakses aplikasi Anda, sebagai pengganti link `script.google.com` yang sering bermasalah di beberapa browser HP.

File yang dibutuhkan (sudah disiapkan): `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`

---

## Langkah 1 — Buat Akun & Repository GitHub

1. Buka [github.com](https://github.com) → daftar akun gratis jika belum punya
2. Klik tombol hijau **New** (atau ikon **+** di kanan atas → **New repository**)
3. Isi:
   - **Repository name**: `mec-fit-tracker` (bebas, tanpa spasi)
   - **Visibility**: pilih **Public** (wajib Public agar GitHub Pages gratis bisa dipakai)
   - Centang **"Add a README file"**
4. Klik **Create repository**

## Langkah 2 — Ambil URL Web App Apps Script Anda

1. Buka editor Apps Script Anda → **Deploy → Manage deployments**
2. Copy **Web app URL** yang diakhiri `/exec`

## Langkah 3 — Edit `index.html` Sebelum Upload

Buka file `index.html` yang saya berikan, cari baris ini:

```html
src="https://script.google.com/macros/s/GANTI_DENGAN_ID_DEPLOYMENT_ANDA/exec"
```

Ganti bagian URL-nya dengan URL `/exec` milik Anda dari Langkah 2. Simpan file.

## Langkah 4 — Upload File ke Repository

1. Di halaman repository GitHub Anda, klik **Add file → Upload files**
2. Drag & drop atau pilih ke-5 file: `index.html`, `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png`
3. Scroll ke bawah, klik tombol hijau **Commit changes**

## Langkah 5 — Aktifkan GitHub Pages

1. Di repository, klik tab **Settings** (paling kanan atas menu repo)
2. Di sidebar kiri, klik **Pages**
3. Di bagian **Build and deployment → Source**, pilih **Deploy from a branch**
4. Di **Branch**, pilih **main** dan folder **/ (root)** → klik **Save**
5. Tunggu 1-2 menit, refresh halaman — akan muncul kotak hijau bertuliskan:
   > Your site is live at `https://username.github.io/mec-fit-tracker/`

## Langkah 6 — Uji Coba

1. Buka URL tersebut di **Chrome HP normal** (bukan Incognito)
2. Aplikasi MEC Fit Tracker Anda seharusnya muncul di dalam wrapper ini, memuat langsung dari Apps Script
3. Kalau berhasil tampil dan bisa login → masalah sebelumnya (cache/redirect) sudah teratasi karena domainnya sekarang `github.io`, bukan `script.google.com` langsung

## Langkah 7 — Pasang sebagai Ikon Home Screen

1. Di Chrome HP, buka URL GitHub Pages tadi
2. Menu **⋮ → Add to Home screen / Install app**
3. Ikon "MEC Fit Tracker" (merah-navy) akan muncul di layar utama HP, siap dipakai seperti aplikasi native

## Langkah 8 — Bagikan ke Tim

Bagikan URL `https://username.github.io/mec-fit-tracker/` ke seluruh personel Tim MEC (bukan URL `script.google.com` lagi), minta mereka ikuti Langkah 7 di HP masing-masing.

---

## Catatan Penting

- **Jika suatu saat Anda redeploy Apps Script** (Deploy → New version), URL `/exec` biasanya **tetap sama** — jadi wrapper GitHub Pages ini tidak perlu diubah lagi.
- **Jika Anda ingin update tampilan wrapper** (ganti warna, ikon, dsb): edit file di GitHub langsung (klik file → ikon pensil ✏️ → edit → Commit changes), perubahan otomatis live dalam 1-2 menit.
- Cara ini **gratis selamanya** dan tidak perlu install apapun di laptop/HP.
- Kalau langkah ini sudah dilakukan namun masih ada kendala loading di HP tertentu, baru pertimbangkan lanjut ke opsi build APK (PWA Builder) menggunakan URL GitHub Pages ini sebagai sumbernya — bukan URL Apps Script langsung.
