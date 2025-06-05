import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Database, Search, Menu } from 'lucide-react';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="md:hidden mr-2 p-2 rounded-md hover:bg-green-100"
            aria-label="Toggle menu"
          >
            <Menu size={60} className="text-black" />
          </button>

          <Link to="/" className="flex items-center space-x-2">
            <Database className="h-20 w-8 text-green-dark" />
            <span className="text-xl font-bold text-black flex items-center">
              SQL Explorer
            </span>
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/"
            className={`nav-link ${
              location.pathname === '/'
                ? 'text-xl font-bold text-black'
                : 'text-xl font-bold text-black'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === '/about'
                ? 'text-xl text-black font-large'
                : 'text-xl text-black-900'
            }`}
          >
            About
          </Link>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-black-500" />
          </div>
          <input
            type="search"
            placeholder="Search commands..."
            className="pl-10 pr-4 py-2 w-48 lg:w-64 rounded-md border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-medium focus:border-transparent"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
