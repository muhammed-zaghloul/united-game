
import React, { useState, useEffect } from 'react';
import RubricModal from './RubricModal';
import { TeamState, ProfileData } from '../types';

interface ProfileEvaluationProps {
  team: TeamState;
  profile: ProfileData;
  onUpdateCoins: (profileId: string, gold: number, silver: number) => void;
  onBack: () => void;
}

const ProfileEvaluation: React.FC<ProfileEvaluationProps> = ({ team, profile, onUpdateCoins, onBack }) => {
  const [isRubricOpen, setIsRubricOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 mins per evaluation
  const [evaluations, setEvaluations] = useState<Record<string, number | null>>({
    knowledge: null,
    skills: null,
    attitude: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resultMessage, setResultMessage] = useState<{ text: string, type: 'success' | 'partial' | 'fail' } | null>(null);
  
  const currentProfile = profile;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelect = (field: string, value: number) => {
    if (isSubmitted) return;
    setEvaluations(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    if (evaluations.knowledge === null || evaluations.skills === null || evaluations.attitude === null) {
      alert("Complete the evaluation for all fields first.");
      return;
    }

    const k = evaluations.knowledge;
    const s = evaluations.skills;
    const a = evaluations.attitude;

    const kCorrect = k === currentProfile.correctAnswers.knowledge;
    const sCorrect = s === currentProfile.correctAnswers.skills;
    const aCorrect = a === currentProfile.correctAnswers.attitude;

    const correctCount = [kCorrect, sCorrect, aCorrect].filter(Boolean).length;

    let newGold = 0;
    let newSilver = 0;

    if (correctCount === 3) {
      newGold = 1;
      setResultMessage({ text: "Perfect Score! You've earned a Gold Coin.", type: 'success' });
    } else if (correctCount >= 1) {
      newSilver = 1;
      setResultMessage({ text: `Good job! You got ${correctCount}/3 right and earned a Silver Coin.`, type: 'partial' });
    } else {
      setResultMessage({ text: "Evaluation incorrect. No coins awarded this time.", type: 'fail' });
    }

    onUpdateCoins(currentProfile.id, newGold, newSilver);
    setIsSubmitted(true);
    
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 100);
  };

  const getButtonClass = (field: string, score: number) => {
    const userChoice = evaluations[field];
    const correctChoice = (currentProfile.correctAnswers as any)[field];
    
    if (isSubmitted) {
      const isCorrect = score === correctChoice;
      const isUserChoice = userChoice === score;

      if (isCorrect) {
        return "bg-green-100 border-2 border-dashed border-green-600 text-green-700 font-black scale-105 shadow-md ring-2 ring-green-50";
      }
      if (isUserChoice && !isCorrect) {
        return "bg-red-500 border-2 border-red-700 text-white font-black";
      }
      return "bg-slate-50 text-slate-300 border border-slate-100 cursor-not-allowed opacity-40";
    }

    if (userChoice === score) {
      return "bg-sky-600 text-white border-sky-700 shadow-lg transform scale-110 font-black ring-4 ring-sky-50";
    }
    return "bg-white border border-slate-200 text-slate-600 hover:border-sky-300 hover:bg-sky-50 font-bold transition-all";
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col pb-24 overflow-x-hidden selection:bg-sky-100">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b shadow-sm p-4 flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full text-slate-600 transition-all active:scale-90">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button 
            onClick={() => setIsRubricOpen(true)}
            className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition-all shadow-md active:scale-95 text-[10px] font-black uppercase tracking-tighter"
          >
            VIEW RUBRIC
          </button>
        </div>

        <div className="bg-slate-900 text-white px-4 py-2 rounded-full text-xs font-black shadow-inner flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
          {formatTime(timeLeft)}
        </div>

        <div className="flex gap-1.5">
          <div className="flex flex-col items-center bg-yellow-50 border border-yellow-200 px-3 py-1 rounded-xl shadow-sm">
            <span className="text-[9px] font-black text-yellow-600 leading-none mb-0.5">GOLD</span>
            <span className="text-sm font-black text-yellow-700 leading-none">{team.goldCoins}</span>
          </div>
          <div className="flex flex-col items-center bg-slate-50 border border-slate-200 px-3 py-1 rounded-xl shadow-sm">
            <span className="text-[9px] font-black text-slate-400 leading-none mb-0.5">SILVER</span>
            <span className="text-sm font-black text-slate-700 leading-none">{team.silverCoins}</span>
          </div>
        </div>
      </header>

      <main className="p-4 md:p-8 max-w-xl mx-auto w-full flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="relative group">
          <div className="bg-slate-800 text-white px-8 py-3.5 rounded-t-[2rem] font-black text-center text-xl shadow-xl relative z-10 border-b border-slate-700">
            {currentProfile.name}
          </div>
          <div className="bg-white p-8 rounded-b-[2.5rem] shadow-2xl border-x border-b border-slate-200 relative -mt-1">
            <div className="flex justify-center mb-8 relative">
              <div className="absolute inset-0 bg-sky-400/10 blur-3xl rounded-full scale-50"></div>
              <div className="relative w-48 h-48 rounded-full border-[12px] border-white shadow-2xl overflow-hidden ring-1 ring-slate-100 group-hover:scale-105 transition-transform duration-500">
                <img 
                  src={currentProfile.avatar} 
                  alt={currentProfile.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'img/default-avatar.png';
                  }}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-slate-50/50 p-3 rounded-2xl text-center border border-slate-100 shadow-sm">
                <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest mb-1">Position</p>
                <p className="text-xs font-black text-slate-800">{currentProfile.job}</p>
              </div>
              <div className="bg-slate-50/50 p-3 rounded-2xl text-center border border-slate-100 shadow-sm">
                <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest mb-1">Age</p>
                <p className="text-xs font-black text-slate-800">{currentProfile.age}</p>
              </div>
              <div className="bg-slate-50/50 p-3 rounded-2xl text-center border border-slate-100 shadow-sm">
                <p className="text-[10px] uppercase text-slate-400 font-black tracking-widest mb-1">Exp.</p>
                <p className="text-xs font-black text-slate-800">{currentProfile.experience}</p>
              </div>
            </div>

            <div className="space-y-4 bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-inner">
              {currentProfile.traits.map((trait, idx) => (
                <div key={idx} className="flex gap-4 text-slate-700 items-start leading-relaxed text-sm">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0 shadow-sm shadow-sky-300"></div>
                  <span className="font-medium text-slate-600">{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8 bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 relative overflow-hidden">
          <div className="text-center relative z-10">
            <h3 className="font-black text-slate-800 uppercase tracking-widest text-lg">Evaluation Scale</h3>
            <div className="h-1.5 w-16 bg-gradient-to-r from-sky-400 to-indigo-400 mx-auto rounded-full mt-2"></div>
          </div>
          
          {['knowledge', 'skills', 'attitude'].map((category) => (
            <div key={category} className="space-y-4 relative z-10">
              <label className="block text-[11px] font-black text-slate-400 uppercase tracking-[0.25em] text-center">
                {category === 'knowledge' ? 'Knowledge Base' : category === 'skills' ? 'Skills Competency' : 'General Attitude'}
              </label>
              <div className="flex justify-between gap-2.5">
                {[1, 2, 3, 4, 5].map((score) => (
                  <button
                    key={score}
                    disabled={isSubmitted}
                    onClick={() => handleSelect(category, score)}
                    className={`flex-1 h-14 rounded-2xl flex items-center justify-center text-xl transition-all duration-300 active:scale-90 ${getButtonClass(category, score)}`}
                  >
                    {score}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-4 relative z-10">
            {!isSubmitted ? (
              <button 
                onClick={handleSubmit}
                className="w-full py-5 rounded-[2rem] font-black text-white shadow-xl transition-all active:scale-95 text-lg uppercase tracking-widest bg-red-600 hover:bg-red-700 hover:shadow-red-200 ring-4 ring-white"
              >
                SUBMIT SCORES
              </button>
            ) : (
              <button 
                onClick={onBack}
                className="w-full py-5 rounded-[2rem] font-black text-white shadow-xl transition-all active:scale-95 text-lg uppercase tracking-widest bg-sky-600 hover:bg-sky-700 hover:shadow-sky-200 ring-4 ring-white flex items-center justify-center gap-4 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <span>BACK TO LIST</span>
              </button>
            )}
          </div>
        </div>

        {resultMessage && (
          <div className={`p-10 rounded-[2.5rem] border-4 font-black text-center animate-in zoom-in slide-in-from-bottom-12 duration-700 shadow-2xl relative overflow-hidden ${
            resultMessage.type === 'success' ? 'bg-green-50 border-green-500 text-green-700' :
            resultMessage.type === 'partial' ? 'bg-yellow-50 border-yellow-500 text-yellow-700' :
            'bg-red-50 border-red-500 text-red-700'
          }`}>
            <div className="text-7xl mb-6 drop-shadow-xl animate-bounce">
              {resultMessage.type === 'success' ? '🏆' : resultMessage.type === 'partial' ? '🥈' : '💡'}
            </div>
            <h4 className="text-3xl mb-3 tracking-tight uppercase">
              {resultMessage.type === 'success' ? 'GOLD EARNED!' : resultMessage.type === 'partial' ? 'SILVER EARNED!' : 'RESULT'}
            </h4>
            <p className="text-lg font-bold opacity-75 max-w-[280px] mx-auto leading-snug">
              {resultMessage.text}
            </p>
          </div>
        )}
      </main>

      <RubricModal isOpen={isRubricOpen} onClose={() => setIsRubricOpen(false)} />
    </div>
  );
};

export default ProfileEvaluation;
