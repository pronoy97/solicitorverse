import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' }
  ]

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-gradient-to-b from-primary-950/80 to-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* ✅ LOGO (UPDATED) */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="SolicitorVerse Logo"
              className="h-10 w-auto"
            />

            <span className={`font-serif font-bold text-xl transition-colors ${
              isScrolled ? 'text-primary-900' : 'text-white'
            }`}>
              SolicitorVerse
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-primary-700'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/consultation"
              className="hidden md:inline-flex items-center space-x-2 bg-accent-500 hover:bg-accent-600 text-primary-950 font-bold px-6 py-2 rounded-lg transition-all hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-100 pb-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="flex flex-col space-y-3 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-gray-700 hover:text-primary-700 font-medium px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/consultation"
                className="bg-accent-500 hover:bg-accent-600 text-primary-950 font-bold px-4 py-2 rounded-lg mx-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}