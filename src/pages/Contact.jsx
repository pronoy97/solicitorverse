import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react'
import Hero from '../components/Hero'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us | SolicitorVerse Law Firm</title>
        <meta name="description" content="Get in touch with SolicitorVerse Law Firm. Contact us for consultation and legal assistance." />
      </Helmet>

      <Hero
        title="Get in Touch"
        subtitle="Have questions? We're here to help. Reach out to our team today."
      />

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-serif text-3xl font-bold text-primary-900 mb-8">
                  Contact Information
                </h2>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                  <MapPin className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                  <p className="mt-2 text-gray-600">
                    Office cum Residential: #114 City Enclave<br />
                    Bhabat Road, Zirakpur<br />
                    District SAS Nagar (Mohali)<br />
                    Punjab, India - 140603
                    <br /><br />
                    Chamber No. 106 New Chambers Block,<br />
                    Punjab and Haryana High Court,<br />
                    Chandigarh - 160001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                  <Phone className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="mt-2 text-primary-700 font-semibold">
                    <a href="tel:+919417514212">+91-94175-14212</a><br />
                    <a href="tel:+917837541531">+91-78375-41531</a>
                  </p>
                  <p className="text-sm text-gray-600">Available during business hours</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                  <Mail className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="mt-2 text-primary-700 font-semibold break-all">
                    <a href="mailto:manmohan_adv@yahoo.co.in">manmohan_adv@yahoo.co.in</a><br />
                    <a href="mailto:pronoysrivastava@gmail.com">pronoysrivastava@gmail.com</a>
                  </p>
                  <p className="text-sm text-gray-600">Response within 24 hours</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary-100">
                  <Clock className="h-6 w-6 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Business Hours</h3>
                  <p className="mt-2 text-gray-600">
                    Monday - Saturday: 9:00 AM - 9:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="font-serif text-3xl font-bold text-primary-900 mb-8">
                Send us a Message
              </h2>
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>



      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Get quick answers to common questions about contacting us.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'How quickly will you respond?',
                a: 'We respond within 24 hours.'
              },
              {
                q: 'Is consultation free?',
                a: 'Yes, initial consultation is free.'
              },
              {
                q: 'What info should I provide?',
                a: 'Provide complete details of your case.'
              },
              {
                q: 'Do you offer virtual consultations?',
                a: 'Yes, via phone and video.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg border">
                <h3 className="font-semibold">{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}