import React, { useState, useCallback, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface Photo {
  url: string;
  alt: string;
  lowResUrl: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const imagesToLoad = [
      currentIndex,
      (currentIndex + 1) % photos.length,
      (currentIndex - 1 + photos.length) % photos.length
    ];

    imagesToLoad.forEach(index => {
      const img = new Image();
      img.src = photos[index].url;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [photos[index].url]: true }));
      };
    });
  }, [currentIndex, photos]);

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

  const captionVariants = {
    enter: {
      opacity: 0,
      y: 20
    },
    center: {
      opacity: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      y: -20
    }
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
    <section className="relative bg-white py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-emerald-900 mb-6 text-center">Photo Gallery</h2>
        <p className="text-emerald-800 mb-8 text-center">Explore our beautiful cottage through these photos</p>
        
        {/* Main Photo Container */}
        <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] mb-4 overflow-hidden rounded-lg lg:mx-20">
          {/* Caption */}
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={`caption-${currentIndex}`}
              variants={captionVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3 }}
              className="absolute top-4 left-4 z-20 bg-emerald-900/80 backdrop-blur-sm rounded-lg px-4 py-2"
            >
              <p className="text-white font-medium text-lg">
                {photos[currentIndex].alt}
              </p>
            </motion.div>
          </AnimatePresence>

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
                src={loadedImages[photos[currentIndex].url] ? photos[currentIndex].url : photos[currentIndex].lowResUrl}
                alt={photos[currentIndex].alt}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  loadedImages[photos[currentIndex].url] ? 'opacity-100' : 'opacity-70'
                }`}
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
        <div className="flex gap-1 sm:gap-2 overflow-x-auto py-2 justify-start lg:mx-20 cursor-grab px-4 sm:px-6 lg:px-8">
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
                src={loadedImages[photo.url] ? photo.url : photo.lowResUrl}
                alt={photo.alt}
                className={`h-16 w-24 sm:h-20 sm:w-32 object-cover rounded transition-opacity duration-300 ${
                  loadedImages[photo.url] ? 'opacity-100' : 'opacity-70'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;