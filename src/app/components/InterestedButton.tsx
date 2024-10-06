'use client';

import { useState, useEffect } from 'react';
import { addInterestedPerson } from '../actions';
import { Turret_Road } from 'next/font/google';

const turretRoad = Turret_Road({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const InterestedButton: React.FC = () => {
  const [isInterested, setIsInterested] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedInterest = localStorage.getItem('isInterested');
    if (storedInterest === 'true') {
      setIsInterested(true);
    }
  }, []);

  const handleClick = async () => {
    if (isInterested || isLoading) return;

    setIsLoading(true);
    try {
      const result = await addInterestedPerson();
      if (result.success) {
        setIsInterested(true);
        localStorage.setItem('isInterested', 'true');
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
    <span
      onClick={handleClick}
      className={`
        ${turretRoad.className}
        text-[20px] sm:text-[20px] md:text-[30px] lg:text-[40px]
        text-[#FFFFFF] cursor-pointer
        transition-all duration-300
        hover:no-underline
        interested-button-glow
        ${isInterested || isLoading ? 'opacity-50 cursor-not-allowed' : ''}
      `}
    >
      {isLoading
        ? 'Processing...'
        : isInterested
          ? 'Thank you for your interest! You will hear from us soon.'
          : 'I want to attend the Metta Games'}
    </span>
  );
};

export default InterestedButton;
