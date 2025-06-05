import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <AlertTriangle className="text-yellow-500 h-16 w-16 mb-6" />
      <h1 className="text-4xl font-bold text-green-dark mb-4">Page Not Found</h1>
      <p className="text-gray-600 text-center max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        to="/" 
        className="flex items-center bg-green-dark text-white px-6 py-3 rounded-md hover:bg-green-medium transition-colors"
      >
        <Home className="mr-2 h-5 w-5" />
        Retour au menu
      </Link>
    </div>
  );
};

export default NotFound;