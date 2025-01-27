import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to launch an MVP?",
    answer: "With PRIM, we can help you launch your MVP in just one month."
  },
  {
    question: "What's included in the fixed price?",
    answer: "Our all-in-one service includes design, frontend development, backend development, and DevOps setup - everything you need to launch your MVP."
  },
  {
    question: "How do you ensure quality in such a quick timeframe?",
    answer: "We use battle-tested frameworks and architectures, combined with weekly milestones and feedback cycles to maintain high quality throughout the development process."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section id="faq" className="bg-white py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className="w-full flex justify-between items-center py-4 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-base md:text-lg font-medium pr-4">{faq.question}</span>
              <ChevronDown className={`flex-shrink-0 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
            </button>
            <motion.div
              initial={false}
              animate={{ height: openIndex === index ? 'auto' : 0 }}
              className="overflow-hidden"
            >
              <p className="pb-4 text-sm md:text-base text-gray-600">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};