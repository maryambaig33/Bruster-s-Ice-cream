import React from 'react';
import { Gift, Star } from 'lucide-react';

const RewardsSection: React.FC = () => {
  return (
    <div id="rewards" className="relative bg-gray-900 py-16 sm:py-24">
       <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://picsum.photos/1200/800?random=15"
          alt="Sweet treats background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left lg:w-1/2">
          <h2 className="text-3xl font-display font-extrabold text-white sm:text-4xl">
            <span className="block text-brusterRed">Sweet Rewards</span>
            <span className="block">Earn Points. Eat Ice Cream.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Join the Sweet Rewards program today and get a $3 reward just for signing up! Earn 1 point for every $1 spent.
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
             <button className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-brusterBlack bg-brusterGold hover:bg-yellow-400 md:py-4 md:text-lg md:px-8 shadow-lg hover:shadow-xl transition-all">
                <Gift className="mr-2 h-5 w-5" /> Join Now
             </button>
             <button className="flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-full text-white hover:bg-white hover:text-gray-900 md:py-4 md:text-lg md:px-8 transition-colors">
                Log In
             </button>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 lg:w-1/3 bg-white p-8 rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
           <div className="flex items-center justify-center mb-4">
              <div className="bg-brusterRed p-3 rounded-full">
                  <Star className="h-8 w-8 text-white" />
              </div>
           </div>
           <h3 className="text-2xl font-bold text-center text-gray-900 mb-2">Member Perks</h3>
           <ul className="space-y-3 text-gray-600">
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Free $3 Reward on Signup</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Birthday Treats</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Exclusive Offers</li>
              <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> $5 Reward for every 50 points</li>
           </ul>
        </div>
      </div>
    </div>
  );
};

export default RewardsSection;