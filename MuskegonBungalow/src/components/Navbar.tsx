import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="absolute w-full z-50 bg-black/20 backdrop-blur-sm max-h-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* gradient span */}
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-500 to-green-300 bg-clip-text text-transparent">Refresh Stays</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-emerald-400 hover:text-emerald-300 transition-all duration-300">About</button>
              <button onClick={() => scrollToSection('gallery')} className="text-emerald-400 hover:text-emerald-300 transition-all duration-300">Gallery</button>
              <button onClick={() => scrollToSection('amenities')} className="text-emerald-400 hover:text-emerald-300 transition-all duration-300">Amenities</button>
              <button onClick={() => scrollToSection('reviews')} className="text-emerald-400 hover:text-emerald-300 transition-all duration-300">Reviews</button>
              <button onClick={() => scrollToSection('calendar')} className="text-emerald-400 hover:text-emerald-300 transition-all duration-300">Availability</button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-emerald-400 hover:text-emerald-300"
            >
              <div className="relative w-6 h-6">
                <XMarkIcon 
                  className={`absolute transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                  } block h-6 w-6`} 
                />
                <Bars3Icon 
                  className={`absolute transform transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
                  } block h-6 w-6`} 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`transform transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-2 opacity-0 invisible pointer-events-none'
        } md:hidden bg-black/20 backdrop-blur-sm`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left px-3 py-2 text-emerald-400 hover:text-emerald-300 hover:bg-black/20 rounded-md transition-all duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('gallery')}
            className="block w-full text-left px-3 py-2 text-emerald-400 hover:text-emerald-300 hover:bg-black/20 rounded-md transition-all duration-300"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection('amenities')}
            className="block w-full text-left px-3 py-2 text-emerald-400 hover:text-emerald-300 hover:bg-black/20 rounded-md transition-all duration-300"
          >
            Amenities
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="block w-full text-left px-3 py-2 text-emerald-400 hover:text-emerald-300 hover:bg-black/20 rounded-md transition-all duration-300"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('calendar')}
            className="block w-full text-left px-3 py-2 text-emerald-400 hover:text-emerald-300 hover:bg-black/20 rounded-md transition-all duration-300"
          >
            Availability
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;