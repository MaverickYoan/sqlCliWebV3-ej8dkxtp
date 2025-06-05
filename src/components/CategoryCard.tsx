import React from 'react';
import { Link } from 'react-router-dom';
import { Database, Table, Shield, LayoutGrid, ArrowRight } from 'lucide-react';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const getIcon = () => {
    switch (category.icon) {
      case 'Database': return <Database className="h-8 w-8 text-green-dark" />;
      case 'Table': return <Table className="h-8 w-8 text-green-dark" />;
      case 'Shield': return <Shield className="h-8 w-8 text-green-dark" />;
      case 'LayoutGrid': return <LayoutGrid className="h-8 w-8 text-green-dark" />;
      default: return <Database className="h-8 w-8 text-green-dark" />;
    }
  };

  return (
    <Link 
      to={`/category/${category.id}`} 
      className="sql-category-card eco-card p-6 rounded-lg shadow-eco hover:shadow-lg transition-all duration-300"
    >
      <div className="flex items-start mb-4">
        <div className="p-2 bg-green-100 rounded-lg mr-4">
          {getIcon()}
        </div>
        <h3 className="text-xl font-semibold text-green-dark">{category.name}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{category.description}</p>
      
      <div className="flex items-center text-green-medium font-medium">
        <span>Explore commands</span>
        <ArrowRight className="ml-2 w-4 h-4" />
      </div>
    </Link>
  );
};

export default CategoryCard;