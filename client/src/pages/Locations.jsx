"use client"
import { motion } from "framer-motion"
import { MapPin, Clock, Bus, Car, Phone, Mail, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

function Locations() {
  const nearbyHotels = [
    {
      id: 1,
      name: "Pearl Continental Hotel",
      distance: "0.5 km from venue",
      rating: "5-star",
      description: "Luxury accommodations with special rates for our venue guests.",
      website: "#",
    },
    {
      id: 2,
      name: "Avari Lahore",
      distance: "1.2 km from venue",
      rating: "5-star",
      description: "Elegant hotel with complimentary shuttle service to our venue.",
      website: "#",
    },
    {
      id: 3,
      name: "Lahore Grand Hotel",
      distance: "0.8 km from venue",
      rating: "4-star",
      description: "Comfortable and affordable accommodations within walking distance.",
      website: "#",
    },
  ]

  const nearbyAttractions = [
    {
      name: "Lahore Fort",
      distance: "3.5 km",
      description: "Historic fort and UNESCO World Heritage site",
    },
    {
      name: "Badshahi Mosque",
      distance: "3.7 km",
      description: "Iconic Mughal-era mosque with stunning architecture",
    },
    {
      name: "Shalimar Gardens",
      distance: "5.2 km",
      description: "Historic Persian gardens built during the Mughal era",
    },
    {
      name: "Liberty Market",
      distance: "1.8 km",
      description: "Popular shopping district with local and international brands",
    },
    {
      name: "Packages Mall",
      distance: "2.3 km",
      description: "Modern shopping mall with entertainment options",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#FF477E] to-[#9D2235] text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Location</h1>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Conveniently located in the heart of Lahore, our venue is easily accessible from all directions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden mb-12"
            >
              <div className="relative h-[50vh] min-h-[400px]">
                <img
                  src="/placeholder.svg?height=500&width=1200"
                  alt="Map of venue location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white p-8 rounded-xl shadow-lg max-w-md">
                    <div className="flex items-start mb-6">
                      <MapPin className="h-6 w-6 text-[#FF477E] mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-gray-800 text-lg mb-1">Our Address</h3>
                        <p className="text-gray-600">
                          123 Venue Street
                          <br />
                          Model Town, Lahore
                          <br />
                          Punjab, Pakistan
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 px-4 bg-[#FF477E] hover:bg-[#9D2235] text-white text-center rounded-lg font-medium transition-colors flex items-center justify-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Get Directions
                      </a>
                      <Link
                        to="/contact"
                        className="flex-1 py-2 px-4 border border-[#FF477E] text-[#FF477E] hover:bg-[#FF477E]/5 text-center rounded-lg font-medium transition-colors"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start mb-4">
                  <Phone className="h-6 w-6 text-[#FF477E] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">+92 300 1234567</p>
                    <p className="text-gray-600">+92 321 9876543</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start mb-4">
                  <Mail className="h-6 w-6 text-[#FF477E] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">Email</h3>
                    <p className="text-gray-600">info@venuename.com</p>
                    <p className="text-gray-600">bookings@venuename.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-start mb-4">
                  <Clock className="h-6 w-6 text-[#FF477E] mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Getting Here */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Getting Here</h2>
              <p className="text-gray-600">
                Our venue is easily accessible via various transportation options. Here's how you can reach us.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6 flex items-start">
                  <Car className="h-8 w-8 text-[#FF477E] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">By Car</h3>
                    <p className="text-gray-600 mb-4">
                      Our venue is easily accessible from major highways. Free parking is available on-site for up to
                      200 vehicles.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">From Lahore Airport:</h4>
                        <ul className="list-disc pl-5 text-gray-600">
                          <li>Take Lahore Airport Road toward the city</li>
                          <li>Continue onto Canal Road for 8 km</li>
                          <li>Turn right onto Ferozepur Road</li>
                          <li>After 3 km, turn left onto Model Town Link Road</li>
                          <li>Our venue will be on your right after 1 km</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">From City Center:</h4>
                        <ul className="list-disc pl-5 text-gray-600">
                          <li>Take Mall Road south toward Model Town</li>
                          <li>Continue for 5 km</li>
                          <li>Turn right onto Model Town Link Road</li>
                          <li>Our venue will be on your left after 2 km</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6 flex items-start">
                  <Bus className="h-8 w-8 text-[#FF477E] mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-4 text-gray-800">Public Transportation</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">By Bus:</h4>
                        <p className="text-gray-600 mb-2">
                          Bus routes 10, 15, and 22 stop directly in front of our venue. The bus stop name is "Model
                          Town Link Road Station."
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">By Metro:</h4>
                        <p className="text-gray-600 mb-2">
                          Take the Orange Line Metro to Model Town Station. From there, it's a 10-minute walk or a short
                          rickshaw ride to our venue.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">By Taxi/Ride-Sharing:</h4>
                        <p className="text-gray-600">
                          Taxis and ride-sharing services like Uber and Careem are readily available throughout Lahore
                          and can bring you directly to our venue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Nearby Accommodations */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nearby Accommodations</h2>
              <p className="text-gray-600">
                We've partnered with several nearby hotels to offer special rates for our venue guests.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {nearbyHotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-48">
                    <img
                      src="/placeholder.svg?height=192&width=384"
                      alt={hotel.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-gray-800">{hotel.name}</h3>
                    <div className="flex items-center mb-3">
                      <span className="text-sm text-gray-600 mr-3">{hotel.distance}</span>
                      <span className="text-sm bg-[#FF477E]/10 text-[#FF477E] px-2 py-0.5 rounded-full">
                        {hotel.rating}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{hotel.description}</p>
                    <a
                      href={hotel.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[#FF477E] font-medium hover:text-[#9D2235]"
                    >
                      Visit Website <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Nearby Attractions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Nearby Attractions</h2>
              <p className="text-gray-600">
                Our venue is located near many popular attractions, making it easy for your guests to enjoy the city
                before or after your event.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Lahore attractions"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">Explore Lahore</h3>
                <ul className="space-y-4">
                  {nearbyAttractions.map((attraction, index) => (
                    <li key={index} className="flex items-start">
                      <MapPin className="h-5 w-5 text-[#FF477E] mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-800">{attraction.name}</h4>
                        <p className="text-gray-600">
                          <span className="text-[#FF477E]">{attraction.distance}</span> - {attraction.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-[#FF477E] to-[#9D2235] text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Visit?</h2>
              <p className="text-lg md:text-xl opacity-90 mb-8">
                Schedule a tour to see our beautiful venue in person.
              </p>
              <Link
                to="/contact"
                className="inline-block py-3 px-8 bg-white text-[#FF477E] hover:bg-gray-100 rounded-lg font-medium text-lg transition-colors"
              >
                Schedule a Tour
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Locations
