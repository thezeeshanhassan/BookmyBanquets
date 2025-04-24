import React from "react";
import { motion } from "framer-motion";
import { Users, MapPin, Clock, Star, ThumbsUp } from "lucide-react";

const HallInfo: React.FC = () => {
  const hallDetails = {
    name: "Royal Palace Banquet Hall",
    rating: 4.8,
    reviews: 246,
    category: "Premium",
    capacity: {
      min: 100,
      max: 500,
    },
    address: "123 Elegance Way, Luxury District, City Name",
    timings: "10:00 AM - 11:00 PM",
    priceRange: "₹₹₹₹",
    quickStats: [
      { label: "Booked", value: "85%", subtext: "This month" },
      { label: "Events", value: "450+", subtext: "Completed" },
      { label: "Experience", value: "12 yrs", subtext: "In business" },
    ],
  };

  return (
    <div id="info" className="pt-10 -mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left Section: Basic Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900">
                  {hallDetails.name}
                </h2>
                <div className="flex items-center mt-2 text-sm">
                  <Star className="h-5 w-5 text-yellow-500 mr-1 fill-yellow-500" />
                  <span className="font-semibold text-gray-800">
                    {hallDetails.rating}
                  </span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">
                    {hallDetails.reviews} reviews
                  </span>
                  <span className="ml-3 px-2 py-0.5 bg-[#9D2235]/10 text-[#FF477E] rounded-full font-medium">
                    {hallDetails.category}
                  </span>
                </div>
              </div>

              {/* Pricing Indicator */}
              <div className="hidden md:block">
                <span className="text-xl font-semibold text-[#FF477E]">
                  {hallDetails.priceRange}
                </span>
                <p className="text-xs text-gray-500 mt-1">Price range</p>
              </div>
            </div>

            {/* Key Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center text-gray-700">
                <Users className="h-5 w-5 text-[#FF477E] mr-3" />
                <span>
                  Capacity:{" "}
                  <span className="font-medium">
                    {hallDetails.capacity.min} - {hallDetails.capacity.max}{" "}
                    guests
                  </span>
                </span>
              </div>

              <div className="flex items-center text-gray-700">
                <MapPin className="h-5 w-5 text-[#FF477E] mr-3" />
                <span>{hallDetails.address}</span>
              </div>

              <div className="flex items-center text-gray-700">
                <Clock className="h-5 w-5 text-[#FF477E] mr-3" />
                <span>
                  Timings:{" "}
                  <span className="font-medium">{hallDetails.timings}</span>
                </span>
              </div>
            </div>

            {/* CTA for Mobile */}
            <div className="mt-6 lg:hidden">
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-3 bg-[#FF477E] text-white text-center font-medium rounded-full hover:bg-[#8a1e2f] transition-all"
              >
                Check Availability
              </motion.a>
            </div>
          </div>

          {/* Right Section: Quick Stats */}
          <div className="w-full lg:w-auto">
            <div className="grid grid-cols-3 gap-4 lg:gap-6">
              {hallDetails.quickStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-gray-50 rounded-xl p-4 text-center"
                >
                  <div className="text-xl md:text-2xl font-bold text-[#FF477E]">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-800">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500">{stat.subtext}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA for Desktop */}
            <div className="hidden lg:block mt-6">
              <motion.a
                href="#booking"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block w-full py-3 bg-[#FF477E] text-white text-center font-medium rounded-full hover:bg-[#8a1e2f] transition-all"
              >
                Check Availability
              </motion.a>
            </div>
          </div>
        </div>

        {/* Success Rate Bar */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center">
            <ThumbsUp className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">
              98% of couples recommend this venue
            </span>
          </div>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "98%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-green-500 h-2.5 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HallInfo;
