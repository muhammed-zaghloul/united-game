
import React from 'react';

interface LeaderboardProps {
  onBack: () => void;
}

const MOCK_RANKINGS = [
  { rank: 1, name: "Alpha Team", gold: 12, silver: 4, isYou: false },
  { rank: 2, name: "Gamma Squad", gold: 10, silver: 8, isYou: false },
  { rank: 3, name: "Current User", gold: 8, silver: 6, isYou: true },
  { rank: 4, name: "Delta Force", gold: 6, silver: 10, isYou: false },
  { rank: 5, name: "Bravo Batch", gold: 4, silver: 12, isYou: false },
  { rank: 6, name: "Echo Group", gold: 2, silver: 15, isYou: false },
];

const Leaderboard: React.FC<LeaderboardProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="p-4 flex items-center justify-between border-b border-slate-800">
        <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <h1 className="font-black text-lg uppercase tracking-widest">Global Ranking</h1>
        <div className="w-10"></div>
      </header>

      <main className="p-6 max-w-xl mx-auto">
        <div className="text-center mb-10 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-sky-500/20 blur-[100px] rounded-full"></div>
          <div className="text-6xl mb-2 drop-shadow-lg animate-bounce">👑</div>
          <h2 className="text-4xl font-black italic tracking-tighter">LEADERBOARD</h2>
          <p className="text-slate-400 font-bold uppercase text-xs tracking-[0.3em] mt-1">Real-time Performance</p>
        </div>

        <div className="space-y-3">
          {MOCK_RANKINGS.map((entry) => (
            <div 
              key={entry.rank}
              className={`flex items-center gap-4 p-5 rounded-[2rem] border-2 transition-all ${
                entry.isYou ? 'bg-sky-600 border-sky-400 shadow-xl shadow-sky-900/40 scale-[1.02]' : 'bg-slate-800/50 border-slate-700'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-lg ${
                entry.rank === 1 ? 'bg-yellow-400 text-yellow-900' : 
                entry.rank === 2 ? 'bg-slate-300 text-slate-800' : 
                entry.rank === 3 ? 'bg-orange-400 text-orange-900' : 'bg-slate-700 text-slate-400'
              }`}>
                {entry.rank}
              </div>
              
              <div className="flex-1">
                <p className="font-black text-lg tracking-tight">
                  {entry.name} {entry.isYou && "(YOU)"}
                </p>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-black text-slate-400 uppercase">G</span>
                  <span className="font-black text-yellow-400">{entry.gold}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-black text-slate-400 uppercase">S</span>
                  <span className="font-black text-slate-300">{entry.silver}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Leaderboard;
