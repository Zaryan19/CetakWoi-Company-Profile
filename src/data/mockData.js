/**
 * CetakWoi Mock Data Layer — Plain-Language Indonesian Edition
 * Bahasa mudah dipahami orang awam, tanpa istilah teknis percetakan yang membingungkan.
 * Fokus pada hasil nyata, manfaat bisnis, dan kejelasan bagi calon pelanggan.
 */

// ─── STATISTIK PERUSAHAAN ───────────────────────────────────────────────────
export const COMPANY_STATS = [
  {
    label: 'Tahun Pengalaman',
    value: '12+',
    description: 'Melayani cetak bisnis & perusahaan sejak 2012',
  },
  {
    label: 'Klien Perusahaan',
    value: '120+',
    description: 'Restoran, toko retail, pabrik & perkantoran',
  },
  {
    label: 'Proyek Selesai',
    value: '850+',
    description: 'Pesanan cetak massal selesai tepat waktu',
  },
  {
    label: 'Kapasitas Produksi',
    value: '50.000+',
    description: 'Unit per bulan dengan mesin cetak modern',
  },
];

// ─── FASILITAS PRODUKSI (Bahasa Mudah Dipahami) ─────────────────────────────
export const FACILITY_SPECS = [
  { label: 'Luas Pabrik Produksi', value: '2.500 m²' },
  { label: 'Mesin Cetak Utama', value: 'Mesin Offset 5 Warna' },
  { label: 'Kapasitas Harian', value: '±6.000 lembar' },
  { label: 'Kapasitas Bulanan', value: '50.000+ kemasan' },
  { label: 'Tim Produksi Ahli', value: '45+ Orang' },
  { label: 'Pengecekan Kualitas', value: 'Garansi Warna Pas' },
];

export const ABOUT_GALLERY = {
  facility: '/images/41.png',
  team: '/images/42.png',
};

