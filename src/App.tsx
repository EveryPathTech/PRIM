import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { WhyPrim } from './components/WhyPrim';
import { Timeline } from './components/Timeline';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SocialProof />
      <WhyPrim />
      <Timeline />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;