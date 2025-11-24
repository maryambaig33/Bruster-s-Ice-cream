import React, { useState } from 'react';
import { Menu, X, IceCream } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-brusterRed shadow-lg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer space-x-2">
            <div className="bg-white p-2 rounded-full">
              <IceCream className="h-8 w-8 text-brusterRed" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">Bruster's</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-semibold text-lg hover:text-brusterGold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-white text-brusterRed hover:bg-brusterGold hover:text-brusterBlack px-6 py-2 rounded-full font-bold transition-all shadow-md transform hover:scale-105">
              Join Rewards
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-brusterGold focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-red-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-red-800 hover:text-brusterGold"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full text-left px-3 py-2 text-base font-bold text-brusterGold hover:text-white">
              Join Rewards
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;