import React from 'react';
import { Link } from 'react-router-dom';
import { Database, ArrowRight, FileText } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';
import { categories } from '../data/sql-commands';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12 mt-4">
        <h1 className="text-4xl font-bold text-green-dark mb-4">Explorateur de commandes SQL</h1>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
        Guide interactif des commandes SQL utilisées pour configurer et gérer la structure de la base de données phpMyAdmin
        </p>
      </div>
      
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-green-dark">Categories</h2>
          <span className="text-green-medium flex items-center cursor-pointer hover:underline">
            <FileText className="mr-1 h-4 w-4" />
            <span>View all commands</span>
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-green-dark mb-6">Getting Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="eco-card bg-white p-6 rounded-lg shadow-eco">
            <h3 className="text-lg font-semibold text-green-dark mb-3">Understanding phpMyAdmin Tables</h3>
            <p className="text-gray-700 mb-4">
              Learn how phpMyAdmin uses various tables to store configurations, user preferences, and database relations.
            </p>
            <Link to="/about" className="text-green-medium flex items-center hover:underline">
              <span>Read more</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="eco-card bg-white p-6 rounded-lg shadow-eco">
            <h3 className="text-lg font-semibold text-green-dark mb-3">Database Configuration</h3>
            <p className="text-gray-700 mb-4">
              Explore how to properly configure the phpMyAdmin database for optimal performance and security.
            </p>
            <Link to="/category/database-creation" className="text-green-medium flex items-center hover:underline">
              <span>Explore configurations</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <div className="eco-card bg-green-dark text-white p-8 rounded-lg shadow-eco">
          <div className="flex flex-col md:flex-row items-center">
            <Database className="h-12 w-12 mb-4 md:mb-0 md:mr-6" />
            <div>
              <h2 className="text-2xl font-bold mb-2">Ready to dive deeper?</h2>
              <p className="mb-4">
                Explore detailed explanations and examples of SQL commands used in phpMyAdmin setup.
              </p>
              <button className="bg-white text-green-dark font-medium px-6 py-2 rounded-md hover:bg-gray-100 transition-colors">
                Start Exploring
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;