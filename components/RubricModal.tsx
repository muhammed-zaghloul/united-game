
import React from 'react';
import { RUBRIC_DATA } from '../constants';

interface RubricModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RubricModal: React.FC<RubricModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
      <div className="bg-white rounded-3xl w-full max-w-md max-h-[85vh] overflow-hidden flex flex-col shadow-2xl animate-in slide-in-from-bottom-4 duration-300">
        <div className="p-5 border-b flex justify-between items-center bg-slate-50">
          <h2 className="text-xl font-black text-slate-800 uppercase tracking-tight">Rubric Guide</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-600 font-bold"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto space-y-8 scroll-smooth">
          {RUBRIC_DATA.map((category) => (
            <div key={category.name} className="space-y-3">
              <div className="sticky top-0 bg-white py-2 z-10">
                <h3 className="text-sky-600 font-black uppercase text-sm tracking-widest flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-600 rounded-full"></span>
                  {category.name}
                </h3>
              </div>
              <div className="grid gap-2">
                {[1, 2, 3, 4, 5].map((score) => (
                  <div key={score} className="flex items-start gap-4 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-black text-sm">
                      {score}
                    </div>
                    <p className="text-sm text-slate-600 font-medium leading-tight">
                      {category.levels[score]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="p-4 border-t bg-slate-50 flex gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-3 bg-slate-800 text-white rounded-xl font-black text-sm uppercase tracking-wide shadow-lg"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default RubricModal;
