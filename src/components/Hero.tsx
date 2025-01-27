import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => (
  <section className="min-h-screen relative pt-20">
    <div className="absolute inset-0 z-0">
      <img
        src="https://static.vecteezy.com/system/resources/previews/053/256/884/non_2x/space-background-with-saturn-and-stars-over-mountains-vector.jpg"
        alt="Space background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/60" /> {/* Overlay to ensure text remains readable */}
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
      <div className="md:w-1/2 text-white pt-12 md:pt-20 text-center md:text-left">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          Launch your MVP in <span className="gradient-text">one month</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300"
        >
          Launch your product into the universe with PRIM's help
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="primary-button mt-8 w-full md:w-auto"
        >
          Book your call now
        </motion.button>
      </div>
      <div className="md:w-1/2 relative h-[300px] md:h-[500px] mt-8 md:mt-0">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-rocket-launch-vector-png-image_12155882.png"
                alt="Planet"
                className="w-48 h-48 md:w-96 md:h-96 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);