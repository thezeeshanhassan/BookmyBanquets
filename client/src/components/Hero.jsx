import React from "react";
import { FiHeart, FiCalendar, FiCamera, FiCoffee } from 'react-icons/fi';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images
import wedding1 from "../assets/images/wedding1.png";
import wedding2 from "../assets/images/wedding2.png";
import wedding3 from "../assets/images/wedding3.png";
import floral1 from "../assets/images/floral1.png";
import floral2 from "../assets/images/floral2.png";

const Hero = () => {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false
  };

  const weddingImages = [
    {
      src: wedding1,
      alt: "Wedding 1"
    },
    {
      src: wedding2,
      alt: "Wedding 2"
    },
    {
      src: wedding3,
      alt: "Wedding 3"
    }
  ];

  const services = [
    {
      title: "Desain Website dan Undangan",
      icon: <FiHeart className="text-3xl text-[#FF477E] mb-3" />
    },
    {
      title: "Kue dan Katering",
      icon: <FiCoffee className="text-3xl text-[#FF477E] mb-3" />
    },
    {
      title: "Pawang Hujan",
      icon: <FiCalendar className="text-3xl text-[#FF477E] mb-3" />
    },
    {
      title: "Layanan lainnya",
      icon: <FiCamera className="text-3xl text-[#FF477E] mb-3" />
    }
  ];

  return (
    <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 relative z-10">
          {/* Subheading */}
          <p className="text-lg font-light text-gray-600 mb-2">
            When your
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#FF477E] mb-6 leading-tight">
            Dream Wedding <br />come true
          </h1>

          {/* Quote */}
          <blockquote className="text-xl italic text-gray-600 mb-8 max-w-lg">
            "Once in a while, right in the middle of an ordinary life, love gives us a fairy tale."
          </blockquote>

          {/* Services with Icons */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center hover:scale-105"
              >
                {service.icon}
                <h3 className="font-medium text-gray-800">{service.title}</h3>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -left-8 -top-8 w-24 h-24 rounded-full bg-pink-200 opacity-30 -z-10"></div>
          <div className="absolute -right-8 bottom-0 w-32 h-32 rounded-full bg-purple-200 opacity-30 -z-10"></div>
        </div>

        {/* Right Carousel */}
        <div className="lg:w-1/2 relative">
          <div className="relative h-96 lg:h-[500px] w-full overflow-hidden rounded-2xl shadow-xl">
            <Slider {...sliderSettings}>
              {weddingImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-96 lg:h-[500px] object-cover object-center"
                    style={{ background: 'transparent' }}
                  />
                </div>
              ))}
            </Slider>

            {/* Decorative Elements */}
            <div className="absolute -left-6 -top-6 w-32 h-32 rounded-full bg-[#FF477E] opacity-10 -z-10"></div>
            <div className="absolute -right-6 -bottom-6 w-40 h-40 rounded-full bg-[#FF477E] opacity-10 -z-10"></div>
          </div>

          {/* Small decorative images */}
          <img
            src={floral1}
            alt="Floral decoration"
            className="absolute -left-10 -bottom-10 w-24 h-24 rotate-12 opacity-70"
          />
          <img
            src={floral2}
            alt="Floral decoration"
            className="absolute -right-10 -top-10 w-20 h-20 -rotate-12 opacity-70"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;