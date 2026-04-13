import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Award, Target, Heart } from 'lucide-react'
import Hero from '../components/Hero'
import CTASection from '../components/CTASection'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About the practice | SolicitorVerse</title>
        <meta name="description" content="Meet our team of experienced legal professionals dedicated to serving our clients with excellence." />
      </Helmet>

      <Hero
        title="The SolicitorVerse"
        subtitle="Practical legal solutions backed by real experience in litigation, banking, and corporate matters."
      />

      {/* ABOUT SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <img
          src="/logoo.png"
          alt="bg-logo"
          className="absolute inset-0 w-full h-full object-contain opacity-40 pointer-events-none"
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-6">
              About the Practice
            </h2>

            <p className="text-lg leading-relaxed text-gray-700 text-justify font-medium">
              SolicitorVerse is a litigation-focused law firm led by Advocates Man Mohan and Pronoy Srivastava. Based primarily in Punjab, Haryana, Himachal Pradesh, and the UT of Chandigarh, the firm offers extensive experience in civil, criminal, consumer, insurance, and banking matters. With over 30 years of combined experience, the firm provides practical, results-driven legal solutions.

              <br /><br />

              Built on integrity and practical legal insight, the practice focuses on delivering clear, result-oriented solutions tailored to each client’s needs.

              <br /><br />

              With professional exposure across courts, financial institutions, and advisory roles, the firm ensures dedicated representation and strategic guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Our Mission', content: 'Deliver practical and result-oriented legal solutions.' },
              { icon: Heart, title: 'Our Values', content: 'Integrity, excellence, and client-first approach.' },
              { icon: Award, title: 'Our Promise', content: 'Dedicated representation with strategic thinking.' }
            ].map((item, i) => (
              <motion.div key={i} className="bg-white p-8 rounded-xl shadow-sm">
                <item.icon className="w-8 h-8 text-primary-700 mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-12">Our Team</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Man Mohan',
                degree: 'BA., LL.B',
                title: 'Founder and Senior Advocate',
                bio: `A seasoned legal professional with over 30 years of extensive courtroom experience, specializing in civil, criminal, consumer, and banking laws.

Known for his sharp legal acumen and strategic approach, he has built a strong track record in complex litigation and has successfully represented clients across various courts with integrity and professionalism.`,
                image: '/manmohan.jpg'
              },
              {
                name: 'Pronoy Srivastava',
                degree: 'B.com LL.B (h), LLM (Corporate Law)',
                title: 'Advocate and Legal Practitioner',
                bio: `A dynamic legal practitioner with expertise in litigation, banking, corporate, and consumer laws.

Combining courtroom experience with commercial understanding, he delivers practical, strategic, and result-oriented solutions tailored to client needs.`,
                image: '/pronoy.jpg'
              },
              {
                name: 'Karan Sanger',
                degree: 'B.com LL.B (h)',
                title: 'Associate Advocate',
                bio: `Experienced in criminal litigation, bail matters, and trial work.

Known for strong drafting skills and effective courtroom representation across district courts of SBS Nagar, Jalandhar, Hoshiarpur, and Ludhiana.`,
                image: '/karan.jpeg'
              }
            ].map((m, i) => (
              <div key={i} className="bg-gray-50 rounded-xl shadow-sm overflow-hidden">
                
                {/* IMAGE FIXED (NO ZOOM ISSUE) */}
                <img
                  src={m.image}
                  className="w-full h-64 object-contain bg-gray-100"
                />

                <div className="p-6">
                  <h3 className="text-xl font-bold">{m.name}</h3>
                  <p className="text-sm text-gray-500">{m.degree}</p>
                  <p className="text-yellow-600 font-semibold text-sm mb-3">{m.title}</p>

                  {/* PARAGRAPH STYLE BIO */}
                  <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700">
                    {m.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}