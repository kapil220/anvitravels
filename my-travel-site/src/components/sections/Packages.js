// components/sections/Packages.jsx
import Link from 'next/link';
import Image from 'next/image';
import { packages } from '@/lib/data';

export default function Packages() {
  return (
    <section id="packages" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Popular Travel Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated travel packages designed to offer unforgettable experiences at stunning destinations worldwide.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-gray-300 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
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
                
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-600 ml-2">{pkg.location}</span>
                  </div>
                  
                  <div className="text-2xl font-bold text-blue-600">
                    {pkg.price}
                    <span className="text-sm font-normal text-gray-600">/4 person</span>
                  </div>
                </div>
                
                <Link href={`/packages/${pkg.slug}`} className="block w-full text-center bg-gray-700 hover:bg-black text-white font-medium py-2 px-4 rounded-md transition duration-300">
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/packages" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition duration-300">
            View All Packages
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}