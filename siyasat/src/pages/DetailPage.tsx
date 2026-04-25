import React from 'react';
import { ExternalLink } from 'lucide-react';
import type { Thesis } from '../types';

interface DetailPageProps {
  thesis: Thesis | undefined;
}

export default function DetailPage({ thesis }: DetailPageProps) {
  if (!thesis) return <div>Thesis not found.</div>;

  return (
    <div className="animate-in fade-in duration-300">
      <div className="text-xs text-gray-500 mb-6">
        Home &gt; Undergraduate Theses &gt; {thesis.id}
      </div>
      
      <h3 className="text-[#7A1114] font-serif font-bold text-xl border-b border-gray-200 pb-4 mb-6">
        UNDERGRADUATE THESES
      </h3>

      <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-gray-200 pb-6 mb-6">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
            {thesis.title}
          </h2>
          <p className="text-xs text-[#7A1114] font-medium">
            {thesis.authors}, <span className="italic text-gray-600">{thesis.college}, University of the Philippines Mindanao</span>
          </p>
        </div>
        <button className="flex items-center gap-2 bg-[#7A1114] hover:bg-[#5A0C0E] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap shadow-sm">
          <ExternalLink size={16} /> Link to Full Text
        </button>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <h4 className="font-bold text-gray-900 text-xs mb-1">Date</h4>
          <p className="text-gray-700 text-xs">5-{thesis.year}</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-xs mb-1">Degree</h4>
          <p className="text-gray-700 text-xs">{thesis.degree}</p>
        </div>
        <div>
          <h4 className="font-bold text-gray-900 text-xs mb-1">College</h4>
          <p className="text-gray-700 text-xs">{thesis.department}</p>
        </div>
        <div className="pt-2">
          <h4 className="font-bold text-gray-900 text-xs mb-2">Abstract</h4>
          <p className="text-gray-700 text-xs leading-relaxed text-justify">
            {thesis.abstract}
          </p>
        </div>
      </div>
    </div>
  );
}