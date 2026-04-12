import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import CTASection from '../components/CTASection'

const blogPosts = [
  {
    slug: 'cheque-bounce-ni-act',
    title: 'Cheque Bounce Case under Section 138 NI Act – Complete Guide',
    excerpt: 'Understand the legal process, penalties, and remedies available in cheque bounce cases.',
    date: 'April 2026',
    category: 'Banking Law'
  },
  {
    slug: 'fir-rights-india',
    title: 'What to Do After FIR is Filed Against You',
    excerpt: 'Know your legal rights and immediate steps after FIR registration.',
    date: 'April 2026',
    category: 'Criminal Law'
  },
  {
    slug: 'anticipatory-bail',
    title: 'Anticipatory Bail vs Regular Bail – Key Differences',
    excerpt: 'Understand bail types and when to apply for each.',
    date: 'April 2026',
    category: 'Criminal Law'
  },
  {
    slug: 'property-disputes',
    title: 'Property Disputes in India: Legal Remedies Explained',
    excerpt: 'Learn how to handle property disputes legally.',
    date: 'April 2026',
    category: 'Civil Law'
  },
  {
    slug: 'consumer-complaint',
    title: 'How to File a Consumer Complaint in India',
    excerpt: 'Step-by-step guide to filing consumer complaints.',
    date: 'April 2026',
    category: 'Consumer Law'
  },
  {
    slug: 'insurance-claim-rejection',
    title: 'Insurance Claim Rejected? Legal Remedies Available',
    excerpt: 'What to do if your insurance claim is denied.',
    date: 'April 2026',
    category: 'Insurance Law'
  }
]

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Legal Insights | SolicitorVerse</title>
      </Helmet>

      <Hero
        title="Legal Insights & Updates"
        subtitle="Practical legal guidance and insights for clients."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogPosts.map((post, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="border rounded-xl p-6 hover:shadow-xl transition group"
            >
              <p className="text-sm text-primary-600 mb-2">{post.category}</p>

              <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-accent-600">
                {post.title}
              </h3>

              <p className="text-gray-600 mb-4">{post.excerpt}</p>

              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </div>

                <Link to={`/blog/${post.slug}`}>
                  <ArrowRight className="w-5 h-5 text-primary-700 group-hover:text-accent-600" />
                </Link>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      <CTASection
        title="Need Legal Help?"
        subtitle="Contact us for expert legal advice."
        buttonText="Book Consultation"
        buttonLink="/contact"
      />
    </>
  )
}