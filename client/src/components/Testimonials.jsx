import { useState } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael",
      event: "Wedding Reception",
      image:
        "https://images.pexels.com/photos/3014856/pexels-photo-3014856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "BookMyBanquets made finding our dream wedding venue so simple. The Grand Ballroom exceeded all our expectations and our guests were blown away. Thank you for making our special day perfect!",
    },
    {
      id: 2,
      name: "David Johnson",
      event: "Corporate Gala",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "As an event planner, I rely heavily on BookMyBanquets for my corporate clients. The selection of venues is outstanding and the booking process is seamless. Highly recommended for any corporate event.",
    },
    {
      id: 3,
      name: "Jennifer Lopez",
      event: "Birthday Celebration",
      image:
        "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 4,
      text: "I planned my 40th birthday celebration through BookMyBanquets and couldn't be happier. The venue was perfect, the staff was attentive, and my guests had an amazing time. Will definitely use again!",
    },
    {
      id: 4,
      name: "Robert & Emily",
      event: "Engagement Party",
      image:
        "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      rating: 5,
      text: "We booked our engagement party venue through BookMyBanquets and it was the best decision. The process was stress-free and the venue was exactly what we were looking for. Thank you!",
    },
  ];

  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gold-100 rounded-full opacity-30"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gold-100 rounded-full opacity-30"></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle mx-auto">
            Read testimonials from couples and event planners who found their
            perfect venues through BookMyBanquets
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Slider
            ref={setSliderRef}
            {...sliderSettings}
            className="testimonials-slider"
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4 pb-6">
                <div className="bg-white rounded-lg shadow-card p-8 h-full border border-gray-100">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-navy-800">
                        {testimonial.name}
                      </h3>
                      <p className="text-gold-500 text-sm">
                        {testimonial.event}
                      </p>
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`w-4 h-4 ${
                              i < testimonial.rating
                                ? "text-gold-500 fill-gold-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-navy-600 italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </Slider>

          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={() => sliderRef?.slickPrev()}
              className="p-3 rounded-full border border-navy-200 text-navy-800 hover:bg-navy-50 transition-colors"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => sliderRef?.slickNext()}
              className="p-3 rounded-full border border-navy-200 text-navy-800 hover:bg-navy-50 transition-colors"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
