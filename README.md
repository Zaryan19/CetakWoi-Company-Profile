# CetakWoi — Design. Print. Deliver.

**CetakWoi** adalah website *Company Profile* korporat B2B modern yang dibangun untuk penyedia layanan percetakan komersial dan desain. Dirancang dengan estetika **Light Editorial** yang memiliki kontras tinggi, platform ini menonjolkan kapabilitas produksi massal, spesifikasi layanan yang terstruktur, studi kasus klien, dan integrasi *lead generation* yang mulus via WhatsApp Business.

---

## Fitur Utama

- **Light Editorial Design System:** Permukaan latar putih bersih (`#FFFFFF`), tipografi tinta hitam pekat (`#1A1A1A`), garis pemisah *hairline* yang halus (`#E4E4E7`), dan aksen biru korporat (`#114576`) tanpa *drop shadow* tebal atau elemen visual yang berlebihan.
- **Purposeful Editorial Motion:** Transisi *scroll-reveal* yang halus, penghitung angka statistik otomatis (*count-up*), dan interaksi *hover* responsif yang dibangun menggunakan `framer-motion` (sepenuhnya mendukung preferensi `prefers-reduced-motion`).
- **Katalog Layanan Komprehensif (`/services` & `/services/:slug`):** Mencakup 6 divisi utama percetakan & desain B2B (*Packaging Printing, Large Format Printing, Commercial Printing, Marketing Materials, Corporate Printing,* dan *Design Services*) lengkap dengan panduan material, pilihan *finishing*, MOQ, dan estimasi waktu pengerjaan dalam bahasa yang mudah dipahami.
- **Portofolio & Studi Kasus (`/projects` & `/projects/:slug`):** Sistem *filtering* kategori interaktif dan halaman studi kasus proyek khusus yang merinci tantangan klien, spesifikasi produksi, dan hasil akhir.
- **Interactive WhatsApp Inquiry Builder (`/contact`):** Formulir permintaan penawaran dinamis yang menyusun detail perusahaan, jenis produk, jumlah pesanan, spesifikasi, dan tenggat waktu menjadi pesan WhatsApp Business yang sudah terisi otomatis (*pre-filled*).
- **Mobile-First & Fully Responsive:** Dioptimalkan untuk seluruh ukuran layar mulai dari desktop, tablet (`768px`–`1024px`), hingga *mobile* (`375px`+) dengan menu navigasi *drawer* seluler layar penuh.

---

## Tech Stack

- **Framework:** [React.js](https://react.dev/) (via [Vite](https://vitejs.dev/))
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** *Plus Jakarta Sans* & *Cormorant Garamond* (Google Fonts)

---

## Struktur Proyek

```text
CetakWoi-CompanyProfile/
├── frontend/                   # Aplikasi utama React + Vite
│   ├── public/                 # Aset publik statis
│   ├── src/
│   │   ├── assets/             # Aset gambar dan media
│   │   ├── components/
│   │   │   ├── common/         # Komponen UI modular (Button, CountUp, FloatingWhatsApp)
│   │   │   ├── home/           # Section Homepage (Hero, Stats, Services, Clients, dll.)
│   │   │   └── layout/         # Layout global (Navbar, Footer, Layout)
│   │   ├── constants/          # Token warna dan konfigurasi navigasi
│   │   ├── data/               # Data mock terstruktur (services, projects, clients, stats)
│   │   ├── pages/              # Tampilan rute (Home, About, Services, Projects, Contact)
│   │   ├── utils/              # Fungsi helper (WhatsApp deep-link generator)
│   │   ├── App.jsx             # Konfigurasi routing aplikasi
│   │   ├── index.css           # Global styles dan Tailwind directives
│   │   └── main.jsx            # React DOM entry point
│   ├── .env.example            # Template environment variable
│   ├── index.html              # HTML entry point & import Google Fonts
│   ├── package.json            # Dependencies dan scripts
│   └── tailwind.config.js      # Konfigurasi custom tema Tailwind
├── DESIGN.md                   # Sistem desain editorial & aturan visual
├── prd.md                      # Product Requirements Document
├── architecture.md             # Dokumentasi arsitektur sistem
├── rules.md                    # Standar penulisan kode (coding guidelines)
└── todo.md                     # Tracker tugas pengembangan
```

---

## Getting Started (Cara Menjalankan)

### Prasyarat (Prerequisites)

- **Node.js** (direkomendasikan versi v18 atau lebih baru)
- **npm** atau **yarn**

### Instalasi & Development Lokal

1. **Clone repositori ini:**
   ```bash
   git clone [https://github.com/username-github-kamu/CetakWoi-CompanyProfile.git](https://github.com/username-github-kamu/CetakWoi-CompanyProfile.git)
   cd CetakWoi-CompanyProfile/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Konfigurasi environment variables:**
   Salin `.env.example` menjadi `.env` dan atur nomor WhatsApp Business target (gunakan format internasional tanpa tanda `+`):
   ```bash
   cp .env.example .env
   ```
   Contoh isi `.env`:
   ```env
   VITE_WHATSAPP_NUMBER=6281234567890
   ```

4. **Jalankan server development:**
   ```bash
   npm run dev
   ```
   Buka `http://localhost:5173` di browser Anda untuk melihat pratinjau aplikasi.

### Build untuk Production

Untuk menghasilkan *bundle* statis yang dioptimalkan untuk *production*:
```bash
npm run build
```

---

## Deployment (Vercel)

Proyek ini dikonfigurasi sebagai aplikasi *frontend* statis murni dan sangat mudah di-*deploy* langsung ke **Vercel**:

1. *Push* repositori ini ke GitHub Anda.
2. *Import* repositori tersebut di [Vercel Dashboard](https://vercel.com/).
3. Atur **Root Directory** ke `frontend`.
4. Biarkan pengaturan *build* bawaan **Vite** (`Build Command: npm run build`, `Output Directory: dist`).
5. Tambahkan `VITE_WHATSAPP_NUMBER` di bagian **Environment Variables**, lalu klik **Deploy**.

---

## Penyangkalan (Disclaimer)

Seluruh metrik perusahaan, nama klien, studi kasus proyek, dan angka kapasitas fasilitas yang ditampilkan di dalam aplikasi ini adalah data simulasi (*mock data*) yang dibuat khusus untuk keperluan demonstrasi portofolio.