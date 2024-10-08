'use client';

import { useState, useEffect } from 'react';
import { addInterestedPerson, getInterestedCount } from '../actions';
import { Turret_Road } from 'next/font/google';
import styles from './InterestedCard.module.css';

const turretRoad = Turret_Road({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const InterestedCard: React.FC = () => {
  const [interestedCount, setInterestedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchInterestedCount();
  }, []);

  const fetchInterestedCount = async () => {
    try {
      const count = await getInterestedCount();
      setInterestedCount(count);
    } catch (error) {
      console.error('Error fetching interested count:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderWavyLoading = () => {
    return (
      <span className={styles.wavyText}>
        {'Loading...'.split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </span>
    );
  };

  return (
    <div className="bg-white bg-opacity-30 p-8 rounded-lg text-center">
      <h2
        className={`${turretRoad.className} text-[60px] font-bold text-black mb-4 date-glow`}
      >
        GAME #2
      </h2>
      <p
        className={`${turretRoad.className} text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-black mb-6 date-glow`}
      >
        Find 140 Explorers to take part in the games!
      </p>
      <p
        className={`${turretRoad.className} text-[32px] text-black mb-6 date-glow`}
      >
        {isLoading ? renderWavyLoading() : `${interestedCount} / 140`}
      </p>
      <a
        href="https://tally.so/r/w5GKoo"
        target="_blank"
        rel="noopener noreferrer"
        className={`
            ${turretRoad.className} text-[24px] font-bold
            bg-[#E92EFB] text-white
            px-6 py-2 rounded-full
            hover:bg-opacity-80 transition-all duration-300
            date-glow text-shadow inline-block
          `}
      >
        Sign up
      </a>
    </div>
  );
};

export default InterestedCard;
