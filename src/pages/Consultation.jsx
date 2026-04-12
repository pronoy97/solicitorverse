import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Shield, Clock, Users, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const consultationSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone number is required'),
  email: z.string().email('Valid email is required'),
  caseType: z.string().min(1, 'Please select a case type'),
  message: z.string().optional()
})

const caseTypes = [
  'Corporate Law',
  'Family Law',
  'Criminal Defense',
  'Real Estate Law',
  'Intellectual Property',
  'Civil Litigation',
  'Other'
]

export default function Consultation() {
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(consultationSchema)
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Consultation request:', data)
      setSubmitStatus('success')
      reset()
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Book Consultation | LegalElite Law Firm</title>
        <meta name="description" content="Schedule your free legal consultation with our experienced attorneys today." />
      </Helmet>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background elements */}
        <motion.div
          className="absolute -right-32 -top-32 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -left-32 bottom-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 mb-6">
                  <span className="text-accent-400">✓</span>
                  <span className="text-white/90 font-medium">Free 30-Minute Consultation</span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Get Expert Legal Guidance Today
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white/80 mb-8"
              >
                Schedule your free consultation with one of our experienced attorneys. We'll discuss your case, explain your options, and chart the best course forward.
              </motion.p>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4 mb-8"
              >
                {[
                  { icon: Shield, text: 'Confidential & Secure' },
                  { icon: Clock, text: 'Quick Response Time' },
                  { icon: Users, text: 'Expert Legal Team' }
                ].map((item, idx) => {
                  const Icon = item.icon
                  return (
                    <div key={idx} className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent-400" />
                      </div>
                      <span className="text-white/90 font-medium">{item.text}</span>
                    </div>
                  )
                })}
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-md"
              >
                <p className="text-white/70 text-sm">
                  <strong>Disclaimer:</strong> Initial consultation does not establish an attorney-client relationship. Consultations are confidential. Past results cannot guarantee future outcomes.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-full"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 sticky top-24">
                <h2 className="font-serif text-3xl font-bold text-primary-900 mb-2">Book Your Consultation</h2>
                <p className="text-gray-600 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-green-800 font-bold">Consultation Requested!</p>
                      <p className="text-green-700 text-sm">We'll contact you soon to confirm.</p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('name')}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none text-sm ${
                        errors.name
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-gray-200 focus:border-primary-500'
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      placeholder="(123) 456-7890"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none text-sm ${
                        errors.phone
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-gray-200 focus:border-primary-500'
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email')}
                      placeholder="your@email.com"
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none text-sm ${
                        errors.email
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-gray-200 focus:border-primary-500'
                      }`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Case Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Type of Legal Matter *
                    </label>
                    <select
                      {...register('caseType')}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors focus:outline-none text-sm ${
                        errors.caseType
                          ? 'border-red-300 focus:border-red-500'
                          : 'border-gray-200 focus:border-primary-500'
                      }`}
                      disabled={isSubmitting}
                    >
                      <option value="">Select a matter type...</option>
                      {caseTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.caseType && (
                      <p className="text-red-600 text-xs mt-1">{errors.caseType.message}</p>
                    )}
                  </div>

                  {/* Brief Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Brief Description (Optional)
                    </label>
                    <textarea
                      {...register('message')}
                      placeholder="Tell us a bit about your situation..."
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none text-sm resize-none"
                      disabled={isSubmitting}
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary-700 to-primary-900 hover:from-primary-800 hover:to-primary-950 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Request Free Consultation</span>
                    )}
                  </motion.button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree that our firm may contact you to discuss your consultation request.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">Why Choose LegalElite?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We combine expertise with genuine care for our clients' success.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Experienced Team',
                description: '25+ years of combined legal expertise across multiple practice areas.'
              },
              {
                icon: Shield,
                title: 'Your Advocate',
                description: 'We fight for your interests with strategic thinking and proven results.'
              },
              {
                icon: Clock,
                title: 'Responsive Service',
                description: '24-hour response time and flexible scheduling for your convenience.'
              }
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary-700" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
