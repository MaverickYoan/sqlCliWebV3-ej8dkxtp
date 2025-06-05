import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'sql' }) => {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  
  return (
    <div className="code-block my-4 rounded-lg overflow-hidden">
      <div className="bg-gray-800 py-2 px-4 flex justify-between items-center">
        <span className="text-gray-400 text-sm">{language.toUpperCase()}</span>
        <button 
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <Check size={18} className="text-green-light" />
          ) : (
            <Copy size={18} />
          )}
        </button>
      </div>
      <SyntaxHighlighter 
        language={language} 
        style={vs2015}
        customStyle={{ margin: 0, borderRadius: 0, fontSize: '0.9rem' }}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;