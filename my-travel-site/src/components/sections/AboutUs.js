// components/sections/AboutUs.jsx
import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id="about" className="py-20" style={{backgroundColor: '#F6EDE4'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">About <span style={{color: '#FF8A3D'}}>Our Travel Agency</span></h2>
          <div className="w-24 h-1 mx-auto animate-scale-in animation-delay-300" style={{backgroundColor: '#FF8A3D'}}></div>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-slide-up">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800 animate-slide-up animation-delay-100">
              Creating Unforgettable Travel Experiences Since 2005
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed animate-slide-up animation-delay-200">
              At Anvi Travels, we believe in the transformative power of travel. For over 15 years,
              we&apos;ve been helping travelers discover the world&apos;s most amazing destinations with carefully
              curated experiences that blend adventure, culture, relaxation, and authentic local connections.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed animate-slide-up animation-delay-300">
              Our team of experienced travel experts has explored the corners of the globe to bring you
              the very best destinations and experiences. We pride ourselves on attention to detail,
              personalized service, and creating tailor-made journeys that match your travel style and wishes.
            </p>

            <div className="flex flex-wrap gap-8 animate-slide-up animation-delay-400">
              <div className="flex items-start group">
                <div className="p-2 rounded-md text-white mr-4 transition-transform duration-200 group-hover:scale-110" style={{backgroundColor: '#FF8A3D'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg mb-1">Expert Guides</h4>
                  <p className="text-gray-600">Local knowledge & passion</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="p-2 rounded-md text-white mr-4 transition-transform duration-200 group-hover:scale-110" style={{backgroundColor: '#FF8A3D'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800  mb-1">Personalized Service</h4>
                  <p className="text-gray-600">Tailored to your needs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative animate-slide-in-right">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <Image
                src="/31.jpg"
                alt="Our travel team exploring destinations"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg md:max-w-xs animate-slide-up animation-delay-600 transition-transform duration-300 hover:-translate-y-2">
              <p className="font-semibold text-gray-800">
                We don&apos;t just sell destinations, we create meaningful connections with places and people.
              </p>
              <p className="mt-2 font-medium" style={{color: '#FF8A3D'}}>— Sarah Johnson, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}