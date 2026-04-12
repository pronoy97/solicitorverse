import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Briefcase, Shield, Users, Award, TrendingUp, Lock, Scale } from 'lucide-react'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import TestimonialCard from '../components/TestimonialCard'
import CTASection from '../components/CTASection'

const services = [
  {
    icon: Scale,
    title: 'Civil Litigation',
    description: 'Comprehensive legal services for civil disputes including Property, Contract, Administrative and Service law matters.',
    slug: 'civil-laws'
  },
  {
    icon: Shield,
    title: 'Criminal Litigation',
    description: 'Legal defense in criminal matters including bail, trial, FIR issues, white-collar offences and others.',
    slug: 'criminal-law'
  },
  {
    icon: Users,
    title: 'Consumer Disputes',
    description: 'Handling consumer complaints and disputes before District, State, and National Consumer Forums.',
    slug: 'consumer-disputes'
  },
  {
    icon: Award,
    title: 'Banking & Taxation',
    description: 'Advisory and litigation in banking, SARFAESI matters, and financial disputes along with GST/Tax compliance and litigation.',
    slug: 'banking-taxation'
  },
  {
    icon: Lock,
    title: 'Matrimonial & Family Disputes',
    description: 'Support in Divorce, custody, alimony, maintenance and family law matters.',
    slug: 'Matrimonial-family-disputes'
  },
  {
    icon: TrendingUp,
    title: 'Corporate Law & Advisory',
    description: 'Legal support for contracts, compliance, risk management, negotiation and business disputes.',
    slug: 'corporate-advisory'
  }
]

const testimonials = [
  {
    name: 'Rohit Sharma',
    role: 'Business Owner',
    content: 'Very professional and practical legal advice. The team handled my matter efficiently and kept me informed throughout the process.',
  },
  {
    name: 'Anjali Verma',
    role: 'Private Client',
    content: 'I had a consumer dispute which was resolved smoothly. The approach was clear, strategic, and client-focused.',
  },
  {
    name: 'Amit Mehta',
    role: 'Entrepreneur',
    content: 'Excellent support in handling my banking matter. Their understanding of both legal and financial aspects really helped.',
  },
  {
    name: 'Neha Kapoor',
    role: 'Working Professional',
    content: 'Very approachable and transparent. I felt confident throughout my case because of their guidance.',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Premium Law Firm | Expert Legal Services</title>
        <meta name="description" content="Trusted legal services for corporate, family, and criminal law." />
      </Helmet>

      {/* Hero Section */}
      <Hero
        title="Expert Legal Solutions For Your Future"
        subtitle="Trusted by hundreds of clients. Our team delivers excellence in every case."
      />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Choose SolicitorVerse?</h2>
            <p className="text-gray-600">We combine legal expertise with client-focused service.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[{
              icon: Award,
              title: 'Expertise',
              description: 'Recognized for excellence in legal practice.'
            },
            {
              icon: Users,
              title: 'Client First',
              description: 'We prioritize your goals.'
            },
            {
              icon: Shield,
              title: 'Proven Results',
              description: 'Track record of success.'
            }].map((item, idx) => (
              <motion.div key={idx} className="bg-white p-8 rounded-xl text-center">
                <item.icon className="w-8 h-8 mx-auto mb-4" />
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Practice Areas</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ServiceCard key={idx} {...service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Client Testimonials</h2>

          <div className="grid md:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Secure Your Legal Future?"
        subtitle="Book a consultation today to discuss your case."
        buttonText="Schedule Free Consultation"
        buttonLink="/consultation"
      />
    </>
  )
}