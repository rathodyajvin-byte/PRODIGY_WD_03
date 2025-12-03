import React from 'react';
import TicTacToe from './components/TicTacToe';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      
      {/* Ambient Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[20%] w-[30%] h-[30%] rounded-full bg-cyan-900/10 blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[20%] w-[30%] h-[30%] rounded-full bg-fuchsia-900/10 blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-[40%] left-[10%] w-[20%] h-[20%] rounded-full bg-indigo-900/10 blur-[80px]"></div>
      </div>

      <div className="relative z-10 w-full">
        <header className="mb-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 mb-2 drop-shadow-lg">
                NEON TACTICS
            </h1>
            <p className="text-slate-500 text-xs tracking-[0.2em] uppercase">Unbeatable AI Edition</p>
        </header>

        <TicTacToe />
        
        <footer className="mt-8 text-center text-slate-600 text-sm opacity-60">
            <p>Built with React & Tailwind</p>
        </footer>
      </div>
    </div>
  );
};

export default App;