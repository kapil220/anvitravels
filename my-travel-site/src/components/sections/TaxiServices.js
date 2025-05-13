"use client";
import Image from 'next/image';

const carOptions = [
  {
    id: 'economy',
    name: 'Economy',
    image: '/4seat.jpg',
    price: 15,
    features: ['4 Passengers', 'Air Conditioning', '2 Small Bags'],
    description: 'Perfect for solo travelers or small groups looking for an affordable, comfortable ride around town.'
  },
  {
    id: 'standard',
    name: 'Standard',
    image: '/6seat.webp',
    price: 25,
    features: ['6 Passengers', 'Air Conditioning', '3 Medium Bags', ],
    description: 'The ideal balance of comfort and value, with extra space for families or groups exploring the area.'
  },
  {
    id: 'luxury',
    name: 'Luxury',
    image: '/12seat.webp',
    price: 45,
    features: ['12 Passengers', 'Premium Interior', '4 Large Bags', 'Refreshments'],
    description: 'Experience ultimate comfort with our spacious luxury option, perfect for special occasions or large groups.'
  },
];

export default function TaxiServices() {
  return (
    <section id="taxi-services" className="py-20 bg-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Experience <span className="text-blue-600">Premium</span> Transportation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Travel in style and comfort with our fleet of meticulously maintained vehicles.
            Sit back, relax, and enjoy the journey.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {carOptions.map((car) => (
            <div
              key={car.id}
              className="bg-gray-300 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-56">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">{car.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-400 text-xl font-bold">{car.price}</span>
                      <span className="text-white text-sm ml-1">/hour</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{car.description}</p>
                
                <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                <ul className="space-y-2">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <a href="#contact" className="inline-block bg-gray-700 hover:bg-black text-white font-medium py-2 px-4 rounded-full transition-colors duration-300 text-center w-full">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-gray-500 italic">Custom transportation solutions also available for special events and large groups</p>
        </div>
      </div>
    </section>
  );
}