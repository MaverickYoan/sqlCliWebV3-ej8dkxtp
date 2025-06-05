import React from 'react';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white bg-opacity-90 border-t border-gray-200 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Leaf className="w-5 h-5 text-green-dark mr-2 animate-leaf-sway" />
            <span className="text-green-dark font-medium">SQL Explorer</span>
          </div>
          
          <div className="text-sm text-gray-600">
            An eco-friendly SQL command reference site
          </div>
          
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            © {new Date().getFullYear()} SQL Command Explorer
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;