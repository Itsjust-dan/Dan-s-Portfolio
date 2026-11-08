import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  isDark: boolean;
}

export const BackToTop: React.FC<BackToTopProps> = ({ isDark }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`fixed bottom-6 right-6 z-40 group p-3 rounded-full border backdrop-blur-md transition-all duration-300 focus:outline-none ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      } ${
        isDark
          ? 'bg-neutral-900/90 text-neutral-300 border-neutral-800 hover:bg-emerald-500 hover:text-neutral-950 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25'
          : 'bg-white/95 text-neutral-800 border-neutral-300 hover:bg-emerald-500 hover:text-neutral-950 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/25'
      } hover:scale-110 active:scale-95`}
    >
      <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
};
