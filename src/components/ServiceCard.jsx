import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ icon: Icon, title, description, slug, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:border-accent-400 hover:shadow-2xl transition-all cursor-pointer h-full flex flex-col"
    >
      {/* Icon Section */}
      <div className="h-32 bg-gradient-to-br from-primary-50 to-accent-50 flex items-center justify-center group-hover:from-primary-100 group-hover:to-accent-100 transition-colors relative overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12" />
        </div>
        <Icon className="w-16 h-16 text-primary-900 group-hover:text-accent-500 transition-colors relative z-10" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-serif font-bold text-2xl text-primary-900 mb-3 group-hover:text-accent-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-base mb-6 flex-1">
          {description}
        </p>      
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-primary-700 to-accent-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </motion.div>
  )
}
