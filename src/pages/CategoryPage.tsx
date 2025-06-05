import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CommandCard from '../components/CommandCard';
import { categories, sqlCommands } from '../data/sql-commands';
import { ArrowLeft, Database, Table, Shield, LayoutGrid } from 'lucide-react';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();

  const category = categories.find((c) => c.id === categoryId);
  const filteredCommands = sqlCommands.filter(
    (cmd) => cmd.category === categoryId
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  if (!category) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Categorie introuvable
        </h2>
        <p className="mb-6">La catégorie que vous recherchez n'existe pas.</p>
        <Link
          to="/"
          className="inline-flex items-center text-green-dark hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour au menu
        </Link>
      </div>
    );
  }

  const getCategoryIcon = () => {
    switch (category.icon) {
      case 'Database':
        return <Database className="h-10 w-10 text-green-dark" />;
      case 'Table':
        return <Table className="h-10 w-10 text-green-dark" />;
      case 'Shield':
        return <Shield className="h-10 w-10 text-green-dark" />;
      case 'LayoutGrid':
        return <LayoutGrid className="h-10 w-10 text-green-dark" />;
      default:
        return <Database className="h-10 w-10 text-green-dark" />;
    }
  };

  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center text-green-dark hover:underline mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Retour au menu
      </Link>

      <div className="flex items-center mb-6">
        <div className="p-3 bg-green-100 rounded-lg mr-4">
          {getCategoryIcon()}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-green-dark mb-2">
            {category.name}
          </h1>
          <p className="text-gray-600">{category.description}</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-green-dark mb-4">
          Commandes dans cette catégorie
        </h2>

        {filteredCommands.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredCommands.map((command) => (
              <CommandCard key={command.id} command={command} />
            ))}
          </div>
        ) : (
          <p className="text-gray-600 italic">
            Aucune commande trouvée dans cette catégorie.
          </p>
        )}
      </div>

      <div className="mt-12 p-6 bg-green-100 rounded-lg">
        <h2 className="text-xl font-semibold text-green-dark mb-3">
          Compréhension {category.name}
        </h2>
        <p className="text-gray-700 mb-4">
          {category.id === 'database-creation' &&
            'Database creation commands are fundamental SQL operations used to establish new databases within your database management system. These commands specify character sets, collations, and other configuration settings.'}
          {category.id === 'table-creation' &&
            'Table creation commands define the structure of your database tables, including columns, data types, constraints, and relationships. These form the backbone of your database schema.'}
          {category.id === 'privileges' &&
            'Privilege management commands control user access to database objects. They specify what actions users can perform on databases, tables, and other SQL objects.'}
          {category.id === 'table-structure' &&
            'Table structure commands help organize and modify table layouts, relationships, and metadata to optimize database performance and usability.'}
        </p>
        <p className="text-gray-700">
          Explorez les commandes de cette section pour comprendre comment elles
          contribuent à la création et à la maintenance de votre infrastructure
          de base de données.
        </p>
      </div>
    </div>
  );
};

export default CategoryPage;
