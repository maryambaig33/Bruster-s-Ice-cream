import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlavorGrid from './components/FlavorGrid';
import ScoopAssistant from './components/ScoopAssistant';
import RewardsSection from './components/RewardsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brusterCream flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* AI Scoop Master Section - The "Modern" Modification */}
        <section className="bg-gradient-to-b from-white to-brusterCream relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
            <div className="text-center">
              <span className="text-brusterRed font-bold tracking-wide uppercase text-sm">New Feature</span>
              <h2 className="mt-2 text-3xl leading-8 font-display font-extrabold text-gray-900 sm:text-4xl">
                Can't Decide?
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                Ask our AI Scoop Master for a personal recommendation based on your mood!
              </p>
            </div>
            <ScoopAssistant />
          </div>
        </section>

        <FlavorGrid />
        <RewardsSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;