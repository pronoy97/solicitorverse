import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function TestimonialCard({ name, title, company, content, rating = 5, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-all max-w-sm"
    >
      {/* Stars */}
      <div className="flex space-x-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-accent-400 fill-accent-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 text-lg mb-6 italic">"{content}"</p>

      {/* Author */}
      <div className="border-t border-gray-100 pt-4">
        <p className="font-serif font-bold text-primary-900 text-lg">{name}</p>
        <p className="text-gray-600 text-sm">{title}</p>
      </div>
    </motion.div>
  )
}
