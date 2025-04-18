import React from 'react';
import { StarIcon } from '@heroicons/react/solid';

const HallCard = ({ name, rating, location, image, type = "Indoor" }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x300?text=Venue+Image';
          }}
        />
        {/* Type Badge */}
        <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md text-xs font-medium shadow-sm">
          {type}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Name and Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <div className="flex items-center bg-[#FF477E] bg-opacity-10 px-2 py-1 rounded">
            <StarIcon className="h-4 w-4 text-[#FF477E]" />
            <span className="ml-1 text-sm font-medium text-[#FF477E]">{rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-gray-600 mb-4">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-sm">{location}</span>
        </div>

        {/* Action Button */}
        <button className="w-full py-2 bg-[#FF477E] text-white rounded-md hover:bg-[#FF3D6E] transition-colors font-medium text-sm">
          View Details
        </button>
      </div>
    </div>
  );
};


// Example usage:
// <VenueCard 
//   name="Resources" 
//   rating="4.8" 
//   location="Bekasi, Jawa Barat" 
//   image="/path/to/image.jpg"
//   type="Indoor"
// />

export default HallCard;