"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    location: "New York, USA",
    photo: "/images/testimonial-1.jpg",
    text: "Our trip to Bali was absolutely magical! Everything was perfectly arranged, from the beautiful villa to the private tours. The local guides were knowledgeable and friendly, making our experience truly special.",
    rating: 5,
    destination: "Bali",
    highlight: "Cultural immersion"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    photo: "/images/testimonial-2.jpg",
    text: "The European tour exceeded all expectations. The itinerary was well-balanced between structured activities and free time to explore. The accommodations were superb and the transportation arrangements went smoothly.",
    rating: 5,
    destination: "Europe",
    highlight: "Historical architecture"
  },
  {
    id: 3,
    name: "Sarah Williams",
    location: "London, UK",
    photo: "/images/testimonial-3.jpg",
    text: "Morocco was a dream come true! The desert camping experience under the stars was unforgettable. I appreciated the attention to detail and how the team handled every aspect of our journey.",
    rating: 4,
    destination: "Morocco",
    highlight: "Stargazing"
  },
  {
    id: 4,
    name: "David Rodriguez",
    location: "Madrid, Spain",
    photo: "/images/testimonial-4.jpg",
    text: "The Thailand adventure package was perfect for our family. The kids loved the elephant sanctuary and we enjoyed the beautiful beaches. The travel coordinator was responsive and helpful throughout our trip.",
    rating: 5,
    destination: "Thailand",
    highlight: "Wildlife encounters"
  },
  {
    id: 5,
    name: "Aisha Patel",
    location: "Mumbai, India",
    photo: "/images/testimonial-5.jpg",
    text: "Japan in cherry blossom season was breathtaking! Our travel agent curated a perfect blend of traditional and modern experiences. The detailed itinerary with restaurant recommendations was incredibly helpful.",
    rating: 5,
    destination: "Japan",
    highlight: "Cherry blossoms"
  }
];

