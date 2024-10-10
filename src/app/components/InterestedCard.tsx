import { Turret_Road } from 'next/font/google';

const turretRoad = Turret_Road({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

interface InterestedCardProps {
  interestedCount: number;
}

const InterestedCard: React.FC<InterestedCardProps> = ({ interestedCount }) => {
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
        className={`${turretRoad.className} text-[32px] text-black mb-6 date-glow min-h-[185px] min-w-[836px]`}
      >
        {interestedCount >= 140
          ? 'Success! 140 explorers are ready to join the games.'
          : `${interestedCount} / 140`}
      </p>
      {interestedCount < 140 && (
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
      )}
    </div>
  );
};

export default InterestedCard;
