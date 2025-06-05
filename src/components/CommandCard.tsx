import React from 'react';
import { Link } from 'react-router-dom';
import { Code, ArrowRight } from 'lucide-react';
import { SQLCommand } from '../types';

interface CommandCardProps {
  command: SQLCommand;
}

const CommandCard: React.FC<CommandCardProps> = ({ command }) => {
  // Truncate code snippet for preview
  const codePreview = command.code.length > 100 
    ? `${command.code.substring(0, 100)}...` 
    : command.code;

  return (
    <div className="command-card eco-card">
      <h3 className="text-lg font-semibold text-green-dark mb-2">{command.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{command.description}</p>
      
      <div className="bg-gray-100 p-3 rounded-md mb-4 font-mono text-xs text-gray-700 overflow-hidden whitespace-nowrap overflow-ellipsis">
        {codePreview}
      </div>
      
      <Link 
        to={`/command/${command.id}`} 
        className="flex items-center text-green-medium font-medium text-sm"
      >
        <Code className="mr-1 h-4 w-4" />
        <span>View full command</span>
        <ArrowRight className="ml-1 h-3 w-3" />
      </Link>
    </div>
  );
};

export default CommandCard;