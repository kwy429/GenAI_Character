import React from 'react';
import type { SelectableOption } from '../types';

interface OptionSelectorProps {
  title: string;
  options: SelectableOption[];
  selectedValue: string;
  onSelect: (value: string) => void;
  isCharacter?: boolean;
}

const OptionSelector: React.FC<OptionSelectorProps> = ({ title, options, selectedValue, onSelect, isCharacter = false }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className={`grid ${isCharacter ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-2 md:grid-cols-3'} gap-3`}>
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`p-4 rounded-lg text-center font-semibold transition-all duration-200 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500
              ${selectedValue === option.value ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {option.icon && <span className="text-2xl mr-2">{option.icon}</span>}
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OptionSelector;