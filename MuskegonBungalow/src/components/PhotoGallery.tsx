import React, { useState, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface Photo {
  url: string;
  alt: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const nextPhoto = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, [photos.length]);

  const prevPhoto = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  }, [photos.length]);

  return (
    <div className="relative bg-white py-4 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        {/* Main Photo */}
        <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] mb-4 overflow-hidden rounded-lg lg:m-20">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0"
            >
              <img
                src={photos[currentIndex].url}
                alt={photos[currentIndex].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <button
            onClick={prevPhoto}
            className="z-10 absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-2 rounded-full hover:bg-white transition-colors"
          >
            <ChevronLeftIcon className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={nextPhoto}
            className="z-10 absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-2 rounded-full hover:bg-white transition-colors"
          >
            <ChevronRightIcon className="h-4 w-4 sm:h-6 sm:w-6" />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-1 sm:gap-2 overflow-x-auto py-2 justify-center">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`flex-shrink-0 ${
                currentIndex === index ? 'ring-2 ring-sage-600' : ''
              }`}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="h-16 w-24 sm:h-20 sm:w-32 object-cover rounded"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;