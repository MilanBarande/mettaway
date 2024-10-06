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
    <div
      onClick={handleClick}
      className={`
        ${turretRoad.className}
        text-[24px] sm:text-[28px] md:text-[36px] lg:text-[48px]
        cursor-pointer
        transition-all duration-300
        mt-8 font-bold
        px-4 py-2 rounded
        text-with-blur
        ${
          isInterested || isLoading
            ? 'text-white opacity-80 cursor-not-allowed'
            : 'text-black hover:text-white interested-button-glow'
        }
      `}
    >
      {isLoading ? (
        'Processing...'
      ) : isInterested ? (
        <>
          <div>Thank you for your interest!</div>
          <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] mt-2">
            You will hear from us soon...
          </div>
        </>
      ) : (
        'I want to attend the Metta Games'
      )}
    </div>
  );
};

export default InterestedButton;
