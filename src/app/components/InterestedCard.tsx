'use client';

import React, { useState, useEffect } from 'react';
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
    if (isInterested || isLoading) return;

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
        className={`${turretRoad.className} text-[36px] sm:text-[48px] md:text-[54px] lg:text-[60px] font-bold text-black mb-4 date-glow`}
      >
        GAME #1
      </h2>
      <p
        className={`${turretRoad.className} text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-black mb-6 date-glow`}
      >
        Find 50 explorers to unlock the signup!
      </p>
      <p
        className={`${turretRoad.className} text-[32px] text-black mb-6 date-glow`}
      >
        {interestedCount} / 50
      </p>
      {isLoading ? (
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
