
import React, { useState } from 'react';
import { UserRole } from '../types';

interface LoginProps {
  onLogin: (teamName: string, role: UserRole) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [teamName, setTeamName] = useState('');
  const [role, setRole] = useState<UserRole>(UserRole.PARTICIPANT);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === UserRole.ADMIN) {
      onLogin('Administrator', UserRole.ADMIN);
    } else if (teamName.trim()) {
      onLogin(teamName.trim(), UserRole.PARTICIPANT);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-sky-900 to-indigo-900">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden p-8 animate-in fade-in zoom-in duration-500">
        <div className="text-center mb-8">
          <div className="inline-block p-4 rounded-full bg-sky-100 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h1 className="text-3xl font-black text-slate-800 tracking-tight">Login Portal</h1>
          <p className="text-slate-500 mt-2">Choose your role to continue</p>
        </div>

        <div className="flex p-1 bg-slate-100 rounded-xl mb-8">
          <button 
            onClick={() => setRole(UserRole.PARTICIPANT)}
            className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${role === UserRole.PARTICIPANT ? 'bg-white shadow-sm text-sky-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Learner
          </button>
          <button 
            onClick={() => setRole(UserRole.ADMIN)}
            className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${role === UserRole.ADMIN ? 'bg-white shadow-sm text-sky-600' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Admin
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {role === UserRole.PARTICIPANT && (
            <div>
              <label htmlFor="teamName" className="block text-sm font-bold text-slate-700 mb-2">Team Name</label>
              <input
                id="teamName"
                type="text"
                required
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Enter your team name"
                className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-sky-500 focus:outline-none transition-all text-lg font-semibold"
              />
            </div>
          )}

          {role === UserRole.ADMIN && (
             <div className="bg-sky-50 p-4 rounded-xl border border-sky-100">
               <p className="text-sky-700 text-sm font-medium text-center">Admin dashboard allows you to track all team progress and unlock activities.</p>
             </div>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-sky-600 hover:bg-sky-700 text-white font-black rounded-2xl shadow-lg shadow-sky-200 transition-all transform active:scale-[0.98] text-lg uppercase tracking-wider"
          >
            {role === UserRole.ADMIN ? 'Enter Dashboard' : 'Join Session'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 font-medium tracking-widest uppercase">
            United Pharmacy • Training Excellence
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
