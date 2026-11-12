import React from 'react';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer className={`py-8 text-center text-xs font-['JetBrains_Mono'] ${
      isDark ? 'text-neutral-500 bg-[#0a0a0a]' : 'text-neutral-400 bg-neutral-50'
    }`}>
      <p>© {new Date().getFullYear()} Dan Adejinmi</p>
    </footer>
  );
};