// ─── 6 LAYANAN UTAMA (Bahasa Awam & Manfaat Jelas) ───────────────────────────
export const SERVICES_DATA = [
  {
    id: 'packaging',
    slug: 'packaging-printing',
    title: 'Dus & Kemasan Produk',
    shortDescription:
      'Dus makanan tahan minyak, box produk retail, dan kantong kemasan kokoh yang membuat produk Anda terlihat lebih mahal.',
    fullDescription:
      'Solusi kemasan lengkap untuk bisnis kuliner, kosmetik, fashion, dan oleh-oleh. Kami membuat dus produk dengan bahan tebal, rapi, dan bersertifikasi aman untuk makanan. Desain pas di rak toko dan melindungi produk saat dikirim ke pelanggan.',
    gallery: ['/images/14.png', '/images/15.png', '/images/16.png'],
    applications: [
      'Dus box makanan & katering (tahan minyak & kuah)',
      'Box kosmetik, skincare & produk kecantikan',
      'Box hampers, kado & bingkisan lebaran/natal',
      'Box kemasan pakaian, sepatu & merchandise',
      'Dus pengiriman tebal (anti penyok saat kirim ekspedisi)',
    ],
    sizeOptions: [
      'Ukuran bebas sesuai bentuk produk Anda',
      'Bisa request bentuk buka-tutup, selongsong, atau kunci bawah',
      'Tersedia pembuatan contoh fisik (dummy sample) sebelum cetak banyak',
    ],
    materials: [
      'Karton Putih Tebal (hasil cetak tajam & bersih)',
      'Kertas Kraft Coklat Alami (kesan ramah lingkungan & estetik)',
      'Karton Duplex Kokoh (ekonomis untuk kemasan luar)',
      'Kardus Tebal Bergelombang (sangat kuat untuk kiriman ekspedisi)',
    ],
    finishingOptions: [
      'Lapisan Plastik Doff (tidak silau, terasa halus & elegan)',
      'Lapisan Plastik Mengkilap (warna terlihat lebih cerah & anti air)',
      'Tulisan Emas / Perak Mengkilap (tampak mewah)',
      'Tulisan / Logo Timbul (bisa diraba)',
      'Jendela Plastik Bening (produk terlihat dari luar)',
    ],
    moq: 'Mulai 1.000 pcs',
    leadTime: '7 - 12 Hari Kerja',
    featured: true,
  },
  {
    id: 'large-format',
    slug: 'large-format-printing',
    title: 'Spanduk, Banner & Papan Nama',
    shortDescription:
      'Spanduk toko, backdrop panggung, neon box, roll banner, dan stiker branding mobil operasional dengan warna tahan cuaca.',
    fullDescription:
      'Percetakan ukuran besar untuk kebutuhan toko fisik, promosi pinggir jalan, pameran dagang, dan branding kendaraan kantor. Tinta tajam, tidak mudah luntur terkena terik matahari maupun hujan lebat di luar ruangan.',
    gallery: ['/images/17.png', '/images/18.png', '/images/19.png'],
    applications: [
      'Backdrop panggung acara & pameran',
      'Spanduk kain & banner promosi depan toko',
      'Roll banner praktis untuk resepsionis / booth bazar',
      'Stiker branding mobil box & van operasional',
      'Papan nama akrilik toko & stiker kaca kantor',
    ],
    sizeOptions: [
      'Bisa cetak lebar tanpa sambungan hingga 5 meter',
      'Ukuran standar roll banner (60×160 cm, 80×200 cm)',
      'Ukuran bebas sesuai bidang dinding atau toko Anda',
    ],
    materials: [
      'Kain Spanduk Tebal Impor (tahan panas & hujan tidak mudah sobek)',
      'Stiker Vinyl Tahan Air (lem kuat tidak merusak cat mobil)',
      'Bahan Banner Halus Khusus Ruangan (tidak bergelombang & rapi)',
      'Papan Akrilik Bening & Susu Tebal 2mm - 10mm',
    ],
    finishingOptions: [
      'Mata Ayam (lubang ring besi di sudut untuk tali gantungan)',
      'Kolongan / Selongsong Pipa',
      'Lapisan Pelindung Anti Gores Doff/Mengkilap',
      'Potong Rapi Mengikuti Lekuk Logo',
    ],
    moq: 'Mulai 1 lembar / 5 m²',
    leadTime: '1 - 3 Hari Kerja',
    featured: true,
  },
  {
    id: 'commercial',
    slug: 'commercial-printing',
    title: 'Buku, Majalah & Katalog',
    shortDescription:
      'Katalog produk, laporan tahunan perusahaan, buku panduan pegawai, majalah, dan kalender meja akhir tahun.',
    fullDescription:
      'Cetak buku dan katalog dalam jumlah ratusan hingga ribuan eksemplar. Tulisan terbaca sangat tajam, foto produk jernih sesuai warna aslinya, serta jilid kuat yang tidak mudah copot walau sering dibuka-tutup.',
    gallery: ['/images/20.png', '/images/21.png', '/images/22.png'],
    applications: [
      'Laporan tahunan perusahaan (Annual Report) resmi',
      'Katalog produk & daftar harga untuk sales keliling',
      'Buku profil perusahaan (Company Profile cetak)',
      'Kalender meja & kalender dinding akhir tahun',
      'Buku agenda tahunan & majalah internal kantor',
    ],
    sizeOptions: [
      'Ukuran A4 (standar laporan resmi & majalah)',
      'Ukuran A5 (praktis dibawa di tas)',
      'Ukuran Persegi 21×21 cm (katalog foto produk premium)',
      'Ukuran custom sesuai kebutuhan Anda',
    ],
    materials: [
      'Kertas Majalah Halus (Art Paper warna cerah)',
      'Karton Cover Tebal (Art Carton tidak mudah lecek)',
      'Kertas Tulis Putih (HVS nyaman untuk membaca & dicatat)',
      'Kertas Tekstur Mewah Impor (untuk cover buku khusus)',
    ],
    finishingOptions: [
      'Jilid Jahit Benang (bisa dibuka rata 180 derajat)',
      'Jilid Lem Panas Tebal Rapi (seperti buku toko buku)',
      'Hardcover Tebal Mewah',
      'Jilid Kawat Spiral (mudah dibolak-balik)',
    ],
    moq: 'Mulai 300 eksemplar',
    leadTime: '5 - 10 Hari Kerja',
    featured: true,
  },
  {
    id: 'marketing',
    slug: 'marketing-collaterals',
    title: 'Brosur & Flyer Promosi',
    shortDescription:
      'Brosur lipat, selebaran promosi sebar massal, poster dinding, daftar menu meja, dan voucher diskon belanja.',
    fullDescription:
      'Materi promosi cetak praktis untuk dibagikan ke calon pembeli, ditaruh di meja kasir, atau dimasukkan ke dalam paket belanjaan. Hasil cetak bersih dan rapi, membuat pesan promosi Anda langsung menarik perhatian.',
    gallery: ['/images/23.png', '/images/24.png', '/images/25.png'],
    applications: [
      'Flyer sebar untuk promo buka toko & diskon musiman',
      'Brosur lipat tiga untuk penjelasan produk & pricelist',
      'Poster promosi dinding & kaca toko',
      'Daftar menu lipat meja restoran & kafe',
      'Voucher diskon belanja & kartu stempel langganan',
    ],
    sizeOptions: [
      'Ukuran A4 atau A5 (paling sering digunakan)',
      'Ukuran Brosur Lipat Tiga Ramping (mudah masuk saku)',
      'Ukuran Kartu Pos (pas masuk paket kemasan online)',
      'Ukuran custom sesuai brief promosi',
    ],
    materials: [
      'Kertas Brosur Sedang (Art Paper 120-150 gsm — ringan & cerah)',
      'Karton Brosur Tebal (Art Carton 210-260 gsm — kokoh tidak letoy)',
      'Kertas Halus Doff (Matte Paper — tidak memantulkan lampu)',
    ],
    finishingOptions: [
      'Lipat Mesin Presisi (lipat 2, lipat 3, atau bentuk Z)',
      'Lapisan Plastik Doff / Mengkilap',
      'Garis Sobek (Perforasi) untuk kupon promo',
    ],
    moq: 'Mulai 500 lembar',
    leadTime: '2 - 4 Hari Kerja',
    featured: false,
  },
  {
    id: 'corporate',
    slug: 'corporate-branding',
    title: 'Kop Surat, Map & Kartu Nama',
    shortDescription:
      'Kop surat resmi berlogo, amplop surat berkop, map folder dokumen tebal, dan kartu nama premium.',
    fullDescription:
      'Kebutuhan administrasi dan surat-menyurat resmi perusahaan. Memberi kesan terpercaya dan profesional setiap kali Anda mengirimkan surat penawaran, proposal proyek, maupun bertukar kontak dengan rekan bisnis.',
    gallery: ['/images/26.png', '/images/27.png', '/images/28.png'],
    applications: [
      'Kop surat resmi perusahaan untuk invoice & surat penawaran',
      'Amplop berkop dengan lem perekat praktis',
      'Map folder dokumen berkantung untuk kirim proposal',
      'Kartu nama pimpinan & tim sales',
      'Stiker segel amplop & nota kantor berlogo',
    ],
    sizeOptions: [
      'Kop surat ukuran A4 standar kantor',
      'Amplop ukuran panjang dan amplop map besar',
      'Map folder dokumen muat kertas A4 dengan kantong kartu',
      'Kartu nama ukuran standar 9×5.5 cm',
    ],
    materials: [
      'Kertas Kop Halus Tebal (tidak tembus tinta saat diprint ulang)',
      'Karton Map Tebal Kokoh (rapi melindungi dokumen klien)',
      'Kertas Kartu Nama Tebal Bertekstur',
    ],
    finishingOptions: [
      'Logo Timbul (Emboss berkelas)',
      'Logo Emas / Perak Mengkilap',
      'Kantong Selipan Kartu Nama di Dalam Map',
    ],
    moq: 'Mulai 200 lembar / set',
    leadTime: '3 - 6 Hari Kerja',
    featured: false,
  },
  {
    id: 'design',
    slug: 'end-to-end-design',
    title: 'Bantuan Desain Siap Cetak',
    shortDescription:
      'Belum punya file siap cetak? Tim kami bantu cek warna, rapikan ukuran, perbaiki resolusi, atau buatkan desain dari nol.',
    fullDescription:
      'Banyak masalah cetak terjadi karena file gambar buram, ukuran terpotong, atau warna di layar berbeda jauh dari cetakan. Tim desainer kami memeriksa setiap detail file Anda secara teliti sebelum dicetak agar tidak ada kesalahan fatal yang merugikan.',
    gallery: ['/images/29.png', '/images/30.png', '/images/31.png'],
    applications: [
      'Pengecekan file gratis sebelum cetak massal',
      'Penyesuaian ukuran, garis potong, dan ketajaman gambar',
      'Pembuatan desain kemasan baru dari sketsa tangan',
      'Perbaikan logo yang pecah atau buram menjadi vektor tajam',
      'Simulasi gambar kemasan 3D sebelum dicetak beneran',
    ],
    sizeOptions: [
      'Disesuaikan dengan jenis barang yang mau dicetak',
      'Revisi sampai Anda setuju dan yakin',
    ],
    materials: [
      'Contoh Cetakan Digital (Digital Proof)',
      'Simulasi Tampilan Kemasan 3D',
      'Contoh Bentuk Fisik Polos (Dummy Kemasan)',
    ],
    finishingOptions: [
      'Pemeriksaan Bebas Salah (Pre-flight Check)',
      'Garansi Warna Pas dengan Brand Anda',
    ],
    moq: 'Bisa per proyek cetak',
    leadTime: '1 - 3 Hari Kerja',
    featured: false,
  },
];

// ─── PROYEK / STUDI KASUS (Cerita Nyata Bahasa Sederhana) ───────────────────
export const PROJECTS_DATA = [
  {
    id: 1,
    slug: 'dus-makanan-tahan-minyak-nusantara',
    title: 'Dus Kemasan Makanan Tahan Minyak',
    client: 'Nusantara Culinary Group',
    category: 'Packaging',
    quantity: '50.000 dus',
    year: '2025',
    thumbnail: '/images/2.png',
    documentation: ['/images/33.png', '/images/34.png'],
    summary:
      'Pembuatan 50.000 dus makanan ramah lingkungan yang tidak tembus minyak untuk jaringan resto kuliner nasional.',
    challenge:
      'Klien sering menerima komplain karena dus sebelumnya gampang letoy saat makanan berkuah/berminyak ditaruh. Mereka butuh dus yang kokoh, tidak bocor, tapi tetap terkesan alami tanpa plastik tebal.',
    solution:
      'Kami gunakan kertas kraft tebal khusus makanan dengan lapisan dalam anti-minyak alami berbasis air, ditambah lubang ventilasi kecil agar makanan tidak cepat lembek saat dibawa pulang.',
    material: 'Karton Kraft Khusus Pangan Tebal',
    finishing: 'Lapisan Dalam Anti Minyak + Lubang Uap',
    timeline: '10 Hari Kerja Selesai',
    outcome:
      'Kemasan kokoh saat ditumpuk delivery ojek online, minyak tidak tembus, dan komplain pelanggan berkurang hingga 95%.',
  },
  {
    id: 2,
    slug: 'papan-nama-dan-banner-toko-mitra',
    title: 'Papan Nama & Stiker Kaca 120 Outlet Toko',
    client: 'PT Mitra Retail Indonesia',
    category: 'Large Format',
    quantity: '120 Lokasi Toko',
    year: '2025',
    thumbnail: '/images/3.png',
    documentation: ['/images/35.png', '/images/36.png'],
    summary:
      'Pemasangan serentak papan neon box menyala, stiker kaca promosi, dan banner pameran di 120 cabang se-Jabodetabek.',
    challenge:
      'Klien mengganti logo brand baru dan semua toko harus seragam warnanya, tidak boleh ada cabang yang warnanya berbeda atau pudar.',
    solution:
      'Kami cetak menggunakan mesin banner beresolusi tinggi dengan kalibrasi warna terkontrol. Pemasangan dibagi ke tim lapangan terkoordinasi agar selesai bersamaan dalam 3 minggu.',
    material: 'Stiker Tahan Cuaca + Akrilik Tebal + Kain Spanduk Impor',
    finishing: 'Lapisan Pelindung Anti Gores + Potongan Mesin Rapi',
    timeline: 'Selesai Bertahap dalam 3 Minggu',
    outcome:
      'Seluruh 120 toko berhasil dibuka serempak dengan warna logo yang sama persis di semua cabang.',
  },
  {
    id: 3,
    slug: 'buku-laporan-tahunan-bank-sentosa',
    title: 'Buku Laporan Tahunan Eksklusif Hardcover',
    client: 'Bank Sentosa Makmur Tbk',
    category: 'Commercial',
    quantity: '2.500 Buku',
    year: '2024',
    thumbnail: '/images/4.png',
    documentation: ['/images/37.png', '/images/38.png'],
    summary:
      'Pencetakan 2.500 buku laporan tahunan tebal hardcover dengan sampul bertekstur kain dan tulisan emas mengkilap untuk pemegang saham.',
    challenge:
      'Waktu hanya 7 hari kerja menjelang rapat tahunan direksi. Isi buku berisi angka-angka keuangan penting yang tidak boleh ada satu halaman pun yang buram atau salah potong.',
    solution:
      'Kami jalankan mesin cetak offset cepat dengan pengecekan lembar per lembar langsung disaksikan perwakilan klien. Penjilidan hardcover jahit benang dikerjakan secara teliti.',
    material: 'Cover Tebal Hardcover + Kertas Isi Majalah Halus',
    finishing: 'Tulisan Emas Mengkilap + Jahit Benang Rapi Kuat',
    timeline: '7 Hari Kerja (Layanan Prioritas)',
    outcome:
      'Buku diserahkan tepat waktu sebelum rapat dimulai tanpa ada satu pun cacat cetak. Klien memperpanjang kontrak untuk tahun berikutnya.',
  },
  {
    id: 4,
    slug: 'paket-promosi-acara-pameran-indotech',
    title: 'Paket Perlengkapan Promosi Acara Pameran',
    client: 'IndoTech Expo Organizer',
    category: 'Marketing',
    quantity: '10.000 Paket Lengkap',
    year: '2024',
    thumbnail: '/images/5.png',
    documentation: ['/images/39.png', '/images/40.png'],
    summary:
      'Produksi 10.000 tas bingkisan, buku panduan pameran, kartu tanda peserta, dan spanduk petunjuk arah venue acara.',
    challenge:
      'Ada 8 jenis barang berbeda yang harus dicetak, dirakit, dan dimasukkan ke dalam tas bingkisan dalam waktu singkat sebelum pengunjung berdatangan.',
    solution:
      'Kami buatkan alur produksi paralel per barang, lalu tim kami bantu proses perakitan dan pengepakan rapi per boks sehingga panitia acara tinggal langsung bagikan di meja registrasi.',
    material: 'Kombinasi Kertas Majalah, Kain Tas Kanvas & Kartu PVC',
    finishing: 'Lipat Mesin + Tali Gantungan Peserta',
    timeline: 'Selesai 2 Hari Sebelum Acara Buka',
    outcome:
      'Semua paket sampai di venue acara tepat waktu dalam kondisi rapi, panitia sangat terbantu dan tidak perlu lembur mengepak barang.',
  },
];

