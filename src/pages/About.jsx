import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Users, Award, Target, Heart } from 'lucide-react'
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl font-bold text-primary-900 mb-6">
                About the Practice
              </h2>

              <p className="text-lg leading-relaxed text-gray-700 max-w-xl text-justify font-medium">
                SolicitorVerse is a litigation-focused law firm led by Advocates Man Mohan and Pronoy Srivastava. Based primarily in the states of Punjab, Haryana, and Himachal Pradesh, as well as the UT of Chandigarh, the firm offers extensive experience in civil, criminal, consumer, insurance, and banking matters. With over 30 years of combined experience, the firm has built a reputation for providing practical, results-driven legal solutions to individuals and businesses alike.

                Built on a foundation of integrity, experience, and practical legal insight, the practice focuses on delivering clear, result-oriented solutions tailored to each client’s needs.

                With professional exposure across courts, financial institutions, and legal advisory roles, the firm brings both legal and commercial understanding to every case, ensuring dedicated representation and strategic guidance.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                content: 'To provide exceptional legal services that protect our clients\' interests, uphold justice, and deliver measurable results.'
              },
              {
                icon: Heart,
                title: 'Our Values',
                content: 'Integrity, excellence, client advocacy, and a commitment to continuous professional development guide everything we do.'
              },
              {
                icon: Award,
                title: 'Our Promise',
                content: 'Transparent communication, strategic thinking, and dedicated representation to achieve the best possible outcomes for our clients.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-700 to-accent-600 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary-900">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals dedicated to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Man Mohan',
                degree: 'BA., LL.B',
                title: 'Founder and Senior Advocate',
                bio: 'A seasoned legal professional with over 30 years of extensive courtroom experience, specializing in civil, criminal, consumer, and banking laws. Known for his sharp legal acumen, strategic approach, and consistent track record in complex litigation, he has successfully represented clients across various courts with integrity and professionalism.',
                image: '/manmohan.jpg'
              },
              {
                name: 'Pronoy Srivastava',
                degree: 'B.com LL.B (h), LLM (Corporate Law)',
                title: 'Advocate and Legal Practitioner',
                bio: 'A dynamic legal practitioner with expertise in litigation, banking, corporate, and consumer laws. Combining practical courtroom experience with a strong understanding of financial and commercial matters, he delivers strategic, result-oriented solutions tailored to client needs.',
                image: '/pronoy.jpg'
              },
              {
                name: 'Karan Sanger',
                degree: 'B.com LL.B (h)',
                title: 'Associate Advocate',
                bio: 'Experienced in criminal litigation, bail matters, and trial work. Known for strong drafting skills and effective courtroom representation at District Courts of SBS Nagar, Jalandhar, Hoshiarpur, and Ludhiana.',
                image: '/karan.jpeg'
              }
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all flex flex-col h-full"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top rounded-t-xl"
                />

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif text-2xl font-bold text-primary-900 mb-1">
                    {member.name}
                  </h3>

                  <p className="text-sm text-gray-500 mb-2">
                    {member.degree}
                  </p>

                  <p className="text-accent-600 font-semibold text-sm mb-3">
                    {member.title}
                  </p>

                  <p className="text-gray-700 leading-relaxed text-sm mt-auto">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Connect With Our Legal Team"
        subtitle="Get expert guidance from professionals who care about your success. Schedule your consultation today."
      />
    </>
  )
}