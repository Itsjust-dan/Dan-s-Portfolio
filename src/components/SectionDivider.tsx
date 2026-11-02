import React from 'react';

interface SectionDividerProps {
  isDark?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ isDark = true }) => {
  return (
    <div className="relative w-full h-[1px] overflow-hidden my-0 select-none">
      {/* Base baseline track */}
      <div
        className={`w-full h-full ${
          isDark
            ? 'bg-gradient-to-r from-transparent via-neutral-800 to-transparent'
            : 'bg-gradient-to-r from-transparent via-neutral-200 to-transparent'
        }`}
      />

      {/* Pulsing ambient gradient line */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent animate-pulse-glow pointer-events-none`}
      />

      {/* Animated horizontal beam sliding across */}
      <div
        className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent via-emerald-400/90 to-transparent animate-beam pointer-events-none shadow-[0_0_8px_rgba(52,211,153,0.6)]"
      />
    </div>
  );
};
