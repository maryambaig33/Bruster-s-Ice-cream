import React from 'react';
import { IceCream, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brusterBlack text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
               <IceCream className="h-8 w-8 text-brusterRed" />
               <span className="font-display font-bold text-2xl">Bruster's</span>
            </div>
            <p className="text-gray-400 text-sm">
              Making the world a sweeter place, one scoop at a time. Fresh made daily since 1989.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-base hover:text-brusterRed transition-colors">About Us</a></li>
              <li><a href="#" className="text-base hover:text-brusterRed transition-colors">Franchising</a></li>
              <li><a href="#" className="text-base hover:text-brusterRed transition-colors">Careers</a></li>
              <li><a href="#" className="text-base hover:text-brusterRed transition-colors">News</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-base hover:text-brusterRed transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-base hover:text-brusterRed transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-base hover:text-brusterRed transition-colors">Nutritional Info</a></li>
              <li><a href="#" className="text-base hover:text-brusterRed transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-brusterRed transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brusterRed transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-brusterRed transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
             <div className="mt-8">
                 <p className="text-sm text-gray-500">© {new Date().getFullYear()} Bruster's Real Ice Cream. All rights reserved.</p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;