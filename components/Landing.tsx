
import React from 'react';
import { TeamState, View } from '../types';

interface LandingProps {
  team: TeamState;
  onSelectActivity: (activity: string) => void;
  onLogout: () => void;
}

const Landing: React.FC<LandingProps> = ({ team, onSelectActivity, onLogout }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b p-4 shadow-sm flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="bg-sky-600 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
            {team.name ? team.name[0].toUpperCase() : '?'}
          </div>
          <div>
            <h2 className="font-black text-slate-800 leading-tight">{team.name}</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">Active Session</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-200">
              <span className="text-xl">🏆</span>
              <span className="font-black text-yellow-700">{team.goldCoins}</span>
            </div>
            <div className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
              <span className="text-xl">🥈</span>
              <span className="font-black text-slate-600">{team.silverCoins}</span>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </header>

      <main className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-black text-slate-800">Dashboard</h1>
          <p className="text-slate-500 mt-2 font-medium">Select an active training module to begin.</p>
        </div>

        <div className="grid gap-6">
          {/* Profile Evaluation Activity Button - Now correctly links to selection page */}
          <button 
            onClick={() => onSelectActivity(View.PROFILE_SELECTION)}
            className="group relative bg-white border-2 border-sky-100 p-8 rounded-[2rem] shadow-xl shadow-sky-50 flex items-center gap-6 hover:border-sky-500 transition-all text-left transform active:scale-[0.98]"
          >
            <div className="bg-sky-100 p-5 rounded-2xl group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-black text-slate-800">Profile Evaluation</h3>
              <p className="text-slate-500 font-medium">Evaluate pharmacists based on knowledge, skills, and attitude.</p>
              <div className="mt-4 flex items-center gap-2">
                 <span className="bg-green-100 text-green-700 text-[10px] font-black uppercase px-2 py-1 rounded-full">Available Now</span>
              </div>
            </div>
            <div className="text-sky-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>

          {/* Matching Activity - Disabled */}
          <div className="relative bg-slate-100 border-2 border-slate-200 p-8 rounded-[2rem] opacity-60 flex items-center gap-6 grayscale cursor-not-allowed overflow-hidden">
             {/* Dimming Layer */}
             <div className="absolute inset-0 bg-slate-50/50 pointer-events-none" />
             
             <div className="bg-slate-200 p-5 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-black text-slate-400">Matching Activity</h3>
              <p className="text-slate-400 font-medium">Coming soon in the next round of training.</p>
              <div className="mt-4 flex items-center gap-2">
                 <span className="bg-slate-200 text-slate-500 text-[10px] font-black uppercase px-2 py-1 rounded-full">Locked</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Stats summary for mobile */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t flex justify-around items-center shadow-2xl z-20">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏆</span>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-black text-slate-400">Gold</span>
            <span className="font-black text-slate-800 leading-none">{team.goldCoins}</span>
          </div>
        </div>
        <div className="w-px h-8 bg-slate-100" />
        <div className="flex items-center gap-2">
          <span className="text-2xl">🥈</span>
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-black text-slate-400">Silver</span>
            <span className="font-black text-slate-800 leading-none">{team.silverCoins}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
