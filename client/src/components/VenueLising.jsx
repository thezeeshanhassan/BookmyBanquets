import React from 'react';
import { StarIcon } from '@heroicons/react/solid';
import HallCard from './HallCard'

// VenueListing Component that uses VenueCard
const VenueListing = () => {
  // Dummy data
  const venues = [
    {
      id: 1,
      name: "Resources",
      rating: 4.8,
      location: "Bekasi, Jawa Barat",
      image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      type: "Indoor"
    },
    {
      id: 2,
      name: "The Aesthetic",
      rating: 4.5,
      location: "Jakarta Selatan",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      type: "Outdoor"
    },
    {
      id: 3,
      name: "Nomade",
      rating: 4.9,
      location: "Bandung, Jawa Barat",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      type: "Indoor"
    },
    {
      id: 4,
      name: "Tropical",
      rating: 4.7,
      location: "Bogor, Jawa Barat",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      type: "Outdoor"
    },
    {
        id: 1,
        name: "Resources",
        rating: 4.8,
        location: "Bekasi, Jawa Barat",
        image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        type: "Indoor"
      },
      {
        id: 2,
        name: "The Aesthetic",
        rating: 4.5,
        location: "Jakarta Selatan",
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        type: "Outdoor"
      },
      {
        id: 3,
        name: "Nomade",
        rating: 4.9,
        location: "Bandung, Jawa Barat",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        type: "Indoor"
      },
      {
        id: 4,
        name: "Tropical",
        rating: 4.7,
        location: "Bogor, Jawa Barat",
        image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        type: "Outdoor"
      }
  ];

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Venues</h2>
        
        {/* Category Filters */}
        <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-[#FF477E] text-white rounded-full whitespace-nowrap">
            All Venues
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap hover:bg-gray-300">
            Indoor
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap hover:bg-gray-300">
            Outdoor
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full whitespace-nowrap hover:bg-gray-300">
            Top Rated
          </button>
        </div>
        
        {/* Venue Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {venues.map((venue) => (
            <HallCard
              key={venue.id}
              name={venue.name}
              rating={venue.rating}
              location={venue.location}
              image={venue.image}
              type={venue.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VenueListing;