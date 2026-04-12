import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Briefcase, Shield, Users, Award, TrendingUp, Lock } from 'lucide-react'
import Hero from '../components/Hero'
import CTASection from '../components/CTASection'

const services = [
  {
    icon: Award,
    title: 'Civil Litigation',
    desc: 'We represent clients in a wide range of civil disputes with a strategic and result-oriented approach.',
    points: [
      'Property disputes and land matters',
      'Contract disputes and recovery suits',
      'Service and employment disputes',
      'Injunctions and civil appeals'
    ]
  },
  {
    icon: Shield,
    title: 'Criminal Litigation',
    desc: 'Strong legal defense in criminal matters with focus on protecting your rights at every stage.',
    points: [
      'Bail applications (regular & anticipatory)',
      'Trial representation in criminal courts',
      'FIR quashing & criminal appeals',
      'White-collar offences'
    ]
  },
  {
    icon: Users,
    title: 'Consumer Disputes',
    desc: 'Effective representation before consumer forums for defective services and unfair trade practices.',
    points: [
      'District, State & National Commission cases',
      'Insurance claim disputes',
      'Deficiency in services matters',
      'Compensation claims'
    ]
  },
  {
    icon: Briefcase,
    title: 'Banking & Taxation',
    desc: 'Legal advisory and litigation support in banking, finance, GST, recovery and other taxationproceedings.',
    points: [
      'Cheque bounce (NI Act cases)',
      'SARFAESI proceedings',
      'Loan recovery disputes',
      'GST and taxation disputes'
    ]
  },
  {
    icon: Lock,
    title: 'Matrimonial & Family Law',
    desc: 'Sensitive handling of family disputes with focus on resolution and legal protection.',
    points: [
      'Divorce (mutual & contested)',
      'Child custody & visitation',
      'Maintenance & alimony',
      'Domestic violence matters'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Corporate Advisory',
    desc: 'Legal solutions for businesses covering contracts, compliance, and dispute management.',
    points: [
      'Contract drafting & review',
      'Business agreements & compliance',
      'NCLT cases and corporate disputes',
      'Corporate dispute resolution'
    ]
  },

  {
    icon: Users,
    title: 'Labour & Employment Law',
    desc: 'Legal support for employees and employers in workplace disputes and compliance matters.',
    points: [
      'Wrongful termination cases',
      'Salary and dues recovery',
      'Workplace harassment matters',
      'Employment agreements & policies'
    ]
  },
  {
    icon: Briefcase,
    title: 'Arbitration & ADR',
    desc: 'Efficient resolution of disputes through arbitration and alternative dispute mechanisms.',
    points: [
      'Domestic & commercial arbitration',
      'Mediation & conciliation',
      'Contractual dispute resolution',
      'Enforcement of arbitral awards'
    ]
  },
  {
    icon: Lock,
    title: 'Legal Notices & Documentation',
    desc: 'Drafting and reviewing legal documents to safeguard your rights and interests.',
    points: [
      'Legal notices drafting',
      'Agreements & contracts',
      'Affidavits & declarations',
      'Due diligence documentation'
    ]
  }
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services | SolicitorVerse</title>
        <meta name="description" content="Comprehensive legal services including civil, criminal, corporate, banking and family law." />
      </Helmet>

      <Hero
        title="Our Legal Services"
        subtitle="Focused legal solutions tailored to protect your rights and achieve the best outcomes."
      />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">
              Practice Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive legal services across multiple domains with a practical and client-focused approach.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-10 h-10 text-accent-500 mr-4" />
                  <h3 className="font-serif text-2xl font-bold text-primary-900">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-700 mb-4">
                  {service.desc}
                </p>

                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center px-4">
          <h2 className="font-serif text-3xl font-bold mb-6 text-primary-900">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg">
            We combine legal expertise with a practical approach, ensuring that our clients receive clear advice, strong representation, and reliable support throughout their legal journey.
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need Legal Assistance?"
        subtitle="Get in touch today and let us help you resolve your legal matters with confidence."
        buttonText="Book Consultation"
        buttonLink="/contact"
      />
    </>
  )
}