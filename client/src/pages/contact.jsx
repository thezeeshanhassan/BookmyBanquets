"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  AlertCircle,
  HelpCircle,
  MessageSquare,
  Users,
  Building2,
  CalendarCheck,
} from "lucide-react"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formError, setFormError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormError("Please enter your name")
      return false
    }
    if (!formData.email.trim()) {
      setFormError("Please enter your email")
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormError("Please enter a valid email address")
      return false
    }
    if (!formData.message.trim()) {
      setFormError("Please enter a message")
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")

    if (!validateForm()) return

    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      })

      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-[#FF477E] to-[#9D2235] text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Need Help?</h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Whether you're booking a hall or managing one, our team is here to help you every step of the way.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-pink-50 border border-pink-100 rounded-xl p-8 shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-2 text-pink-700">Talk to Us</h2>
                <p className="text-gray-600 mb-6">
                  Have questions about booking, halls, events or partnerships? We'd love to hear from you.
                </p>

                {isSubmitted && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                    <p className="font-medium">✅ Message sent successfully!</p>
                    <p>We'll get back to you shortly.</p>
                  </div>
                )}

                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-start">
                    <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
                  />
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="How can we help you?*"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-400"
                  ></textarea>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Reach Us Directly</h3>
                  <div className="space-y-4">
                    <p className="flex items-center text-gray-600">
                      <Mail className="mr-2 text-pink-500" /> info@bookmybanquets.com
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Phone className="mr-2 text-pink-500" /> +92 300 1234567
                    </p>
                    <p className="flex items-center text-gray-600">
                      <MapPin className="mr-2 text-pink-500" /> 5th Floor, Model Town Plaza, Lahore
                    </p>
                    <p className="flex items-center text-gray-600">
                      <Clock className="mr-2 text-pink-500" /> Mon–Sat: 9am – 6pm
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Why Contact Us?</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <Building2 className="h-5 w-5 mr-2 text-pink-500" /> Hall listing and management help
                    </li>
                    <li className="flex items-center">
                      <CalendarCheck className="h-5 w-5 mr-2 text-pink-500" /> Booking queries or availability
                    </li>
                    <li className="flex items-center">
                      <MessageSquare className="h-5 w-5 mr-2 text-pink-500" /> Support or feedback
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Contact;