// ─── KLIEN KORPORAT KAMI (semarewards.com/id/brand style) ───────────────────
export const CLIENTS_DATA = [
  {
    id: 1,
    name: 'Nusantara Culinary Group',
    logo: '/images/6.png',
    industry: 'Restoran & Kuliner',
    scope: 'Dus Makanan & Box Katering',
    solution: 'Cetak dus makanan tahan minyak 50.000 dus per bulan dengan logo tajam dan bahan ramah lingkungan.',
    metrics: '50.000+ dus / bulan',
    period: 'Klien Sejak 2023',
    badge: 'Mitra Restoran',
  },
  {
    id: 2,
    name: 'PT Mitra Retail Indonesia',
    logo: '/images/7.png',
    industry: 'Toko Retail & Fashion',
    scope: 'Papan Nama & Spanduk Toko',
    solution: 'Pemasangan papan neon box, stiker kaca toko, dan banner promosi serempak di 120 cabang se-Jabodetabek.',
    metrics: '120 Toko Aktif',
    period: 'Klien Sejak 2022',
    badge: 'Jaringan Nasional',
  },
  {
    id: 3,
    name: 'Bank Sentosa Makmur Tbk',
    logo: '/images/8.png',
    industry: 'Perbankan & Keuangan',
    scope: 'Buku Laporan Resmi',
    solution: 'Cetak buku laporan tahunan tebal hardcover dengan sampul kain dan tulisan emas mengkilap untuk pemegang saham.',
    metrics: '2.500 Buku Hardcover',
    period: 'Klien Sejak 2021',
    badge: 'Mitra Perbankan',
  },
  {
    id: 4,
    name: 'IndoTech Expo Organizer',
    logo: '/images/9.png',
    industry: 'Pameran & Acara (Event)',
    scope: 'Perlengkapan Promosi Acara',
    solution: 'Paket tas bingkisan, buku panduan pameran, kartu nama peserta, dan spanduk arah untuk 10.000 pengunjung.',
    metrics: '10.000 Paket Lengkap',
    period: 'Klien Sejak 2022',
    badge: 'Mitra Event Tahunan',
  },
  {
    id: 5,
    name: 'Garuda Food Industries',
    logo: '/images/10.png',
    industry: 'Pabrik Makanan Ringan',
    scope: 'Kardus Kirim & Label Produk',
    solution: 'Penyediaan kardus kemasan luar tebal tahan banting dan label stiker barcode terbaca jelas oleh mesin kasir.',
    metrics: '100.000+ Kardus / bln',
    period: 'Klien Sejak 2024',
    badge: 'Distribusi Grosir',
  },
  {
    id: 6,
    name: 'Astra International Group',
    logo: '/images/11.png',
    industry: 'Otomotif & Industri',
    scope: 'Buku Panduan & Map Kantor',
    solution: 'Buku manual servis kendaraan dan map dokumen tebal berlapis elegan untuk serah terima kendaraan baru.',
    metrics: '15.000 Buku Manual',
    period: 'Klien Sejak 2020',
    badge: 'Vendor Resmi',
  },
  {
    id: 7,
    name: 'PT Mayora Indah Tbk',
    logo: '/images/12.png',
    industry: 'Biskuit & Makanan Ringan',
    scope: 'Kemasan Promo Supermarket',
    solution: 'Dus promosi edisi khusus hari raya dan rak pajangan kertas tebal untuk dipajang di supermarket.',
    metrics: '75.000 Dus Kemasan',
    period: 'Klien Sejak 2023',
    badge: 'Promo Supermarket',
  },
  {
    id: 8,
    name: 'Lion Parcel Logistics',
    logo: '/images/13.png',
    industry: 'Jasa Ekspedisi & Logistik',
    scope: 'Stiker Mobil Box & Neon Box',
    solution: 'Stiker anti air tahan cuaca untuk 80+ mobil operasional dan papan nama neon box konter cabang.',
    metrics: '80+ Mobil Operasional',
    period: 'Klien Sejak 2024',
    badge: 'Branding Armada',
  },
];

// ─── NILAI UTAMA KAMI (Bahasa Sederhana) ─────────────────────────────────────
export const CORE_VALUES = [
  {
    title: 'Hasil Warna Pas & Konsisten',
    description:
      'Kami pastikan warna logo dan desain Anda keluar pas di cetakan, tidak pudar, tidak belang, dan sama di setiap lembar.',
  },
  {
    title: 'Tepat Waktu Sesuai Janji',
    description:
      'Kami menghargai jadwal promosi dan bisnis Anda. Tanggal selesai yang disepakati adalah komitmen yang selalu kami pegang.',
  },
  {
    title: 'Bahan Pilihan & Rapi',
    description:
      'Kertas tebal pilihan, potongan presisi rapi, dan lem jilid kuat yang tahan lama saat digunakan sehari-hari.',
  },
  {
    title: 'Konsultasi Ramah & Solutif',
    description:
      'Tidak perlu bingung soal istilah percetakan. Ceritakan kebutuhan Anda, tim kami yang bantu carikan pilihan terbaik dan paling hemat.',
  },
];
