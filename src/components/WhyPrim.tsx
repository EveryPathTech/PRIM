import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Code, Rocket, Package } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="h-6 w-6 md:h-8 md:w-8 text-[#38bdf8]" />,
    title: "Production Ready in One Month",
    description: "Skip the lengthy development cycles. Get your MVP to market in just one month, not months."
  },
  {
    icon: <Code className="h-6 w-6 md:h-8 md:w-8 text-[#38bdf8]" />,
    title: "10+ Years Experience",
    description: "Benefit from our decade-plus experience in shipping successful products across industries."
  },
  {
    icon: <Rocket className="h-6 w-6 md:h-8 md:w-8 text-[#38bdf8]" />,
    title: "Fasttrack Infrastructure",
    description: "Focus on your product's value while we handle the technical infrastructure."
  },
  {
    icon: <Package className="h-6 w-6 md:h-8 md:w-8 text-[#38bdf8]" />,
    title: "All-in-One Service",
    description: "Design, Frontend, Backend, and DevOps - everything you need for one fixed price."
  }
];

export const WhyPrim = () => (
  <section id="why-prim" className="bg-white py-12 md:py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Why Choose PRIM?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="benefit-card"
          >
            {benefit.icon}
            <h3 className="text-lg md:text-xl font-bold mt-3 md:mt-4">{benefit.title}</h3>
            <p className="mt-2 text-sm md:text-base text-gray-600">{benefit.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);