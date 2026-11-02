import React, { useState, useEffect } from 'react';
import { Shield, Lock } from 'lucide-react';

interface CyberLoadingScreenProps {
  onComplete: () => void;
}

export const CyberLoadingScreen: React.FC<CyberLoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState<number>(0);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {
    // Smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 9) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          onComplete();
        }, 400); // Wait for fade-out animation
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070707] text-white transition-opacity duration-400 overflow-hidden ${
        isFadingOut ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-[350px] h-[350px] bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Centered Content: Icon & Progress Bar Only */}
      <div className="relative z-10 flex flex-col items-center max-w-xs w-full px-6 space-y-10">
        {/* Animated Cyber Shield Icon Core */}
        <div className="relative flex items-center justify-center">
          {/* Outer rotating pulse rings */}
          <div className="absolute w-24 h-24 rounded-full border border-emerald-500/20 animate-ping opacity-25" />
          <div className="absolute w-32 h-32 rounded-full border border-cyan-500/20 animate-pulse" />
          <div className="absolute w-40 h-40 rounded-full border border-dashed border-emerald-500/15 animate-[spin_10s_linear_infinite]" />

          {/* Central Shield Container */}
          <div className="relative w-20 h-20 rounded-2xl bg-neutral-900/90 border border-emerald-500/40 shadow-2xl shadow-emerald-500/30 flex items-center justify-center backdrop-blur-md">
            {/* Corner cyber ticks */}
            <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-emerald-400" />
            <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-emerald-400" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-emerald-400" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-emerald-400" />

            {/* Shield Icon with glowing center */}
            <div className="relative">
              <Shield className="w-10 h-10 text-emerald-400" />
              <Lock className="w-4 h-4 text-cyan-300 absolute inset-0 m-auto mt-2.5 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Progress Bar Only */}
        <div className="w-full space-y-2">
          {/* Glowing Minimalist Track */}
          <div className="w-full h-1.5 rounded-full bg-neutral-900 border border-neutral-800/80 overflow-hidden p-0.5">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400 shadow-md shadow-emerald-500/50 transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Subtle percentage below bar */}
          <div className="text-center font-['JetBrains_Mono'] text-xs text-neutral-500 tabular-nums">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};
