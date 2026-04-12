import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'

const blogContent = {
  'cheque-bounce-ni-act': {
    title: 'Cheque Bounce Case under Section 138 NI Act – Complete Guide',
    content: `
A cheque bounce case arises when a cheque is dishonoured due to insufficient funds.

Under Section 138 of the Negotiable Instruments Act, this is a criminal offence.

Steps:
1. Cheque dishonoured
2. Legal notice within 30 days
3. 15 days for payment
4. Complaint filed

Penalty:
- Up to 2 years imprisonment OR
- Fine up to twice the amount
`
  },

  'fir-rights-india': {
    title: 'What to Do After FIR is Filed Against You',
    content: `
If an FIR is filed, do not panic.

Steps:
1. Contact lawyer
2. Apply for bail
3. Cooperate with police

Rights:
- Legal representation
- Right to silence
`
  },

  'anticipatory-bail': {
    title: 'Anticipatory Bail vs Regular Bail – Key Differences',
    content: `
Anticipatory bail is before arrest.

Regular bail is after arrest.

Legal advice is necessary for correct filing.
`
  },

  'property-disputes': {
    title: 'Property Disputes in India: Legal Remedies Explained',
    content: `
Property disputes include ownership and possession issues.

Remedies:
- Civil suit
- Injunction
- Possession claim
`
  },

  'consumer-complaint': {
    title: 'How to File a Consumer Complaint in India',
    content: `
Steps:
1. Legal notice
2. File complaint
3. Attend hearing

Relief includes compensation and refund.
`
  },

  'insurance-claim-rejection': {
    title: 'Insurance Claim Rejected? Legal Remedies Available',
    content: `
Steps:
1. Check policy
2. Send notice
3. File complaint

Legal help improves success chances.
`
  }
}

export default function BlogDetail() {
  const { slug } = useParams()
  const blog = blogContent[slug]

  if (!blog) {
    return <div className="p-20 text-center">Blog not found</div>
  }

  return (
    <>
      <Helmet>
        <title>{blog.title} | SolicitorVerse</title>
      </Helmet>

      <Hero title={blog.title} subtitle="Legal Insights" />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="whitespace-pre-line text-gray-700 text-lg">
            {blog.content}
          </div>
        </div>
      </section>
    </>
  )
}