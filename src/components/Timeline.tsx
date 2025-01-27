import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Code, Rocket } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Book a Kickoff Call",
    description: "Our team meets with you and talks high level about the budget, timeline and product needed",
    icon: <Clock className="h-6 w-6 md:h-8 md:w-8 text-[#38bdf8]" />
  },
  {
    number: "02",
    title: "Specifications & Requirements Phase",
    description: "Over one week in two one hour meetings our team will generate a detailed document specifying all needed pieces that should be included in the build phase. We'll do one session monday, send over the draft mid week and review on a final Friday call ahead of the build phase",
    icon: <Code className="h-6 w-6 md:h-8 md:w-8 text-[#38bdf8]" />
  },
  {
    number: "03",
    title: "Build Phase",
    description: "Our team starts the 4 week build with weekly milestones:",
    bulletPoints: [
      "Week 1: Core infrastructure setup and initial prototypes",
      "Week 2: Main feature development and design implementation",
      "Week 3: Integration of all components and testing",
      "Week 4: Final polish, deployment, and handover"
    ],
    icon: <Rocket className="h-6 w-6 md:h-8 md:w-8 text-[#38bdf8]" />
  }
];

export const Timeline = () => (
  <section id="how-it-works" className="bg-[#f5f5f7] py-12 md:py-20">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">How it Works</h2>
      <div className="relative">
        <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-[#38bdf8] h-full rounded-full" />
        
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="flex items-start mb-8 md:mb-12 relative"
          >
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                {step.icon}
              </div>
            </div>
            
            <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-12 md:mr-auto' : 'md:pl-12 md:ml-auto'}`}>
              <motion.div
                className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-3xl md:text-4xl font-bold text-[#38bdf8]">{step.number}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">{step.description}</p>
                {step.bulletPoints && (
                  <ul className="space-y-2 text-sm md:text-base text-gray-600">
                    {step.bulletPoints.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#38bdf8] mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);