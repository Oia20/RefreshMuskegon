import React from 'react';

const AboutProperty = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24 bg-emerald-50 relative">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-center">
          <div>
            <h2 className="text-3xl font-bold text-emerald-900 mb-6">About Our Property</h2>
            <p className="text-emerald-800 mb-4">
              Nestled in the heart of Muskegon's natural beauty, our modern bungalow offers the perfect
              blend of comfort and connection with nature. This thoughtfully designed space provides
              an ideal retreat for those seeking both adventure and relaxation.
            </p>
            <p className="text-emerald-800 mb-4">
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
      </div>
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          fill="white"
          d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        ></path>
      </svg>
    </section>
  );
};

export default AboutProperty;