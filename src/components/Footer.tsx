import React from 'react';
import { Notebook as Robot, Twitter, Github, Linkedin } from 'lucide-react';

export const Footer = () => (
  <footer className="bg-[#1a1a1a] text-white py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center">
            <Robot className="h-6 w-6 md:h-8 md:w-8 text-[#38bdf8]" />
            <span className="ml-2 text-xl md:text-2xl font-bold">PRIM</span>
          </div>
          <p className="mt-4 text-sm md:text-base text-gray-400">Launch your product into the universe</p>
        </div>
        <div>
          <h3 className="text-base md:text-lg font-bold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#why-prim" className="text-sm md:text-base text-gray-400 hover:text-white">Why PRIM</a></li>
            <li><a href="#how-it-works" className="text-sm md:text-base text-gray-400 hover:text-white">How it Works</a></li>
            <li><a href="#faq" className="text-sm md:text-base text-gray-400 hover:text-white">FAQs</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-base md:text-lg font-bold mb-4">Contact</h3>
          <p className="text-sm md:text-base text-gray-400">hello@prim.dev</p>
        </div>
        <div>
          <h3 className="text-base md:text-lg font-bold mb-4">Social</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Github size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-12 pt-8 border-t border-gray-800 text-center text-sm md:text-base text-gray-400">
        <p>&copy; {new Date().getFullYear()} PRIM. All rights reserved.</p>
      </div>
    </div>
  </footer>
);