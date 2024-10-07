'use client';

import { useState, useEffect } from 'react';
import { addInterestedPerson, getInterestedCount } from '../actions';
import { Turret_Road } from 'next/font/google';

const turretRoad = Turret_Road({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const InterestedCard: React.FC = () => {
  const [isInterested, setIsInterested] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [interestedCount, setInterestedCount] = useState(0);

  useEffect(() => {
    const storedInterest = localStorage.getItem('isInterested');
    if (storedInterest === 'true') {
      setIsInterested(true);
    }
    fetchInterestedCount();
  }, []);

  const fetchInterestedCount = async () => {
    const count = await getInterestedCount();
    setInterestedCount(count);
  };

  const handleClick = async () => {
    if (isInterested || isLoading || interestedCount >= 50) return;

    setIsLoading(true);
    try {
      const result = await addInterestedPerson();
      if (result.success) {
        setIsInterested(true);
        localStorage.setItem('isInterested', 'true');
        fetchInterestedCount();
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error('Failed to register interest:', error);
    } finally {
      setIsLoading(false);
    }
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
        {interestedCount} / 140
      </p>
      {interestedCount >= 50 ? (
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
      ) : isLoading ? (
        <p
          className={`${turretRoad.className} text-[24px] text-black date-glow`}
        >
          Processing...
        </p>
      ) : isInterested ? (
        <p
          className={`${turretRoad.className} text-[24px] text-black date-glow`}
        >
          Great success!
        </p>
      ) : (
        <button
          onClick={handleClick}
          className={`
            ${turretRoad.className} text-[24px] font-bold
            bg-[#E92EFB] text-white
            px-6 py-2 rounded-full
            hover:bg-opacity-80 transition-all duration-300
            date-glow text-shadow
          `}
        >
          I join
        </button>
      )}
    </div>
  );
};

export default InterestedCard;
