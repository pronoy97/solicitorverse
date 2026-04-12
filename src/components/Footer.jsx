import { Link } from 'react-router-dom'
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { label: 'Corporate Law', slug: 'corporate-law' },
      { label: 'Family Law', slug: 'family-law' },
      { label: 'Criminal Law', slug: 'criminal-law' },
      { label: 'Real Estate Law', slug: 'real-estate-law' }
    ],
    Company: [
      { label: 'About Us', path: '/about' },
      { label: 'Blog', path: '/blog' },
      { label: 'Contact', path: '/contact' },
      { label: 'Careers', path: '/' }
    ]
  }

  return (
    <footer className="bg-[#0B1F3A] text-white">

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center">
                  <span className="text-primary-950 font-bold text-lg">⚖</span>
                </div>
                <span className="font-serif font-bold text-xl">SolicitorVerse</span>
              </div>

              <p className="text-white/70 mb-6">
                Delivering excellence in legal services with integrity and expertise.
              </p>

              {/* ✅ LinkedIn Only */}
              <div className="flex space-x-4">

                <a
                  href="https://www.linkedin.com/in/pronoy-srivastava-193467201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-400 hover:scale-110 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/manmohan-shrivastava-6141a8231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-400 hover:scale-110 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

              </div>
            </motion.div>

            {/* Quick Links */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <motion.div key={title}>
                <h4 className="font-serif font-bold text-lg mb-6">{title}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.path || `/services/${link.slug}`}
                        className="text-white/70 hover:text-accent-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact */}
            <motion.div>
              <h4 className="font-serif font-bold text-lg mb-6">Contact Us</h4>

              <div className="space-y-4">

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent-400" />
                  <a href="tel:+919417514212" className="text-white/70 hover:text-accent-400">
                    +91-94175-14212, +91-7837541531
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent-400" />
                  <div className="flex flex-col text-white/70">
                    <a href="mailto:manmohan_adv@yahoo.co.in">manmohan_adv@yahoo.co.in</a>
                    <a href="mailto:pronoysrivastava@gmail.com">pronoysrivastava@gmail.com</a>
                  </div>
                </div>

{/* Address 1 */}
<div className="flex items-start space-x-3">
  <MapPin className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
  <p className="text-white/70">
    Office cum Residential: #114 City Enclave<br />
    Bhabat Road, Zirakpur<br />
    District SAS Nagar (Mohali)<br />
    Punjab, India - 140603
  </p>
</div>

{/* Address 2 */}
<div className="flex items-start space-x-3">
  <MapPin className="w-5 h-5 text-accent-400 mt-1 flex-shrink-0" />
  <p className="text-white/70">
    Chamber No. 106 New Chambers Block,<br />
    Punjab and Haryana High Court,<br />
    Chandigarh - 160001
  </p>
</div>

              </div>
            </motion.div>

          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="flex justify-between text-white/60 text-sm">
              <p>{2026} SolicitorVerse Law Firm. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Disclaimer</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}