import React, { useState } from 'react';
import { Notebook as Robot, Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Robot className="h-8 w-8 text-[#38bdf8]" />
            <span className="ml-2 text-2xl font-bold text-white">PRIM</span>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#38bdf8] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#why-prim" className="nav-link">Why PRIM</a>
            <a href="#how-it-works" className="nav-link">How it Works</a>
            <a href="#faq" className="nav-link">FAQs</a>
            <button className="primary-button">Book your call</button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1a1a1a] rounded-lg mt-2">
              <a
                href="#why-prim"
                className="block px-3 py-2 text-white hover:bg-[#2d2d2d] rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Why PRIM
              </a>
              <a
                href="#how-it-works"
                className="block px-3 py-2 text-white hover:bg-[#2d2d2d] rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                How it Works
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 text-white hover:bg-[#2d2d2d] rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </a>
              <button
                className="w-full text-left px-3 py-2 primary-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Book your call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};