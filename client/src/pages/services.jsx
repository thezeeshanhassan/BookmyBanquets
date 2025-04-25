"use client"
import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

const Services = () => {
  const serviceData = [
    {
      id: 1,
      title: "Marriage Ceremony",
      description:
        "Plan the perfect wedding day with our complete ceremony management, luxury decoration, and elegant spaces.",
      features: [
        "Custom wedding stage design",
        "Floral & themed décor options",
        "Separate bridal & groom lounges",
        "On-site marriage registrar (optional)",
      ],
      image:
        "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Mehndi Night",
      description:
        "Celebrate Mehndi night with vibrant colors, dholki, traditional seating, and dance floors — indoor & outdoor setups available.",
      features: [
        "Colorful stage & seating decor",
        "LED dance floor setup",
        "Custom mehndi backdrops",
        "DJ or dhol player (optional)",
      ],
      image:
        "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Barat Reception",
      description:
        "Make a grand impression on Barat day with luxurious banquet options, multi-course catering, and royal entrance setups.",
      features: [
        "Multi-tier catering packages",
        "Luxury hall themes",
        "Royal groom entrance arrangements",
        "Custom lighting & sound",
      ],
      image:
        "https://images.pexels.com/photos/1834399/pexels-photo-1834399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Valima Ceremony",
      description:
        "A serene and stylish valima setup with fine dining, elegant decoration, and fully air-conditioned banquet spaces.",
      features: [
        "Floral & pastel theme decor",
        "Valima-specific buffet styles",
        "Seating up to 500+ guests",
        "Photography & live video setup (optional)",
      ],
      image:
        "https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-pink-600 mb-4">Our Marriage Services</h2>
        <p className="text-gray-600 text-lg">
          From Mehndi to Valima — we handle every event with elegance, tradition, and a modern touch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {serviceData.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
          >
            <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <Check className="h-5 w-5 text-pink-500 mr-2 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/halls"
                className="inline-flex items-center text-pink-600 font-medium hover:text-pink-800"
              >
                View Available Halls <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Note on pricing */}
      <div className="text-center mt-16 max-w-2xl mx-auto">
        <p className="text-gray-700 text-lg">
          💡 <strong>Note:</strong> Pricing varies depending on the hall, event date, and selected services. Explore
          available halls to see real-time pricing.
        </p>
        <Link
          to="/halls"
          className="inline-block mt-4 px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-medium transition"
        >
          Explore Halls
        </Link>
      </div>
    </div>
  )
}

export default Services
