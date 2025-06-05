import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Menu, X } from 'lucide-react';

const Layout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 relative">
        {/* Mobile sidebar toggle button */}
        <button
          onClick={toggleSidebar}
          className="md:hidden fixed bottom-4 right-4 z-50 p-3 rounded-full bg-green-dark text-white shadow-lg"
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Sidebar */}
        <div 
          className={`fixed inset-y-0 left-0 transform ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition duration-300 ease-in-out z-30 md:relative md:w-64 lg:w-72 xl:w-80`}
        >
          <Sidebar />
        </div>
        
        {/* Main content */}
        <main className="flex-1 p-4 md:p-6 bg-white bg-opacity-95 rounded-lg mx-2 my-2 md:mx-4 md:my-4 shadow-xl">
          <div className="main-content">
            <Outlet />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;