import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'

export default function FloatingWhatsApp() {
  const phoneNumber = '917837541531' // Replace with actual phone number
  const message = 'Hello, I would like to discuss a legal matter and seek your advice.'

  const handleWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.button
      onClick={handleWhatsApp}
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-40 transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  )
}
