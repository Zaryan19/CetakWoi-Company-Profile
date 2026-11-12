import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, Send, Globe, CheckCircle2 } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { COMPANY_INFO, SERVICE_CATEGORIES } from '../constants/navigation';
import { generateWaLink } from '../utils/whatsapp';

/**
 * Contact Us Page — Light Editorial Theme & Plain Language
 * Features office details, Google Maps embed, and an Interactive WhatsApp Inquiry Builder.
 */
export const Contact = () => {
  const shouldReduceMotion = useReducedMotion();

  // WhatsApp Inquiry Builder State
  const [inquiry, setInquiry] = useState({
    companyName: '',
    productType: 'Dus & Kemasan Produk',
    quantity: '',
    specs: '',
    deadline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInquiry((prev) => ({ ...prev, [name]: value }));
  };

  // Build live WhatsApp formatted text
  const buildFormattedMessage = () => {
    const company = inquiry.companyName.trim() || '[Nama Perusahaan / Brand Anda]';
    const product = inquiry.productType || '[Pilihan Produk]';
    const qty = inquiry.quantity.trim() || '[Jumlah Pesanan]';
    const specs = inquiry.specs.trim() || '[Catatan / Ukuran]';
    const deadline = inquiry.deadline.trim() || '[Tanggal / Kapan Selesai]';

    return `Halo PrintingGo, saya dari *${company}*.\n\nSaya ingin menanyakan estimasi biaya dan ketersediaan untuk cetak:\n📦 *Jenis Produk:* ${product}\n🔢 *Perkiraan Jumlah:* ${qty}\n📋 *Catatan / Ukuran:* ${specs}\n📅 *Target Selesai:* ${deadline}\n\nMohon bantu informasikan rekomendasi bahan terbaik dan estimasi harganya. Terima kasih.`;
  };

  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    const finalMessage = buildFormattedMessage();
    const waUrl = generateWaLink(finalMessage);
    window.open(waUrl, '_blank', 'noopener noreferrer');
  };

  return (
    <div className="w-full bg-white text-[#1A1A1A]">
      
      {/* 1. Page Hero */}
      <section className="pt-16 pb-14 sm:pt-20 sm:pb-16 lg:pt-28 lg:pb-24 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl space-y-5 sm:space-y-6"
          >
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#52525B] block">
              / HUBUNGI KAMI
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] break-words">
              Konsultasikan Rencana Cetak Anda Sekarang.
            </h1>
            <p className="text-sm sm:text-base lg:text-lg font-light text-[#52525B] leading-relaxed max-w-2xl">
              Punya ide, pertanyaan bahan, atau butuh hitungan biaya cepat? Tim teknis kami siap membantu Anda dengan ramah dan solutif.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive WhatsApp Inquiry Builder */}
      <section className="py-16 sm:py-20 lg:py-28 border-b border-[#E4E4E7] bg-[#F4F4F5]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-10 sm:mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#114576] block mb-2 font-semibold">
              KIRIM PERMINTAAN HARGA CEPAT
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1A1A1A]">
              WhatsApp Inquiry Builder
            </h2>
            <p className="text-xs sm:text-sm font-light text-[#52525B] mt-2 leading-relaxed">
              Isi data di bawah ini, dan sistem kami akan otomatis menyusun draf pesan WhatsApp yang rapi untuk dikirimkan langsung ke tim sales teknis kami.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Form Inputs (7 Cols) */}
            <form
              onSubmit={handleSendWhatsApp}
              className="lg:col-span-7 bg-white border border-[#E4E4E7] rounded-[4px] p-5 sm:p-8 space-y-5 sm:space-y-6"
            >
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] block font-medium">
                  Nama Perusahaan / Brand Anda
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={inquiry.companyName}
                  onChange={handleChange}
                  placeholder="Contoh: Kopi Nusantara / PT Maju Makmur"
                  className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] px-4 py-3 text-base text-[#1A1A1A] placeholder-[#52525B]/50 focus:outline-none focus:border-[#1A1A1A] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] block font-medium">
                    Jenis Produk yang Dibutuhkan
                  </label>
                  <select
                    name="productType"
                    value={inquiry.productType}
                    onChange={handleChange}
                    className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] px-4 py-3 text-base text-[#1A1A1A] focus:outline-none focus:border-[#1A1A1A] transition-colors"
                  >
                    {SERVICE_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.name}>
                        {cat.name}
                      </option>
                    ))}
                    <option value="Pesanan Khusus / Lainnya">Pesanan Khusus / Lainnya</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] block font-medium">
                    Perkiraan Jumlah Pesanan
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={inquiry.quantity}
                    onChange={handleChange}
                    placeholder="Contoh: 1.000 dus / 50 meter"
                    className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] px-4 py-3 text-base text-[#1A1A1A] placeholder-[#52525B]/50 focus:outline-none focus:border-[#1A1A1A] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] block font-medium">
                  Catatan Tambahan (Ukuran / Bahan / Permintaan Khusus)
                </label>
                <textarea
                  name="specs"
                  rows={3}
                  value={inquiry.specs}
                  onChange={handleChange}
                  placeholder="Contoh: Ukuran 20x10 cm, bahan kraft coklat tahan minyak, ada logo warna emas di tutupnya"
                  className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] px-4 py-3 text-base text-[#1A1A1A] placeholder-[#52525B]/50 focus:outline-none focus:border-[#1A1A1A] transition-colors resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-[#1A1A1A] block font-medium">
                  Target Tanggal Mau Dipakai
                </label>
                <input
                  type="text"
                  name="deadline"
                  value={inquiry.deadline}
                  onChange={handleChange}
                  placeholder="Contoh: 25 Desember 2026 / Butuh cepat"
                  className="w-full bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] px-4 py-3 text-base text-[#1A1A1A] placeholder-[#52525B]/50 focus:outline-none focus:border-[#1A1A1A] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full min-h-[48px] py-4 bg-[#1A1A1A] text-white text-sm font-semibold rounded-[4px] hover:bg-black active:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-emerald-400" />
                <span>Kirim Pesan ke WhatsApp Sales PrintingGo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>

            {/* Live Preview Box (5 Cols) */}
            <div className="lg:col-span-5 bg-white border border-[#E4E4E7] rounded-[4px] p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-[#E4E4E7] pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#52525B] font-medium">
                  TAMPILAN PESAN WHATSAPP ANDA:
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Preview
                </span>
              </div>

              <div className="p-4 bg-[#F4F4F5] rounded-[4px] border border-[#E4E4E7] text-xs font-mono text-[#1A1A1A] whitespace-pre-wrap leading-relaxed min-h-[220px]">
                {buildFormattedMessage()}
              </div>

              <p className="text-[11px] font-mono text-[#52525B]">
                * Ketika Anda menekan tombol kirim di atas, aplikasi WhatsApp Anda akan terbuka secara otomatis dengan teks yang telah terisi rapi.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Office Details & Map */}
      <section className="py-16 sm:py-20 lg:py-28 border-b border-[#E4E4E7]">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Info Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#52525B] block mb-2">
                  / LOKASI &amp; KONTAK
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                  Kantor &amp; Pabrik Produksi
                </h2>
                <p className="text-sm font-light text-[#52525B] mt-2">
                  Pintu kami selalu terbuka bagi Anda yang ingin berkonsultasi langsung atau melihat contoh sampel cetak fisik.
                </p>
              </div>

              <div className="space-y-5 text-sm font-light text-[#52525B] border-t border-[#E4E4E7] pt-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1A1A1A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A] font-semibold mb-0.5">Alamat Pabrik</strong>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#1A1A1A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A] font-semibold mb-0.5">Telepon Kantor</strong>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#1A1A1A] transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#1A1A1A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A] font-semibold mb-0.5">Email Penawaran Resmi</strong>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#1A1A1A] transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1A1A1A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A] font-semibold mb-0.5">Jam Operasional</strong>
                    <span>{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-[#1A1A1A] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A] font-semibold mb-0.5">Jangkauan Pengiriman</strong>
                    <span>{COMPANY_INFO.operatingArea}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Google Map (7 Cols) */}
            <div className="lg:col-span-7 bg-[#F4F4F5] border border-[#E4E4E7] rounded-[4px] p-4 flex flex-col justify-between">
              <div className="w-full h-[400px] rounded-[4px] overflow-hidden border border-[#E4E4E7]">
                <iframe
                  title="Peta Lokasi Pabrik PrintingGo di Kawasan Industri Pulogadung"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.819326265007!2d106.90226315!3d-6.1969246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f4bce22896bb%3A0xa646274b7cb60086!2sPulogadung%20Industrial%20Estate!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs font-mono text-[#52525B]">
                <span>PABRIK PRINTINGGO — KAWASAN INDUSTRI PULOGADUNG</span>
                <span>JAKARTA TIMUR</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
