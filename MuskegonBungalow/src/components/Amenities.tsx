import React from 'react';
import { HomeIcon, WifiIcon, TvIcon, HeartIcon } from '@heroicons/react/24/outline';

const amenities = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
    title: 'Full Kitchen',
    description: 'Modern appliances and all necessary cookware',
  },
  {
    icon: <WifiIcon className="h-6 w-6" />,
    title: 'High-Speed WiFi',
    description: 'Stay connected with fast internet',
  },
  {
    icon: <TvIcon className="h-6 w-6" />,
    title: 'Smart TV',
    description: 'Access to Netflix, Hulu, and more',
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: 'Outdoor Space',
    description: 'Private patio with seating area',
  },
];

const Amenities = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-sage-900 mb-12 text-center">
        What We Offer
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {amenities.map((amenity, index) => (
          <div
            key={index}
            className="p-6 bg-sage-50 rounded-lg hover:shadow-lg transition-shadow"
          >
            <div className="text-sage-600 mb-4">{amenity.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
            <p className="text-gray-600">{amenity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;