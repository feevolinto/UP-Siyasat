import React from 'react';
import type { Thesis } from '../types';

interface ThesisCardProps {
  thesis: Thesis;
  onClick?: () => void;
}

export default function ThesisCard({ thesis, onClick }: ThesisCardProps) {
  return (
    <div 
      onClick={onClick}
      className={`border border-gray-200 rounded-lg p-5 bg-white transition-all 
        ${onClick ? 'cursor-pointer hover:shadow-md hover:border-[#7A1114]/30' : 'shadow-sm hover:shadow-md'}`}
    >
      <h4 className="font-bold text-gray-800 text-sm mb-1">{thesis.title}</h4>
      <p className="text-xs text-gray-500">
        {thesis.authors} ({thesis.year}) | {thesis.department}
      </p>
    </div>
  );
}