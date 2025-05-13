// app/packages/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { packages } from '@/lib/data';

export default function AllPackages() {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recommended');
  
  // Price range filter
  const [priceRange, setPriceRange] = useState([0, 5000]);
  
  // Duration filter options
  const durations = ['all', '1-5 Days', '6-10 Days', '11-15 Days', '15+ Days'];
  const [selectedDuration, setSelectedDuration] = useState('all');
  
  // Filter packages based on current filters
  const filteredPackages = packages.filter(pkg => {
    // Filter by price range
    if (pkg.price < priceRange[0] || pkg.price > priceRange[1]) {
      return false;
    }
    
    // Filter by duration
    if (selectedDuration !== 'all') {
      const days = parseInt(pkg.duration);
      if (selectedDuration === '1-5 Days' && (days < 1 || days > 5)) return false;
      if (selectedDuration === '6-10 Days' && (days < 6 || days > 10)) return false;
      if (selectedDuration === '11-15 Days' && (days < 11 || days > 15)) return false;
      if (selectedDuration === '15+ Days' && days <= 15) return false;
    }
    
    // Filter by category
    if (filter !== 'all') {
      return pkg.activities && pkg.activities.includes(filter);
    }
    
    return true;
  });
  
  // Sort packages based on selected sort option
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === 'price-low') {
      return a.price - b.price;
    } else if (sortBy === 'price-high') {
      return b.price - a.price;
    } else if (sortBy === 'duration-short') {
      return parseInt(a.duration) - parseInt(b.duration);
    } else if (sortBy === 'duration-long') {
      return parseInt(b.duration) - parseInt(a.duration);
    } else if (sortBy === 'rating') {
      return b.rating - a.rating;
    }
    // Default: recommended
    return 0;
  });
  
  // Extract unique activity categories from packages
  const categories = ['all', ...new Set(packages.flatMap(pkg => pkg.activities || []))];
  
  return (
    <div>
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">Explore Our Travel Packages</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover our carefully crafted travel experiences designed to create unforgettable memories in the world's most stunning destinations.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Filter Packages</h2>
              
              {/* Category Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="radio"
                        id={`category-${category}`}
                        name="category"
                        className="h-4 w-4 text-blue-600"
                        checked={filter === category}
                        onChange={() => setFilter(category)}
                      />
                      <label htmlFor={`category-${category}`} className="ml-2 text-gray-600 capitalize">
                        {category === 'all' ? 'All Categories' : category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 mb-3">Price Range</h3>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">${priceRange[0]}</span>
                  <span className="text-gray-600">${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              {/* Duration Filter */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-800 mb-3">Duration</h3>
                <div className="space-y-2">
                  {durations.map((duration) => (
                    <div key={duration} className="flex items-center">
                      <input
                        type="radio"
                        id={`duration-${duration}`}
                        name="duration"
                        className="h-4 w-4 text-blue-600"
                        checked={selectedDuration === duration}
                        onChange={() => setSelectedDuration(duration)}
                      />
                      <label htmlFor={`duration-${duration}`} className="ml-2 text-gray-600">
                        {duration === 'all' ? 'Any Duration' : duration}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Reset Filters */}
              <button
                onClick={() => {
                  setFilter('all');
                  setPriceRange([0, 5000]);
                  setSelectedDuration('all');
                }}
                className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md transition duration-300"
              >
                Reset Filters
              </button>
            </div>
          </div>
          
          {/* Packages Grid */}
          <div className="lg:w-3/4">
            {/* Sort Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{sortedPackages.length}</span> packages
              </p>
              
              <div className="flex items-center">
                <label htmlFor="sort" className="text-gray-600 mr-2">Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="duration-short">Duration: Shortest First</option>
                  <option value="duration-long">Duration: Longest First</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
            
            {/* Packages */}
            {sortedPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {sortedPackages.map((pkg) => (
                  <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
                    <div className="relative h-60">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4 bg-blue-600 text-white py-1 px-3 rounded-full font-semibold">
                        {pkg.duration}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                      
                      <div className="flex items-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                        <span className="text-gray-600 ml-1">{pkg.rating} ({pkg.reviewCount} reviews)</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{pkg.description.length > 100 ? pkg.description.substring(0, 100) + '...' : pkg.description}</p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-gray-600 ml-2">{pkg.location}</span>
                        </div>
                        
                        <div className="text-2xl font-bold text-blue-600">
                          ${pkg.price}
                          <span className="text-sm font-normal text-gray-600">/person</span>
                        </div>
                      </div>
                      
                      <Link href={`/packages/${pkg.slug}`} className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No packages found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters to find suitable travel packages.</p>
                <button
                  onClick={() => {
                    setFilter('all');
                    setPriceRange([0, 5000]);
                    setSelectedDuration('all');
                  }}
                  className="py-2 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-300"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}