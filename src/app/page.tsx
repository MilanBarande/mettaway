import { Monoton, Turret_Road } from 'next/font/google';

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
    <main className="flex flex-col items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24 min-h-screen">
      <div className="max-w-full text-center text-with-blur">
        <h1
          className={`${monoton.className} text-[40px] sm:text-[80px] md:text-[120px] lg:text-[150px] leading-none text-center text-[#FFFFFF] mb-4 sm:mb-6 title-glow`}
        >
          <span className="block">Metta</span>
          <span className="block">Games</span>
        </h1>
        <span
          className={`${turretRoad.className} text-[20px] sm:text-[30px] md:text-[45px] lg:text-[60px] text-[#FFFFFF] mt-2 sm:mt-4 date-glow mb-6 sm:mb-10 md:mb-20 block`}
        >
          21.-25.11.2024
        </span>
        <span
          className={`${turretRoad.className} text-black text-[16px] sm:text-[24px] md:text-[40px] lg:text-[60px] font-bold date-glow block`}
        >
          12 / 140 SPOTS AVAILABLE
        </span>
      </div>
    </main>
  );
}
