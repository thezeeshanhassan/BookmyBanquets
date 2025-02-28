import React, { useTransition } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import your images (replace with your actual image paths)
import image1 from "../assets/images/a.jpg";
import image2 from "../assets/images/b.jpg";
import image3 from "../assets/images/c.jpg";
import image4 from "../assets/images/d.jpg";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
    transition: "fade",
  autoplaySpeed: 3000,
  fade: true,
};

const sliderImages = [
  {
    src: image1,
    alt: "Banquet Hall 1",
    title: "ELEGANT WEDDINGS",
    description: "Create unforgettable moments in our luxurious venues",
  },
  {
    src: image2,
    alt: "Banquet Hall 2",
    title: "CORPORATE EVENTS",
    description: "Professional settings for your business gatherings",
  },
  {
    src: image3,
    alt: "Banquet Hall 1",
    title: "ELEGANT WEDDINGS",
    description: "Create unforgettable moments in our luxurious venues",
  },
  {
    src: image4,
    alt: "Banquet Hall 2",
    title: "CORPORATE EVENTS",
    description: "Professional settings for your business gatherings",
  },
];

const SliderComponent = () => {
  return (
    <Slider {...sliderSettings}>
      {sliderImages.map((image, index) => (
        <div key={index} className="relative h-[90vh] w-full mt-10 ml-5 rounded-xl">
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full rounded-md"
          />
          <div className="absolute bottom-20 left-20 right-20 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
            <h2 className="mb-2 text-2xl font-bold">{image.title}</h2>
            <p className="text-sm">{image.description}</p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;