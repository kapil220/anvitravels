// components/sections/Hero.jsx
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    startDate: '',
    endDate: '',
    message: ''
  });

  const [formStep, setFormStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const nextStep = () => {
    setFormStep(formStep + 1);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormStep(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        destination: '',
        startDate: '',
        endDate: '',
        message: ''
      });
    }, 5000);
  };

  // Form progress indicator
  const renderProgressBar = () => {
    return (
      <div className="w-full mb-6">
        <div className="flex justify-between mb-2">
          <span className={`text-xs font-medium transition-colors duration-300 ${formStep >= 1 ? 'text-[#FF8A3D]' : 'text-gray-400'}`}>Personal Info</span>
          <span className={`text-xs font-medium transition-colors duration-300 ${formStep >= 2 ? 'text-[#FF8A3D]' : 'text-gray-400'}`}>Trip Details</span>
          <span className={`text-xs font-medium transition-colors duration-300 ${formStep >= 3 ? 'text-[#FF8A3D]' : 'text-gray-400'}`}>Finish</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="h-2.5 rounded-full transition-all duration-500 ease-out"
            style={{backgroundColor: '#FF8A3D', width: `${(formStep / 3) * 100}%` }}
          ></div>
        </div>
      </div>
    );
  };

  // Form steps content
  const renderFormContent = () => {
    if (isSubmitted) {
      return (
        <div className="text-center py-8 animate-fade-in">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4 animate-scale-in">
            <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 animate-slide-up">Inquiry Submitted!</h2>
          <p className="text-gray-600 animate-slide-up animation-delay-200">We will contact you soon about your dream trip to {formData.destination}.</p>
        </div>
      );
    }

    switch(formStep) {
      case 1:
        return (
          <div className="animate-fade-in">
            <div className="space-y-4">
              <div className="animate-slide-up">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div className="animate-slide-up animation-delay-100">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div className="animate-slide-up animation-delay-200">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">+</span>
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="91 9876543210"
                    className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 animate-slide-up animation-delay-300">
              <button
                type="button"
                onClick={nextStep}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300 flex items-center justify-center hover:scale-105 transform"
              >
                Continue
                <svg className="ml-2 h-5 w-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="animate-fade-in">
            <div className="space-y-4">
              <div className="animate-slide-up">
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">Dream Destination</label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Bhopal, Ujjain, Indore..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4 animate-slide-up animation-delay-100">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                  <input
                    type="date"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                  <input
                    type="date"
                    id="endDate"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-between animate-slide-up animation-delay-200">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition duration-300 flex items-center hover:scale-105 transform"
              >
                <svg className="mr-2 h-5 w-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300 flex items-center hover:scale-105 transform"
              >
                Continue
                <svg className="ml-2 h-5 w-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="animate-fade-in">
            <div className="space-y-4">
              <div className="animate-slide-up">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Additional Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your preferences, special requests, or questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                ></textarea>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg animate-slide-up animation-delay-100">
                <h4 className="text-sm font-medium text-blue-800 mb-2">Trip Summary</h4>
                <p className="text-sm text-blue-700 mb-1"><span className="font-medium">Destination:</span> {formData.destination || 'Not specified'}</p>
                <p className="text-sm text-blue-700">
                  <span className="font-medium">Travel Period:</span> {formData.startDate ? new Date(formData.startDate).toLocaleDateString() : 'Not specified'}
                  {formData.endDate ? ` - ${new Date(formData.endDate).toLocaleDateString()}` : ''}
                </p>
              </div>
            </div>
            <div className="mt-6 flex justify-between animate-slide-up animation-delay-200">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-300 transition duration-300 flex items-center hover:scale-105 transform"
              >
                <svg className="mr-2 h-5 w-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition duration-300 flex items-center hover:scale-105 transform"
              >
                Submit
                <svg className="ml-2 h-5 w-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center py-24 lg:py-20 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Background Image with parallax effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative h-full w-full transform scale-105">
          <Image
            src="/taxi.webp"
            alt="Madhya Pradesh destination"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">
          {/* Hero Text */}
          <div className="text-white w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white animate-slide-up ${isVisible ? 'animate-delay-200' : ''}`}>
              Discover <span style={{color: '#FF8A3D'}}>India&apos;s</span> Hidden Gems
            </h1>
            <p className={`text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 text-gray-200 animate-slide-up ${isVisible ? 'animate-delay-400' : ''}`}>
              Unforgettable journeys tailored to create memories that last a lifetime in the heart of incredible India
            </p>
            <div className={`flex flex-wrap gap-4 justify-center lg:justify-start animate-slide-up ${isVisible ? 'animate-delay-600' : ''}`}>
              <button className="text-white py-3 px-8 rounded-full text-lg font-semibold transition duration-300 shadow-lg hover:!bg-[#FFC266] hover:scale-105 transform" style={{backgroundColor: '#FF8A3D'}}>
                Explore Destinations
              </button>
              <button className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-800 transition duration-300 hover:scale-105 transform">
                View Packages
              </button>
            </div>
          </div>

          {/* Enquiry Form Card */}
          <div className={`w-full lg:w-5/12 bg-white rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm animate-slide-in-right ${isVisible ? 'animate-delay-300' : ''}`}>
            <div className="relative">
              {/* Decorative element */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-50 animate-scale-in ${isVisible ? 'animate-delay-800' : ''}`}></div>
              <div className={`absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500 rounded-full opacity-30 animate-scale-in ${isVisible ? 'animate-delay-1000' : ''}`}></div>

              {/* Form container */}
              <div className="relative p-6 md:p-8">
                <h3 className={`text-2xl font-bold text-gray-800 mb-2 animate-slide-up ${isVisible ? 'animate-delay-500' : ''}`}>Plan Your Dream Trip</h3>
                <p className={`text-gray-600 mb-6 animate-slide-up ${isVisible ? 'animate-delay-600' : ''}`}>Fill in the details below and start your adventure</p>

                <form onSubmit={handleSubmit}>
                  {renderProgressBar()}
                  {renderFormContent()}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}