import React, { useState } from 'react';
import { HomeIcon, WifiIcon, TvIcon, HeartIcon, BeakerIcon, SparklesIcon, MapPinIcon, XMarkIcon } from '@heroicons/react/24/outline';

// Expanded amenities list
const detailedAmenities = {
  'Essentials': [
    'High-speed WiFi (500+ Mbps)',
    'Central air conditioning',
    'Heating',
    'Bath towels provided',
    'Linens provided',
    'Toilet paper',
  ],
  'Kitchen & Dining': [
    'Full kitchen',
    'Refrigerator',
    'Dishwasher',
    'Microwave',
    'Glass-top stove & oven',
    'Coffee maker',
    'Toaster',
    'Toaster oven',
    'Dishes, utensils & bakeware',
  ],
  'Entertainment & Family': [
    'Smart TV with Roku',
    'Game room (unfinished room with games and toys)',
    'Board games',
    'Kids toys & books',
  ],
  'Outdoor Features': [
    'Fire pit',
    'Outdoor furniture',
    'Exterior lighting',
  ],
  'Laundry & Cleaning': [
    'Washing machine (unscented detergent only)',
    'Dryer (no dryer sheets, dryer balls ok)',
    'Iron & board',
  ],
  'Parking & Access': [
    'Single-wide driveway (2 vehicles)',
    'Garage access',
    'Wheelchair accessible (with minor steps)',
  ],
  'Safety': [
    'Smoke detector',
    'Carbon monoxide detector',
    'Deadbolt lock',
    'Fire extinguisher',
    'First aid kit',
  ],
  'Pet Policy': [
    'Dog friendly (up to 2 dogs)',
    'Pet approval required',
  ],
  'Nearby Activities': [
    'Museums',
    'Theme parks',
    'Swimming',
    'Hiking',
    'Biking',
    'Fishing',
  ],
};

// Original amenities array stays the same
const amenities = [
  {
    icon: <HomeIcon className="h-6 w-6" />,
    title: 'Full Kitchen',
    description: 'Modern appliances and all necessary cookware',
  },
  {
    icon: <TvIcon className="h-6 w-6" />,
    title: 'Smart TV',
    description: 'Smart TV with Roku',
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: 'Outdoor Space',
    description: 'Private patio with seating area',
  },
  {
    icon: <BeakerIcon className="h-6 w-6" />,
    title: 'Laundry',
    description: 'Washer and dryer',
  },
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: 'Dog Friendly',
    description: 'Dogs welcome (up to 2 with approval)',
  },
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    title: 'Beach Access',
    description: 'Short walk to Lake Michigan',
  },
];

const AmenitiesModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-[100] overflow-y-auto"
        onClick={onClose}
      >
        <div 
          className="flex min-h-full items-center justify-center p-4 overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            <div className="sticky top-0 p-4 border-b border-gray-200 flex justify-between items-center bg-white">
              <h3 className="text-xl font-semibold text-gray-900">All Amenities</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500 p-2"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto">
              {Object.entries(detailedAmenities).map(([category, items]) => (
                <div key={category} className="mb-6">
                  <h4 className="text-lg font-semibold text-emerald-900 mb-3">{category}</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {items.map((item) => (
                      <li key={item} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Amenities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-white pt-16 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">
          What We Offer
        </h2>
        <div className="flex flex-wrap justify-center">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="p-6 bg-emerald-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <div className="text-emerald-600 mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-emerald-900">{amenity.title}</h3>
              <p className="text-emerald-700">{amenity.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-emerald-600 hover:text-emerald-700 font-medium underline transition-colors duration-200"
          >
            View all amenities
          </button>
        </div>

        <AmenitiesModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default Amenities;