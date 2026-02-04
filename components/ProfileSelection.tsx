
import React from 'react';
import { PROFILES } from '../constants';
import { TeamState, ProfileData } from '../types';

interface ProfileSelectionProps {
  team: TeamState;
  onSelect: (profile: ProfileData) => void;
  onBack: () => void;
  onOpenLeaderboard: () => void;
}

const ProfileSelection: React.FC<ProfileSelectionProps> = ({ team, onSelect, onBack, onOpenLeaderboard }) => {
  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b shadow-sm p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <h1 className="font-black text-slate-800 text-lg uppercase tracking-tight">Select Profile</h1>
        </div>

        <button 
          onClick={onOpenLeaderboard}
          className="bg-sky-600 text-white p-2.5 rounded-2xl shadow-lg shadow-sky-100 active:scale-90 transition-all"
          aria-label="Leaderboard"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </button>
      </header>

      <main className="p-6 max-w-2xl mx-auto">
        <div className="mb-6">
          <h2 className="text-3xl font-black text-slate-800 leading-tight">Profiles</h2>
          <p className="text-slate-500 font-medium">Choose a pharmacist to begin their evaluation.</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {PROFILES.map((profile) => {
            const isCompleted = team.completedProfiles.includes(profile.id);
            return (
              <button
                key={profile.id}
                onClick={() => onSelect(profile)}
                className={`relative group bg-white p-4 rounded-[2.5rem] shadow-xl border-2 transition-all active:scale-95 text-center flex flex-col items-center gap-3 ${
                  isCompleted ? 'border-green-400 bg-green-50/30' : 'border-white hover:border-sky-300'
                }`}
              >
                <div className="relative">
                  <div className={`w-28 h-28 rounded-full overflow-hidden border-4 bg-slate-100 shadow-lg ${
                    isCompleted ? 'border-green-500' : 'border-slate-50 group-hover:border-sky-200'
                  }`}>
                    <img 
                      src={profile.avatar} 
                      alt={profile.name} 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&background=random&size=200`;
                      }}
                    />
                  </div>
                  {isCompleted && (
                    <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1.5 rounded-full border-4 border-white shadow-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div className="space-y-0.5">
                  <p className={`font-black tracking-tight ${isCompleted ? 'text-green-800' : 'text-slate-800'}`}>
                    {profile.name}
                  </p>
                  <p className="text-[10px] uppercase font-bold text-slate-400">
                    {profile.job}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </main>

      {/* Quick Stats Floating */}
      <div className="fixed bottom-6 left-6 right-6 p-4 bg-slate-900 text-white rounded-[2rem] shadow-2xl flex justify-between items-center animate-in slide-in-from-bottom-4 duration-500">
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🏆</span>
            <span className="font-black text-lg">{team.goldCoins}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">🥈</span>
            <span className="font-black text-lg">{team.silverCoins}</span>
          </div>
        </div>
        <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
          {team.completedProfiles.length} / {PROFILES.length} COMPLETED
        </div>
      </div>
    </div>
  );
};

export default ProfileSelection;
