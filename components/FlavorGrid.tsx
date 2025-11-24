import React from 'react';
import { MOCK_FLAVORS } from '../constants';

const FlavorGrid: React.FC = () => {
  return (
    <div id="menu" className="py-16 bg-brusterCream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-brusterRed font-semibold tracking-wide uppercase">Fresh Made Daily</h2>
          <p className="mt-2 text-3xl leading-8 font-display font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Featured Flavors
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Made fresh in every store, every day. Here are some of our fan favorites.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_FLAVORS.map((flavor) => (
            <div key={flavor.id} className="flex flex-col rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="flex-shrink-0 relative group">
                <img className="h-64 w-full object-cover transform group-hover:scale-105 transition-transform duration-500" src={flavor.imageUrl} alt={flavor.name} />
                {flavor.isSeasonal && (
                  <div className="absolute top-4 right-4 bg-brusterGold text-brusterBlack text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Limited Time
                  </div>
                )}
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-brusterRed">
                    {flavor.category}
                  </p>
                  <div className="block mt-2">
                    <p className="text-xl font-bold text-gray-900 font-display">{flavor.name}</p>
                    <p className="mt-3 text-base text-gray-500">
                      {flavor.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
             <button className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brusterRed">
                View Full Menu
             </button>
        </div>
      </div>
    </div>
  );
};

export default FlavorGrid;