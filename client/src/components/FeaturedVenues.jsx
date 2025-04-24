import { useState } from "react";
import Slider from "react-slick";
import { FiStar, FiMapPin, FiUsers, FiHeart, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

const FeaturedVenues = () => {
  const [favoriteVenues, setFavoriteVenues] = useState([]);

  const toggleFavorite = (venueId) => {
    if (favoriteVenues.includes(venueId)) {
      setFavoriteVenues(favoriteVenues.filter((id) => id !== venueId));
    } else {
      setFavoriteVenues([...favoriteVenues, venueId]);
    }
  };

  const venues = [
    {
      id: 1,
      name: "The Grand Ballroom",
      location: "Manhattan, New York",
      image:
        "https://images.pexels.com/photos/3201763/pexels-photo-3201763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "$5,000",
      capacity: "300-500 guests",
      rating: 4.9,
      reviewCount: 124,
      featured: true,
    },
    {
      id: 2,
      name: "Royal Gardens",
      location: "Beverly Hills, CA",
      image:
        "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "$4,500",
      capacity: "200-350 guests",
      rating: 4.8,
      reviewCount: 98,
      featured: true,
    },
    {
      id: 3,
      name: "Oceanview Terrace",
      location: "Miami Beach, FL",
      image:
        "https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "$6,200",
      capacity: "100-250 guests",
      rating: 4.7,
      reviewCount: 86,
      featured: true,
    },
    {
      id: 4,
      name: "The Majestic",
      location: "Chicago, IL",
      image:
        "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "$3,800",
      capacity: "150-300 guests",
      rating: 4.6,
      reviewCount: 74,
      featured: true,
    },
    {
      id: 5,
      name: "Crystal Palace",
      location: "Las Vegas, NV",
      image:
        "https://images.pexels.com/photos/3038424/pexels-photo-3038424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      price: "$7,500",
      capacity: "400-800 guests",
      rating: 4.9,
      reviewCount: 156,
      featured: true,
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="venues" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Featured Banquet Halls</h2>
          <p className="section-subtitle mx-auto">
            Discover our handpicked selection of the most exquisite banquet
            halls and event spaces
          </p>
        </div>

        <Slider {...sliderSettings} className="featured-venues-slider">
          {venues.map((venue) => (
            <div key={venue.id} className="px-3 pb-6">
              <motion.div
                className="venue-card h-full"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                    onClick={() => toggleFavorite(venue.id)}
                  >
                    <FiHeart
                      className={`h-5 w-5 ${
                        favoriteVenues.includes(venue.id)
                          ? "text-red-500 fill-red-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                  {venue.featured && (
                    <div className="absolute top-4 left-4 bg-gold-500 px-3 py-1 text-xs font-semibold text-white rounded-full">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-navy-800">
                      {venue.name}
                    </h3>
                    <div className="flex items-center">
                      <FiStar className="text-gold-500 mr-1" />
                      <span className="text-sm font-medium">
                        {venue.rating}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">
                        ({venue.reviewCount})
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <FiMapPin className="mr-1" />
                    <span className="text-sm">{venue.location}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-navy-500">
                      <FiUsers className="mr-1" />
                      <span className="text-sm">{venue.capacity}</span>
                    </div>
                    <div className="flex items-center text-navy-500">
                      <FiClock className="mr-1" />
                      <span className="text-sm">Available Now</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-navy-800">
                      <span className="font-semibold text-lg">
                        {venue.price}
                      </span>
                      <span className="text-gray-500 text-sm"> / day</span>
                    </div>
                    <a
                      href={`#venue-${venue.id}`}
                      className="btn-outline text-sm py-2"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>

        <div className="text-center mt-12">
          <a href="#all-venues" className="btn-primary">
            View All Venues
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenues;
