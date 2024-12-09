import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[100vh] bg-sage-900">
      <div className="absolute inset-0">
        <img
          src="lake.avif"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative flex items-center justify-center h-full text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Peaceful Retreat in Muskegon
          </h1>
          <p className="text-xl text-white/90">
            Experience tranquility in our modern woodland escape
          </p>
          <button className="bg-gradient-to-r from-emerald-500 to-green-700 text-white px-6 py-3 rounded-full mt-4 transition-all duration-300 hover:scale-105">
            Book Now
        </button>
        </div>

      </div>

    </div>
  );
};

export default Hero;