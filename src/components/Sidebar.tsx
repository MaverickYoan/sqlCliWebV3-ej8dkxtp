import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Database,
  Table,
  Shield,
  LayoutGrid,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';
import { categories } from '../data/sql-commands';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-5 h-5" />;
      case 'Table':
        return <Table className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-5 h-5" />;
      default:
        return <Database className="w-5 h-5" />;
    }
  };

  return (
    <div className="h-full overflow-y-auto bg-white bg-opacity-95 border-r border-gray-200 shadow-md">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-green-dark mb-1">SQL Explorer</h2>
        <p className="text-sm text-gray-600">
          Navigate SQL commands by category
        </p>
      </div>

      <div className="p-3">
        <Link
          to="/"
          className={`flex items-center p-2 rounded-md ${
            location.pathname === '/'
              ? 'bg-green-100 text-green-dark'
              : 'hover:bg-gray-100'
          }`}
        >
          <Database className="w-5 h-5 mr-3" />
          <span>Home</span>
        </Link>

        <div className="mt-6">
          <h3 className="px-2 mb-3 text-xs font-semibold text-gray-600 uppercase tracking-wider">
            Categories
          </h3>

          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category.id}>
                <div className="flex flex-col">
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className={`flex items-center justify-between p-2 w-full text-left rounded-md ${
                      location.pathname === `/category/${category.id}`
                        ? 'bg-green-100 text-green-dark'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      {getCategoryIcon(category.icon)}
                      <span className="ml-3">{category.name}</span>
                    </div>
                    {expandedCategories.includes(category.id) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>

                  {expandedCategories.includes(category.id) && (
                    <ul className="ml-6 mt-1 space-y-1">
                      <li>
                        <Link
                          to={`/category/${category.id}`}
                          className="block p-2 text-sm rounded-md hover:bg-gray-100"
                        >
                          Overview
                        </Link>
                      </li>
                      {/* Additional subcategory links could go here */}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <Link
            to="/about"
            className={`flex items-center p-2 rounded-md ${
              location.pathname === '/about'
                ? 'bg-green-100 text-green-dark'
                : 'hover:bg-gray-100'
            }`}
          >
            <span>About</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
