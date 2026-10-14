import { useEffect, useRef } from 'react';

export default function useScrollProgress() {
  const progress = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      
      if (maxScroll <= 0) {
        progress.current = 0;
      } else {
        // Clamp between 0 and 1
        progress.current = Math.max(0, Math.min(1, window.scrollY / maxScroll));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initialize value
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
