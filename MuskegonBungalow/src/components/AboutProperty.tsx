import React from 'react';

const AboutProperty = () => {
  return (
    <section className="bg-emerald-700">
      <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
        <div>
          <h2 className="text-3xl font-bold text-sage-900 mb-6">About Our Property</h2>
          <p className="text-sage-900 mb-4">
            Nestled in the heart of Muskegon's natural beauty, our modern bungalow offers the perfect
            blend of comfort and connection with nature. This thoughtfully designed space provides
            an ideal retreat for those seeking both adventure and relaxation.
          </p>
          <p className="text-sage-900 mb-4">
            With 3 bedrooms and 2 bathrooms, our bungalow comfortably accommodates up to 6 guests,
            making it perfect for family gatherings or friend getaways. The open-concept living
            space creates a welcoming atmosphere that brings people together.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="living.avif"
            alt="Interior view"
            className="rounded-lg"
          />
          <img
            src="chairs.avif"
            alt="Exterior view"
            className="rounded-lg mt-8"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutProperty;