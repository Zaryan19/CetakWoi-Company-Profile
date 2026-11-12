/**
 * Generates a direct WhatsApp click-to-chat URL with pre-filled encoded text.
 * Reads target phone number from environment variables with safe fallback.
 * 
 * @param {string} customMessage - Custom message to pre-fill
 * @returns {string} Fully formatted wa.me URL
 */
export const generateWaLink = (customMessage = '') => {
  const defaultPhone = '6281234567890';
  const rawNumber = import.meta.env.VITE_WHATSAPP_NUMBER || defaultPhone;
  // Strip non-numeric characters just in case
  const cleanNumber = String(rawNumber).replace(/\D/g, '');

  const defaultGreeting =
    'Halo CetakWoi, saya ingin berkonsultasi mengenai kebutuhan cetak & produksi perusahaan kami.';

  const messageText = customMessage.trim() ? customMessage : defaultGreeting;
  const encodedText = encodeURIComponent(messageText);

  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
};

export default generateWaLink;

