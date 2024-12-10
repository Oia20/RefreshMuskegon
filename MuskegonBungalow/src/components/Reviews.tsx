import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const reviews = [
  {
    name: 'Carlos F.',
    date: 'Stayed 4 Nights',
    rating: 5,
    text: "This was our 4th time staying here. We just absolutely love the location. Quiet street and just a few minutes walk to the beach. Wish I would've booked 1 extra night 😊",
  },
  {
    name: 'Beth R',
    date: 'Stayed 7 Nights',
    rating: 5,
    text: 'Loved the back yard and screened in porch!! We had a wonderful vacation.',
  },
  {
    name: 'Micki Cumming',
    date: 'Stayed 21 Nights',
    rating: 5,
    text: "We really enjoyed our stay! The neighborhood was quiet and easy for walking plus only a short walk to Lake Michigan. The owners were easy to contact and took care of the couple of items we had!",
  },
];

const Reviews = () => {
  return (
    <section className="relative bg-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-emerald-900 mb-12 text-center">
          Guest Experiences
        </h2>
        <div className="flex flex-col gap-4 mx-auto">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-emerald-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-emerald-500" />
                ))}
              </div>
              <p className="text-emerald-700 mb-4">{review.text}</p>
              <div className="text-sm text-emerald-600">
                <span className="font-semibold">{review.name}</span> · {review.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;