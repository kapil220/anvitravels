// components/sections/Packages.jsx
import Link from 'next/link';
import Image from 'next/image';
import { packages } from '@/lib/data';

export default function Packages() {
  return (
    <section id="packages" className="py-20" style={{backgroundColor: '#F6EDE4'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Popular <span style={{color: '#FF8A3D'}}>Travel</span> Packages</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated travel packages designed to offer unforgettable experiences at stunning destinations worldwide.
          </p>
          <div className="w-24 h-1 mx-auto mt-4 animate-scale-in animation-delay-300" style={{backgroundColor: '#FF8A3D'}}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.slice(0, 6).map((pkg, index) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-200 hover:text-orange-600">
                  {pkg.title}
                </h3>

                <div className="flex items-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500 transition-transform duration-200 hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-gray-600 ml-1">{pkg.rating} ({pkg.reviewCount} reviews)</span>
                </div>

                <p className="text-gray-600 mb-4">
                  {pkg.description}
                </p>

                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-600 ml-2">{pkg.location}</span>
                </div>

                <div className="animate-slide-up animation-delay-200">
                  <Link href={`/packages/${pkg.slug}`}>
                    <div
                      className="block w-full text-center text-white font-medium py-2 px-4 rounded-md transition-all duration-300 hover:scale-105 shadow-md"
                      style={{backgroundColor: '#FF8A3D'}}
                    >
                      View More
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-400">
          <Link href="/packages" className="inline-flex items-center font-semibold transition-all duration-300 hover:scale-105" style={{color: '#FF8A3D'}}>
            View All Packages
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-200 hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}