import React from 'react';

const testimonials = [
  {
    company: "TechCorp",
    quote: "PRIM helped us launch our MVP in record time!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    name: "John Smith",
    position: "CEO"
  },
  {
    company: "StartupX",
    quote: "The team's expertise saved us months of development time.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    name: "Sarah Johnson",
    position: "Founder"
  },
  {
    company: "InnovateLabs",
    quote: "Professional, efficient, and delivered exactly what we needed.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    name: "Michael Chen",
    position: "CTO"
  },
  {
    company: "DataFlow",
    quote: "Outstanding service and remarkable attention to detail.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    name: "Emma Davis",
    position: "Product Lead"
  }
];

export const SocialProof = () => (
  <section className="bg-[#f5f5f7] py-12 md:py-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 mb-8 md:mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center">Trusted by Innovative Teams</h2>
      <p className="text-lg md:text-xl text-gray-600 text-center mt-4">See what our clients say about working with PRIM</p>
    </div>
    
    <div className="relative">
      <div className="flex space-x-4 md:space-x-6 animate-infinite-scroll">
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-none w-[280px] md:w-[400px] bg-white rounded-xl p-4 md:p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</h3>
                <p className="text-xs md:text-sm text-gray-500">{testimonial.position} at {testimonial.company}</p>
              </div>
            </div>
            <p className="text-gray-600 italic text-sm md:text-base">&ldquo;{testimonial.quote}&rdquo;</p>
          </div>
        ))}
      </div>
      
      <div className="flex space-x-4 md:space-x-6 mt-4 md:mt-6 animate-infinite-scroll-reverse">
        {[...testimonials.reverse(), ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-none w-[280px] md:w-[400px] bg-white rounded-xl p-4 md:p-6 shadow-lg"
          >
            <div className="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm md:text-base">{testimonial.name}</h3>
                <p className="text-xs md:text-sm text-gray-500">{testimonial.position} at {testimonial.company}</p>
              </div>
            </div>
            <p className="text-gray-600 italic text-sm md:text-base">&ldquo;{testimonial.quote}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);