// Background patterns for each testimonial
const patterns = [
  "radial-gradient(circle, rgba(99,102,241,0.15) 25%, transparent 25.5%) 0 0/20px 20px",
  "linear-gradient(45deg, rgba(99,102,241,0.1) 25%, transparent 25%, transparent 50%, rgba(99,102,241,0.1) 50%, rgba(99,102,241,0.1) 75%, transparent 75%, transparent) 0 0/20px 20px",
  "radial-gradient(circle, rgba(99,102,241,0.15) 2px, transparent 2.5px) 0 0/20px 20px",
  "linear-gradient(to right, rgba(99,102,241,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.1) 1px, transparent 1px) 0 0/20px 20px",
  "repeating-linear-gradient(45deg, rgba(99,102,241,0.05) 0, rgba(99,102,241,0.05) 1px, transparent 1px, transparent 50%) 0 0/20px 20px"
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef(null);
  const progressRef = useRef(null);
  const progressTimerRef = useRef(null);
  
  // Auto-rotate testimonials
  useEffect(() => {
    let interval;
    
    if (isPlaying) {
      // Reset and start progress bar animation
      if (progressRef.current) {
        progressRef.current.style.transition = 'none';
        progressRef.current.style.width = '0%';
        
        // Force reflow
        void progressRef.current.offsetWidth;
        
        progressRef.current.style.transition = 'width 5000ms linear';
        progressRef.current.style.width = '100%';
      }
      
      interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      clearInterval(interval);
      if (progressTimerRef.current) {
        clearTimeout(progressTimerRef.current);
      }
    };
  }, [isPlaying]);
  
  const handleDotClick = (index) => {
    setActiveIndex(index);
    // Reset progress bar
    if (progressRef.current && isPlaying) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
      
      // Force reflow
      void progressRef.current.offsetWidth;
      
      progressRef.current.style.transition = 'width 5000ms linear';
      progressRef.current.style.width = '100%';
    }
  };
  
  const handlePrevClick = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    resetProgressBar();
  };
  
  const handleNextClick = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
    resetProgressBar();
  };
  
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  const resetProgressBar = () => {
    if (progressRef.current && isPlaying) {
      progressRef.current.style.transition = 'none';
      progressRef.current.style.width = '0%';
      
      // Force reflow
      void progressRef.current.offsetWidth;
      
      progressRef.current.style.transition = 'width 5000ms linear';
      progressRef.current.style.width = '100%';
    }
  };

  // Get the background pattern for the active testimonial
  const activePattern = patterns[activeIndex % patterns.length];

  return (
    <section id="testimonials" className="py-20 bg-gray-200 overflow-hidden relative">
      {/* Abstract background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{ background: activePattern }}></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 bg-indigo-700 rounded-full text-sm font-medium text-white tracking-wider mb-3">TRAVELER STORIES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Journeys That Inspire</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg">
            Real adventures, real emotions — discover how our travelers experienced the world through their eyes.
          </p>
          <div className="w-24 h-1 bg-indigo-400 mx-auto mt-6"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto perspective-1000" ref={containerRef}>
          {/* Testimonial Carousel */}
          <div className="relative min-h-[400px] md:min-h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, rotateY: -10 }}
                animate={{ opacity: 1, rotateY: 0 }}
                exit={{ opacity: 0, rotateY: 10 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-gradient-to-br from-gray-500 to-gray-900 rounded-2xl p-8 shadow-2xl border border-indigo-700/30 backdrop-blur-sm relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 bg-indigo-500 rounded-full opacity-20 blur-lg"></div>
                  <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-blue-400 rounded-full opacity-20 blur-lg"></div>
                  
                  {/* Destination tag */}
                  <div className="absolute top-4 right-4 bg-indigo-600 px-3 py-1 rounded-full text-xs font-semibold text-white">
                    {testimonials[activeIndex].destination}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col md:flex-row items-center mb-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 md:mb-0 md:mr-6 border-2 border-indigo-400 shadow-lg">
                      <Image
                        src={testimonials[activeIndex].photo}
                        alt={testimonials[activeIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-white">{testimonials[activeIndex].name}</h3>
                      <p className="text-blue-200 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {testimonials[activeIndex].location}
                      </p>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-600'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    {/* Quotation mark */}
                    <svg
                      className="absolute -top-4 -left-2 h-12 w-12 text-indigo-400 opacity-30"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    
                    <p className="text-xl text-blue-100 italic leading-relaxed pl-6">
                      "{testimonials[activeIndex].text}"
                    </p>
                    
                    {/* Highlight tag */}
                    <div className="mt-6 inline-flex items-center px-3 py-1 bg-indigo-700/50 rounded-full">
                      <svg className="w-4 h-4 mr-1 text-indigo-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
                        <path d="M14 4a4 4 0 114 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4zm0 10c4.418 0 8 1.79 8 4v2H6v-2c0-2.21 3.582-4 8-4z" />
                      </svg>
                      <span className="text-sm font-medium text-indigo-200">
                        Highlight: {testimonials[activeIndex].highlight}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Progress bar */}
          <div className="h-1 bg-indigo-800/50 w-full mt-8 rounded-full overflow-hidden">
            <div 
              ref={progressRef} 
              className="h-full bg-gradient-to-r from-indigo-400 to-blue-400 w-0"
            ></div>
          </div>
          
          {/* Controls */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-2">
              <button
                onClick={handlePrevClick}
                className="rounded-full w-10 h-10 flex items-center justify-center bg-indigo-700 hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-indigo-900"
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={togglePlayPause}
                className="rounded-full w-10 h-10 flex items-center justify-center bg-indigo-700 hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-indigo-900"
                aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              >
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </button>
              
              <button
                onClick={handleNextClick}
                className="rounded-full w-10 h-10 flex items-center justify-center bg-indigo-700 hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-indigo-900"
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Dots Navigation */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2.5 h-2.5 rounded-full focus:outline-none transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-white w-6' 
                      : 'bg-indigo-400/50 hover:bg-indigo-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-500 mb-4">Ready to create your own travel story?</p>
          <a href="#contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-900 focus:ring-white shadow-md transition-all duration-300">
            Start Your Journey
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}