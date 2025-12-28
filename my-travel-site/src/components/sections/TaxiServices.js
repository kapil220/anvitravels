"use client";
import Image from 'next/image';

const carOptions = [
  {
    id: 'economy',
    name: 'Economy',
    image: '/4seat.jpg',
    features: ['4 Passengers', 'Air Conditioning', '2 Small Bags'],
    description: 'Perfect for solo travelers or small groups looking for an affordable, comfortable ride around town.'
  },
  {
    id: 'standard',
    name: 'Standard',
    image: '/6seat.webp',
    features: ['6 Passengers', 'Air Conditioning', '3 Medium Bags', ],
    description: 'The ideal balance of comfort and value, with extra space for families or groups exploring the area.'
  },
  {
    id: 'luxury',
    name: 'Luxury',
    image: '/12seat.webp',
    features: ['12 Passengers', 'Premium Interior', '4 Large Bags', 'Refreshments'],
    description: 'Experience ultimate comfort with our spacious luxury option, perfect for special occasions or large groups.'
  },
];

export default function TaxiServices() {
  return (
    <section id="taxi-services" className="py-20" style={{backgroundColor: '#F6EDE4'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-800">Experience <span style={{color: '#FF8A3D'}}>Premium</span> Transportation</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Travel in style and comfort with our fleet of meticulously maintained vehicles.
            Sit back, relax, and enjoy the journey.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 animate-scale-in animation-delay-300" style={{backgroundColor: '#FF8A3D'}}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {carOptions.map((car, index) => (
            <div
              key={car.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white animate-slide-up animation-delay-200" style={{animationDelay: `${0.2 + index * 0.2}s`}}>
                      {car.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4 animate-slide-up animation-delay-100" style={{animationDelay: `${0.3 + index * 0.2}s`}}>
                  {car.description}
                </p>

                <h4 className="font-semibold text-gray-800 mb-2 animate-slide-up animation-delay-200" style={{animationDelay: `${0.4 + index * 0.2}s`}}>
                  Features:
                </h4>
                <ul className="space-y-2 animate-slide-up animation-delay-300" style={{animationDelay: `${0.5 + index * 0.2}s`}}>
                  {car.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 animate-slide-up" style={{animationDelay: `${0.6 + index * 0.2 + featureIndex * 0.1}s`}}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform duration-200 hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#FF8A3D'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 animate-slide-up animation-delay-400" style={{animationDelay: `${0.8 + index * 0.2}s`}}>
                  <a href="#contact" className="inline-block text-white font-medium py-2 px-4 rounded-full transition-all duration-300 text-center w-full hover:scale-105 shadow-md" style={{backgroundColor: '#FF8A3D'}}>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in animation-delay-600">
          <p className="text-gray-500 italic">Custom transportation solutions also available for special events and large groups</p>
        </div>
      </div>
    </section>
  );
}