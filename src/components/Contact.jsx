import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return re.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const { name, email, message } = formData

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.')
      return
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email.')
      return
    }

    alert('Message sent successfully!')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="bg-[#fdfaf8] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#A02B11] mb-10 text-left uppercase">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-[#A02B11] mb-4">Contact Information</h3>
            <p className="text-gray-700 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-3 text-[#A02B11]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +233 54 208 5150
            </p>
            <p className="text-gray-700 mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-3 text-[#A02B11]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              mersakyi007@gmail.com
            </p>
            <p className="text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline mr-3 text-[#A02B11]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Agona-Sweduro, Ghana
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <input 
                type="text" 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#A02B11]/60" 
              />
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                required
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#A02B11]/60" 
              />
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message" 
                required 
                rows="4"
                className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#A02B11]/60"
              ></textarea>
              <button 
                type="submit"
                className="bg-[#A02B11] text-white py-3 rounded-lg hover:bg-[#861f0b] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact