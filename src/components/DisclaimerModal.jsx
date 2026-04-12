import { useState, useEffect } from 'react'

export default function DisclaimerModal() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('disclaimerAccepted')

    if (!accepted) {
      setShow(true)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('disclaimerAccepted', 'true')
    document.body.style.overflow = 'auto'
    setShow(false)
  }

  const handleReject = () => {
    window.location.href = 'about:blank'
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-900/90 backdrop-blur-sm px-4">

      {/* Modal Box */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 max-w-2xl w-full rounded-xl shadow-2xl border border-primary-700">

        {/* Header */}
        <div className="border-b border-primary-700 px-6 py-4">
          <h2 className="text-2xl font-serif text-yellow-400 tracking-wide">
            DISCLAIMER
          </h2>
        </div>

        {/* Content */}
        <div className="px-6 py-6 text-gray-300 text-sm leading-relaxed space-y-4">

          <p>
            As per the rules of the Bar Council of India, law firms are not permitted 
            to solicit work and advertise. By clicking the <strong>"Agree"</strong> button 
            and accessing this website, you acknowledge that you are seeking information 
            about us of your own accord and that there has been no form of solicitation, 
            advertisement or inducement by the firm or its members.
          </p>

          <p>
            The information provided on this website is solely available at your request 
            for informational purposes only. It should not be interpreted as soliciting 
            or advertisement. The firm shall not be liable for any consequence of any action 
            taken by the user relying on material/information provided under this website. 
            In cases where the user has any legal issues, he/she must seek independent legal advice.
          </p>

        </div>

        {/* Buttons */}
        <div className="border-t border-primary-700 px-6 py-4 flex justify-end gap-4">

          {/* Agree */}
          <button
            onClick={handleAccept}
            className="px-6 py-2 bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition rounded-md"
          >
            I AGREE
          </button>

          {/* Reject */}
          <button
            onClick={handleReject}
            className="px-6 py-2 border border-gray-400 text-white hover:bg-primary-700 transition rounded-md"
          >
            DISAGREE
          </button>

        </div>

      </div>
    </div>
  )
}