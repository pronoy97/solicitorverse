import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Enter valid 10-digit number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters')
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',   // 🔁 replace
        'YOUR_TEMPLATE_ID',  // 🔁 replace
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone,
          subject: data.subject,
          message: data.message
        },
        'YOUR_PUBLIC_KEY'    // 🔁 replace
      )

      setSubmitStatus('success')

      setTimeout(() => {
        setSubmitStatus(null)
        reset()
      }, 3000)

    } catch (error) {
      console.error(error)
      setSubmitStatus('error')

      setTimeout(() => setSubmitStatus(null), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >

      {/* Success */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <p className="text-green-700">Message sent successfully!</p>
        </div>
      )}

      {/* Error */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <p className="text-red-700">Something went wrong. Try again.</p>
        </div>
      )}

      <div className="space-y-6">

        {/* Name */}
        <div>
          <input
            {...register('name')}
            placeholder="Full Name"
            className="w-full px-4 py-3 border rounded-lg"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>

        {/* Email */}
        <div>
          <input
            {...register('email')}
            placeholder="Email"
            className="w-full px-4 py-3 border rounded-lg"
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>

        {/* Phone */}
        <div>
          <input
            {...register('phone')}
            placeholder="Phone (10 digits)"
            className="w-full px-4 py-3 border rounded-lg"
          />
          {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
        </div>

        {/* Subject */}
        <div>
          <input
            {...register('subject')}
            placeholder="Subject"
            className="w-full px-4 py-3 border rounded-lg"
          />
          {errors.subject && <p className="text-red-600">{errors.subject.message}</p>}
        </div>

        {/* Message */}
        <div>
          <textarea
            {...register('message')}
            placeholder="Your message..."
            rows="5"
            className="w-full px-4 py-3 border rounded-lg"
          />
          {errors.message && <p className="text-red-600">{errors.message.message}</p>}
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-700 text-white py-3 rounded-lg flex items-center justify-center"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

      </div>
    </motion.form>
  )
}