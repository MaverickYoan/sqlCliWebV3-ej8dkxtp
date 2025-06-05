import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Database, Table, Shield, Leaf } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      <Link
        to="/"
        className="inline-flex items-center text-green-dark hover:underline mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Retour au menu
      </Link>

      <h1 className="text-3xl font-bold text-green-dark mb-6">
        About SQL Command Explorer
      </h1>

      <div className="space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-sm eco-card">
          <h2 className="text-xl font-semibold text-green-dark mb-4 flex items-center">
            <Leaf className="mr-2 h-5 w-5" />
            Our Eco-Friendly Approach
          </h2>
          <p className="text-gray-700 mb-4">
            SQL Command Explorer est conçu dans une optique éco-responsable,
            reflétant notre engagement en faveur du développement durable, même
            dans le monde numérique. Notre interface écologique offre non
            seulement une expérience utilisateur agréable, mais symbolise
            également notre engagement envers l'environnement.
          </p>
          <p className="text-gray-700">
            Tout comme les commandes SQL aident à organiser et à optimiser les
            structures de bases de données, nous croyons en l’organisation et
            l’optimisation de nos ressources numériques pour minimiser l’impact
            environnemental tout en maximisant la valeur éducative.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm eco-card">
          <h2 className="text-xl font-semibold text-green-dark mb-4 flex items-center">
            <Database className="mr-2 h-5 w-5" />
            Comprendre phpMyAdmin
          </h2>
          <p className="text-gray-700 mb-4">
            phpMyAdmin est un outil logiciel libre écrit en PHP, conçu pour
            gérer l'administration de MySQL sur le Web. Il permet d'effectuer
            diverses tâches telles que la création, la modification ou la
            suppression de bases de données, de tables, de champs ou de lignes ;
            l'exécution d'instructions SQL ; ou la gestion des utilisateurs et
            des autorisations.
          </p>
          <p className="text-gray-700">
            Les commandes SQL présentées dans cet explorateur sont
            spécifiquement conçues pour configurer le stockage de configuration
            de phpMyAdmin, ce qui améliore les fonctionnalités de phpMyAdmin en
            activant des fonctionnalités telles que les signets, les
            commentaires et l'historique SQL.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm eco-card">
          <h2 className="text-xl font-semibold text-green-dark mb-4 flex items-center">
            <Table className="mr-2 h-5 w-5" />
            SQL Command Categories
          </h2>
          <p className="text-gray-700 mb-4">
            Nous avons organisé les commandes SQL en catégories logiques pour
            vous aider à mieux comprendre leur objectif et leur relation les
            unes avec les autres :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="font-medium text-green-dark">
                Database Creation
              </span>
              : Commands for establishing and configuring databases
            </li>
            <li>
              <span className="font-medium text-green-dark">
                Table Creation
              </span>
              : Commands for defining table structures and relationships
            </li>
            <li>
              <span className="font-medium text-green-dark">Privileges</span>:
              Commands for managing user access and permissions
            </li>
            <li>
              <span className="font-medium text-green-dark">
                Table Structure
              </span>
              : Commands for organizing and optimizing table layouts
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm eco-card">
          <h2 className="text-xl font-semibold text-green-dark mb-4 flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Security Considerations
          </h2>
          <p className="text-gray-700 mb-4">
            Lors de la configuration de bases de données, notamment pour des
            applications web comme phpMyAdmin, la sécurité est primordiale. Les
            commandes de cet explorateur incluent des fonctionnalités de
            sécurité importantes, telles que :
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Proper user privilege management</li>
            <li>Table-specific access controls</li>
            <li>Careful handling of sensitive data</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Assurez-vous toujours de comprendre les implications de sécurité de
            toutes les commandes SQL avant de les exécuter dans un environnement
            de production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
