import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="how">
        <HowItWorks />
      </div>
      <Footer />
    </div>
  );
}

export default App;
