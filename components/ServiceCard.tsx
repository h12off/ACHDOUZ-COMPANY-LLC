import React from 'react';
import type { Service } from '../types';

interface ServiceCardProps extends Service {
  isClickable?: boolean;
  showPrices?: boolean;
  onClick?: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, items, isClickable, showPrices, onClick }) => {
  return (
    <div 
      className={`bg-gray-900 border border-gray-700 rounded-lg p-6 md:p-8 transform hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-lg hover:shadow-red-500/20 ${isClickable ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">{icon}</div>
        <div>
          <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
          <ul className="space-y-3">
            {items.map((item, index) => (
              <li key={index} className="flex items-start justify-between">
                <div className="flex items-start">
                  <svg className="flex-shrink-0 h-5 w-5 text-red-600 mr-2 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-400">{item.name}</span>
                </div>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showPrices && item.price ? 'max-w-xs opacity-100' : 'max-w-0 opacity-0'}`}>
                  {item.price && (
                    <span className="text-red-500 ml-4 font-mono text-sm whitespace-nowrap">{item.price}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${showPrices ? 'max-h-20 opacity-100 pt-4' : 'max-h-0 opacity-0'}`}>
            <p className="text-xs text-gray-500 italic">
              *Prices are starting estimates. We offer competitive and flexible rates to fit your project's needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};