import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const reviews = [
  {
    name: 'Sarah M.',
    date: 'March 2024',
    rating: 5,
    text: 'Beautiful property with amazing attention to detail. The location was perfect for our family getaway.',
  },
  {
    name: 'John D.',
    date: 'February 2024',
    rating: 5,
    text: 'Exceeded our expectations! The house was immaculate and the surrounding area is peaceful and scenic.',
  },
  {
    name: 'Emily R.',
    date: 'January 2024',
    rating: 5,
    text: "A perfect blend of modern comfort and natural surroundings. We'll definitely be back!",
  },
];

const Reviews = () => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-sage-900 mb-12 text-center">
        Guest Experiences
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">{review.text}</p>
            <div className="text-sm text-gray-500">
              <span className="font-semibold">{review.name}</span> · {review.date}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;