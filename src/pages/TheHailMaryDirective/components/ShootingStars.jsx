import { useState, useEffect } from 'react';
import './ShootingStars.css';

export default function ShootingStars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate them only on the client to avoid SSR hydration mismatches if we ever use Next.js, 
    // and also to keep the randomness stable per mount.
    const generatedStars = Array.from({ length: 15 }, (_, index) => ({
      id: index,
      top: `${Math.random() * 50}vh`,
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 15}s`,
      animationDuration: `${12 + Math.random() * 8}s`,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="shooting-stars-container">
      {stars.map((star) => (
        <div 
          key={star.id} 
          className="shooting-star" 
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration
          }}
        />
      ))}
    </div>
  );
}
