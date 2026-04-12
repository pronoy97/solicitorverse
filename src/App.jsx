import DisclaimerModal from './components/DisclaimerModal'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Consultation from './pages/Consultation'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <Router>
      <DisclaimerModal />   {/* ✅ must be here */}
      <ScrollToTop />
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/consultation" element={<Consultation />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </Router>
  )
}
