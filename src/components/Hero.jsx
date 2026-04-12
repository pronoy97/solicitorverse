import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

export default function Hero({
  title = "Strategic Legal Solutions for Businesses and Individuals",
  subtitle = "Providing strategic legal counsel in corporate, banking, consumer and civil disputes with a focus on practical outcomes.",
  backgroundImage = null
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/50 to-white" />
      </div>

      {/* Animated elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:border-accent-400 transition-colors">
              <span className="text-accent-400">⭐</span>
              <span className="text-white font-medium">Trusted by 100+ Clients Nationwide</span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-4"
          >
            {[
              { value: '30+', label: 'Years Experience' },
              { value: '250+', label: 'Matters Handled' },
              { value: '98%', label: 'Client Satisfaction' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent-400">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <Link
              to="/consultation"
              className="group inline-flex items-center justify-center space-x-2 bg-accent-500 hover:bg-accent-600 text-primary-950 font-bold px-8 py-4 rounded-lg transition-all hover:shadow-xl hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span> Schedule a Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-white hover:text-primary-950 font-bold px-8 py-4 rounded-lg transition-all"
            >
              <span>View Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-white/60 text-sm">Scroll to explore</div>
      </motion.div>
    </section>
  )
}
