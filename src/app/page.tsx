import { Monoton, Turret_Road } from 'next/font/google';
import InterestedCard from './components/InterestedCard';

const monoton = Monoton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const turretRoad = Turret_Road({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-4 sm:p-4 md:p-8 lg:p-12 min-h-screen">
      <div className="max-w-full text-center">
        <h1
          className={`${monoton.className} text-[60px] sm:text-[80px] md:text-[120px] lg:text-[150px] leading-none text-center text-[#FFFFFF] mb-4 sm:mb-6 title-glow text-shadow`}
        >
          <span className="block">Metta</span>
          <span className="block">Games</span>
        </h1>
        <span
          className={`${turretRoad.className} text-[30px] sm:text-[36px] md:text-[45px] lg:text-[60px] text-[#FFFFFF] mt-2 sm:mt-4 date-glow mb-4 sm:mb-6 block text-shadow`}
        >
          21.-25.11.2024
        </span>
        <InterestedCard />
      </div>
    </main>
  );
}
