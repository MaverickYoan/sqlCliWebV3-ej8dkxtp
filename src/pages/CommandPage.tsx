import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Bookmark, ExternalLink, Info } from 'lucide-react';
import CodeBlock from '../components/CodeBlock';
import { sqlCommands, categories } from '../data/sql-commands';

const CommandPage: React.FC = () => {
  const { commandId } = useParams<{ commandId: string }>();
  const navigate = useNavigate();

  const command = sqlCommands.find((cmd) => cmd.id === commandId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [commandId]);

  if (!command) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Command Not Found
        </h2>
        <p className="mb-6">
          The SQL command you're looking for doesn't exist.
        </p>
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

  const category = categories.find((cat) => cat.id === command.category);

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Link
          to="/"
          className="inline-flex items-center text-green-dark hover:underline"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Home
        </Link>

        {category && (
          <>
            <span className="text-gray-400">/</span>
            <Link
              to={`/category/${category.id}`}
              className="text-green-dark hover:underline"
            >
              {category.name}
            </Link>
          </>
        )}

        <span className="text-gray-400">/</span>
        <span className="text-gray-600 truncate">{command.title}</span>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-dark mb-4">
          {command.title}
        </h1>
        <div className="text-gray-600 mb-6">{command.description}</div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-green-dark mb-3">
            SQL Command
          </h2>
          <CodeBlock code={command.code} />
        </div>

        <div className="bg-green-50 p-6 rounded-lg mb-8">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-green-dark mt-1 mr-2 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-green-dark mb-2">
                Understanding this Command
              </h3>
              <p className="text-gray-700 mb-4">
                {command.id === 'create-database' &&
                  "This command creates a new database named 'phpmyadmin' if it doesn't already exist. It specifies UTF-8 character encoding with binary collation, which ensures proper storage of special characters and case-sensitive sorting. The USE statement selects this database for subsequent operations."}
                {command.id === 'grant-privileges' &&
                  "This command grants specific privileges (SELECT, INSERT, DELETE, UPDATE, ALTER) to the 'pma' user on all tables within the phpmyadmin database. Note that this command is commented out by default and should only be activated if necessary, after careful consideration of security implications."}
                {command.id.includes('create-') &&
                  !command.id.includes('database') &&
                  `This command creates a table structure that phpMyAdmin uses to store ${command.id
                    .replace('create-', '')
                    .replace(
                      '-table',
                      ''
                    )} information. The table includes various fields to organize data efficiently and has appropriate primary and foreign keys defined.`}
              </p>

              <h4 className="font-semibold text-green-dark mb-2">
                Key Components:
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {command.id === 'create-database' && (
                  <>
                    <li>
                      <code className="bg-green-100 px-1 py-0.5 rounded">
                        IF NOT EXISTS
                      </code>{' '}
                      - Only creates the database if it doesn't already exist
                    </li>
                    <li>
                      <code className="bg-green-100 px-1 py-0.5 rounded">
                        CHARACTER SET utf8
                      </code>{' '}
                      - Sets the character encoding to UTF-8
                    </li>
                    <li>
                      <code className="bg-green-100 px-1 py-0.5 rounded">
                        COLLATE utf8_bin
                      </code>{' '}
                      - Sets binary collation for case-sensitive sorting
                    </li>
                    <li>
                      <code className="bg-green-100 px-1 py-0.5 rounded">
                        USE phpmyadmin
                      </code>{' '}
                      - Selects the database for subsequent operations
                    </li>
                  </>
                )}
                {command.id === 'grant-privileges' && (
                  <>
                    <li>
                      <code className="bg-green-100 px-1 py-0.5 rounded">
                        GRANT
                      </code>{' '}
                      - Assigns specific privileges to a user
                    </li>
                    <li>
                      <code className="bg-green-100 px-1 py-0.5 rounded">
                        SELECT, INSERT, DELETE, UPDATE, ALTER
                      </code>{' '}
                      - The specific operations being permitted
                    </li>
                    <li>
                      <code className="bg-green-100 px-1 py-0.5 rounded">
                        ON `phpmyadmin`.*
                      </code>{' '}
                      - Applies to all tables in the phpmyadmin database
                    </li>
                    <li>
                      <code className="bg-green-100 px-1 py-0.5 rounded">
                        TO 'pma'@localhost
                      </code>{' '}
                      - L'utilisateur recevant ces privilèges
                    </li>
                  </>
                )}
                {command.id.includes('create-') &&
                  !command.id.includes('database') && (
                    <>
                      <li>
                        <code className="bg-green-100 px-1 py-0.5 rounded">
                          CREATE TABLE IF NOT EXISTS
                        </code>{' '}
                        - Crée la table uniquement si elle n'existe pas déjà
                      </li>
                      <li>
                        <code className="bg-green-100 px-1 py-0.5 rounded">
                          PRIMARY KEY
                        </code>{' '}
                        - Ajoute une description de l'objectif du tableau
                      </li>
                      <li>
                        <code className="bg-green-100 px-1 py-0.5 rounded">
                          COMMENT
                        </code>{' '}
                        - Adds a description of the table's purpose
                      </li>
                      <li>
                        <code className="bg-green-100 px-1 py-0.5 rounded">
                          DEFAULT CHARACTER SET
                        </code>{' '}
                        - Définit l'encodage des caractères pour la table
                      </li>
                    </>
                  )}
              </ul>
            </div>
          </div>
        </div>

        {/* Related commands */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-green-dark mb-4">
            Related Commands
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {sqlCommands
              .filter(
                (cmd) =>
                  cmd.category === command.category && cmd.id !== command.id
              )
              .slice(0, 3)
              .map((relatedCommand) => (
                <div
                  key={relatedCommand.id}
                  className="p-4 border border-gray-200 rounded-lg hover:border-green-medium cursor-pointer transition-colors"
                  onClick={() => navigate(`/command/${relatedCommand.id}`)}
                >
                  <h3 className="font-medium text-green-dark mb-1 truncate">
                    {relatedCommand.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedCommand.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPage;
