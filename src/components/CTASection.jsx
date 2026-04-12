import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'

export default function CTASection({ title, subtitle, buttonText = "Book Consultation", buttonLink = "/consultation" }) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B1F3A] to-[#132F5B] overflow-hidden relative">
      {/* Animated background elements */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-white/80 text-xl mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <Link
            to={buttonLink}
            className="group inline-flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 rounded-lg transition-all hover:shadow-2xl hover:scale-105 transform"
          >
            <Phone className="w-5 h-5" />
            <span>{buttonText}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
