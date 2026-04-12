import { Helmet } from 'react-helmet-async'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react'
import { Briefcase, Shield, Lock, TrendingUp, Award, Heart } from 'lucide-react'
import CTASection from '../components/CTASection'
import ContactForm from '../components/ContactForm'

const servicesDetails = {
  'corporate-law': {
    title: 'Corporate Law Services',
    icon: Briefcase,
    description: 'Expert guidance for all your business legal needs',
    intro: 'Our corporate law practice serves businesses of all sizes, from startups to established corporations. We provide strategic legal guidance for every stage of your business journey.',
    sections: [
      {
        title: 'What We Offer',
        items: [
          'Business Formation & Entity Selection',
          'Contract Drafting & Negotiation',
          'Mergers & Acquisitions',
          'Corporate Governance & Compliance',
          'Shareholder Agreements',
          'Employment Contracts & Policies'
        ]
      },
      {
        title: 'Our Process',
        items: [
          'Initial Business Assessment',
          'Strategic Planning Session',
          'Document Preparation & Review',
          'Negotiation & Execution',
          'Ongoing Compliance Support',
          'Regular Legal Checkups'
        ]
      }
    ],
    faqs: [
      {
        q: 'What business structure should I choose?',
        a: 'The right structure depends on your specific situation, including liability concerns, tax implications, and operational needs. We help you choose the best option.'
      },
      {
        q: 'How much do corporate legal services cost?',
        a: 'We offer flexible fee structures including hourly rates, flat fees, and retainer arrangements. We\'ll discuss options during your consultation.'
      },
      {
        q: 'Do you help with contracts?',
        a: 'Yes, we draft, review, and negotiate all types of business contracts to protect your interests.'
      }
    ]
  },
  'family-law': {
    title: 'Family Law Services',
    icon: Heart,
    description: 'Compassionate legal representation for family matters',
    intro: 'We understand that family law matters are deeply personal. Our team provides compassionate, skilled representation while protecting your interests and your family\'s wellbeing.',
    sections: [
      {
        title: 'What We Offer',
        items: [
          'Divorce & Separation',
          'Child Custody & Support',
          'Spousal Support/Alimony',
          'Adoption & Guardianship',
          'Prenuptial & Postnuptial Agreements',
          'Mediation & Alternative Dispute Resolution'
        ]
      },
      {
        title: 'Our Process',
        items: [
          'Confidential Case Consultation',
          'Options Review (Litigation vs. Mediation)',
          'Documentation & Planning',
          'Negotiation or Court Representation',
          'Court Appearances & Testimony',
          'Post-Judgment Support'
        ]
      }
    ],
    faqs: [
      {
        q: 'How long does a divorce take?',
        a: 'Timeline varies based on complexity and whether both parties agree. Contested divorces may take 1-2 years, while amicable divorces can be finalized in months.'
      },
      {
        q: 'What factors determine child custody?',
        a: 'Courts consider the best interests of the child, including both parents\' capabilities, the child\'s preferences, and stability factors.'
      },
      {
        q: 'Can we mediate instead of going to court?',
        a: 'Yes, mediation is often more cost-effective and less contentious. We can help facilitate this process or represent you in mediation.'
      }
    ]
  },
  'criminal-defense': {
    title: 'Criminal Defense Services',
    icon: Shield,
    description: 'Aggressive defense of your rights in criminal matters',
    intro: 'Being charged with a crime is serious. Our experienced criminal defense team fights to protect your rights and achieve the best possible outcome.',
    sections: [
      {
        title: 'What We Offer',
        items: [
          'Misdemeanor & Felony Defense',
          'DUI/DWI Defense',
          'Drug Charges',
          'White-Collar Crimes',
          'Domestic Violence Charges',
          'Sex Crime Defense'
        ]
      },
      {
        title: 'Our Process',
        items: [
          'Immediate Legal Representation',
          'Evidence & Witness Review',
          'Motion Preparation',
          'Plea Negotiation',
          'Trial Preparation & Defense',
          'Appeals if Necessary'
        ]
      }
    ],
    faqs: [
      {
        q: 'Should I take a plea bargain?',
        a: 'We analyze the strength of the prosecution\'s case and advise on whether negotiating or proceeding to trial is in your best interest.'
      },
      {
        q: 'What can you do if I get arrested?',
        a: 'We provide immediate representation, bail hearings, initial defense preparation, and guidance on your rights during the process.'
      },
      {
        q: 'Do I need a criminal lawyer?',
        a: 'Criminal law is complex. An experienced criminal defense attorney protects your rights and can significantly impact the outcome.'
      }
    ]
  },
  'real-estate-law': {
    title: 'Real Estate Law Services',
    icon: Lock,
    description: 'Comprehensive guidance for real estate transactions and disputes',
    intro: 'Whether buying, selling, or managing property, we provide comprehensive real estate legal services to protect your investment.',
    sections: [
      {
        title: 'What We Offer',
        items: [
          'Residential & Commercial Sales',
          'Lease Preparation & Negotiation',
          'Property Dispute Resolution',
          'Title Review & Insurance',
          'Zoning & Land Use Issues',
          'Real Estate Financing'
        ]
      },
      {
        title: 'Our Process',
        items: [
          'Property Transaction Review',
          'Lease/Contract Negotiation',
          'Title Search & Clearance',
          'Final Documentation',
          'Closing Coordination',
          'Post-Transaction Support'
        ]
      }
    ],
    faqs: [
      {
        q: 'Do I need a lawyer for a real estate transaction?',
        a: 'Yes, having legal representation protects you from potential issues and ensures all documents are proper and enforceable.'
      },
      {
        q: 'What does title insurance cover?',
        a: 'Title insurance protects against claims to ownership and liens that may not have been discovered during initial title search.'
      },
      {
        q: 'What are typical real estate legal costs?',
        a: 'Costs vary based on transaction complexity. We provide transparent fee estimates during your initial consultation.'
      }
    ]
  },
  'intellectual-property': {
    title: 'Intellectual Property Services',
    icon: TrendingUp,
    description: 'Protection and enforcement of your intellectual property rights',
    intro: 'Your ideas and innovations are valuable. We help you protect and enforce your intellectual property rights in an increasingly digital world.',
    sections: [
      {
        title: 'What We Offer',
        items: [
          'Trademark Registration & Protection',
          'Patent Search & Filing',
          'Copyright Registration',
          'Trade Secret Protection',
          'IP Licensing',
          'Infringement Enforcement'
        ]
      },
      {
        title: 'Our Process',
        items: [
          'IP Assessment & Strategy',
          'Prior Art Search',
          'Application Preparation',
          'Prosecution & Negotiation',
          'Monitoring & Enforcement',
          'Maintenance & Renewal'
        ]
      }
    ],
    faqs: [
      {
        q: 'How do I protect my business name?',
        a: 'Trademark registration at state and federal levels provides strong legal protection for your brand name and logo.'
      },
      {
        q: 'What\'s the difference between patents and trademarks?',
        a: 'Patents protect inventions and processes, while trademarks protect brand names and logos. We can protect both.'
      },
      {
        q: 'How long does patent protection last?',
        a: 'Most utility patents last 20 years from filing date. Design patents last 15 years. We help manage your protection throughout.'
      }
    ]
  },
  'civil-litigation': {
    title: 'Civil Litigation Services',
    icon: Award,
    description: 'Strong advocacy in commercial and personal disputes',
    intro: 'Whether you\'re pursuing a claim or defending against one, our litigation team provides aggressive advocacy and strategic guidance to protect your interests.',
    sections: [
      {
        title: 'What We Offer',
        items: [
          'Contract Disputes',
          'Business Litigation',
          'Personal Injury Claims',
          'Employment Disputes',
          'Debt Collection',
          'Appeals & Post-Judgment'
        ]
      },
      {
        title: 'Our Process',
        items: [
          'Case Analysis & Strategy',
          'Discovery & Investigation',
          'Motion Practice',
          'Mediation Attempts',
          'Trial Preparation',
          'Appeals if Needed'
        ]
      }
    ],
    faqs: [
      {
        q: 'Is litigation the only option?',
        a: 'No, we often explore mediation, arbitration, and negotiation first. We recommend litigation only when necessary.'
      },
      {
        q: 'How long do civil cases take?',
        a: 'Timeline depends on complexity, court caseload, and whether settlement is reached. Simple cases may resolve in months; complex ones in years.'
      },
      {
        q: 'What can I recover in a lawsuit?',
        a: 'Potential damages include actual losses, costs, attorney fees, and in some cases, punitive damages. We discuss specifics in your case.'
      }
    ]
  }
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = servicesDetails[slug]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-primary-700 hover:text-primary-900 font-semibold">
            ← Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <>
      <Helmet>
        <title>{service.title} | LegalElite Law Firm</title>
        <meta name="description" content={service.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: service.title,
            description: service.description,
            provider: {
              '@type': 'Organization',
              name: 'LegalElite Law Firm'
            }
          })}
        </script>
      </Helmet>

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          <div className="flex items-center space-x-6 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
              <Icon className="w-10 h-10 text-accent-400" />
            </div>
            <div>
              <h1 className="font-serif text-4xl font-bold">{service.title}</h1>
              <p className="text-white/80 mt-2">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-700 leading-relaxed"
          >
            {service.intro}
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {service.sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h2 className="font-serif text-3xl font-bold text-primary-900 mb-6">{section.title}</h2>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <h3 className="font-semibold text-lg text-primary-900 mb-3">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary-900 mb-8">Get Expert Help</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm isConsultation={true} />
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg">
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+1234567890" className="flex items-center space-x-3 text-primary-700 hover:text-accent-600 transition-colors font-semibold">
                    <Phone className="w-5 h-5" />
                    <span className="break-all">+1 (234) 567-8900</span>
                  </a>
                  <p className="text-sm text-gray-600">Call us for immediate assistance or to schedule a consultation.</p>
                </div>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <p className="text-sm text-primary-900 font-semibold mb-2">Response Time</p>
                <p className="text-sm text-primary-700">We respond to consultation requests within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Take the Next Step"
        subtitle="Contact our team today to discuss your legal needs and explore how we can help."
      />
    </>
  )
}
