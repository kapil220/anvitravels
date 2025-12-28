import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    location: "Delhi, India",
    photo: "/images/testimonial-1.jpg",
    text: "Our family trip to Ujjain and Omkareshwar was exceptional! The spiritual journey was perfectly organized with comfortable accommodations and knowledgeable local guides. The darshan experience at the jyotirlingas was truly divine.",
    rating: 5,
    destination: "Ujjain & Omkareshwar"
  },
  {
    id: 2,
    name: "Priya Patel",
    location: "Ahmedabad, India",
    photo: "/images/testimonial-2.jpg",
    text: "The heritage tour of Mandu and Chittorgarh was outstanding. The historical explanations were detailed, transportation was punctual, and the hotels were clean and comfortable. Perfect for history enthusiasts!",
    rating: 5,
    destination: "Mandu & Chittorgarh"
  },
  {
    id: 3,
    name: "Amit Kumar",
    location: "Jaipur, India",
    photo: "/images/testimonial-3.jpg",
    text: "Our wildlife safari to Panna and Kanha was unforgettable. The jeep safaris, guided tours, and accommodation arrangements were top-notch. We spotted tigers and experienced the rich biodiversity of Madhya Pradesh.",
    rating: 5,
    destination: "Panna & Kanha"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    location: "Kolkata, India",
    photo: "/images/testimonial-4.jpg",
    text: "The Khajuraho and Bhedaghat trip was magical! The temples of Khajuraho were stunning, and the boat ride at Dhuandhar Falls was thrilling. Everything was well-coordinated and the local cuisine recommendations were excellent.",
    rating: 5,
    destination: "Khajuraho & Bhedaghat"
  },
  {
    id: 5,
    name: "Vikram Singh",
    location: "Chandigarh, India",
    photo: "/images/testimonial-5.jpg",
    text: "Our pilgrimage to Maheshwar and Amarkantak was spiritually enriching. The team arranged everything perfectly - from temple visits to holy dips in sacred rivers. The devotion and attention to detail was commendable.",
    rating: 5,
    destination: "Maheshwar & Amarkantak"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20" style={{backgroundColor: '#F6EDE4'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block py-1 px-3 bg-gray-800 rounded-full text-sm font-medium text-white tracking-wider mb-3">TRAVELER STORIES</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 animate-slide-up animation-delay-100">
            Journeys That <span style={{color: '#FF8A3D'}}>Inspire</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg animate-slide-up animation-delay-200">
            Real adventures, real emotions — discover how our travelers experienced the world through their eyes.
          </p>
          <div className="w-24 h-1 mx-auto mt-6 animate-scale-in animation-delay-300" style={{backgroundColor: '#FF8A3D'}}></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              {/* Rating */}
              <div className="flex items-center mb-4 animate-slide-up animation-delay-100" style={{animationDelay: `${0.1 + index * 0.2}s`}}>
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} transition-transform duration-200 hover:scale-110`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-600">({testimonial.rating}/5)</span>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed animate-slide-up animation-delay-200" style={{animationDelay: `${0.2 + index * 0.2}s`}}>
                &quot;{testimonial.text}&quot;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center animate-slide-up animation-delay-300" style={{animationDelay: `${0.3 + index * 0.2}s`}}>
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 transition-transform duration-200 hover:scale-110">
                  <Image
                    src={testimonial.photo}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Destination Tag */}
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white animate-scale-in animation-delay-400" style={{backgroundColor: '#FF8A3D', animationDelay: `${0.4 + index * 0.2}s`}}>
                {testimonial.destination}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center animate-fade-in animation-delay-600">
          <p className="text-gray-500 mb-4">Ready to create your own travel story?</p>
          <div className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white shadow-md transition-all duration-300 hover:scale-105" style={{backgroundColor: '#FF8A3D'}}>
            Start Your Journey
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-200 hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}