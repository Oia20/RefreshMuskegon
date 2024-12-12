import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[100vh] bg-sage-900">
      <div className="absolute inset-0">
        <img
          src="daylake.png"
          alt="Peaceful Muskegon cottage near Lake Michigan surrounded by nature"
          className="w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gray-700 opacity-20"></div>
      </div>
      <div className="relative flex items-center justify-center h-full text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your <span className="bg-gradient-to-r from-emerald-500 to-green-300 bg-clip-text text-transparent drop-shadow-[0_0_0.1rem_#000]">Peaceful</span> Retreat in Muskegon
          </h1>
          <p className="text-xl text-white/90">
            Experience <span className="bg-gradient-to-r from-emerald-500 to-green-300 bg-clip-text text-transparent drop-shadow-[0_0_0.1rem_#4ade80]">tranquility</span> in our woodland escape
          </p>
          <button 
          className="bg-gradient-to-r from-emerald-500 to-green-700 text-white px-6 py-3 rounded-full mt-4 transition-all duration-300 hover:scale-105"
          onClick={() => window.location.href = 'https://www.tripadvisor.com/VacationRentalReview-g42534-d23359204-Nature_s_Intrigue-Norton_Shores_Muskegon_County_Michigan.html'}
          >
            Book Now
          </button>
        </div>

      </div>

    </div>
  );
};

export default Hero;