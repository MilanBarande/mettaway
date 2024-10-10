import { Turret_Road } from 'next/font/google';

const turretRoad = Turret_Road({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const SIGNUP_URL = 'https://tally.so/r/w5GKoo';
const WAITLIST_URL = 'https://tally.so/r/wQJzaG';

interface InterestedCardProps {
  interestedCount: number;
}

const InterestedCard: React.FC<InterestedCardProps> = ({ interestedCount }) => {
  const isFullyBooked = true;

  return (
    <div className="bg-white bg-opacity-30 p-8 rounded-lg text-center">
      <h2
        className={`${turretRoad.className} text-[60px] font-bold text-black mb-4 date-glow`}
      >
        {isFullyBooked ? 'SUCCESS!' : 'GAME #2'}
      </h2>
      <p
        className={`${turretRoad.className} text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-black mb-6 date-glow`}
      >
        {isFullyBooked
          ? '140 explorers are ready to join the games.'
          : 'Find 140 Explorers to take part in the games!'}
      </p>
      <p
        className={`${turretRoad.className} text-[32px] text-black mb-6 date-glow`}
      >
        {isFullyBooked
          ? 'Join the waitlist, there is still hope.'
          : `${interestedCount} / 140`}
      </p>
      <a
        href={isFullyBooked ? WAITLIST_URL : SIGNUP_URL}
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
        {isFullyBooked ? 'Waitlist' : 'Sign up'}
      </a>
    </div>
  );
};

export default InterestedCard;
