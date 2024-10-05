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
      <h1
        className={`${monoton.className} text-[150px] leading-none text-center text-[#FFFFFF] mb-6 title-glow text-with-blur`}
      >
        <span className="block">Metta</span>
        <span className="block">Games</span>
      </h1>
      <span
        className={`${turretRoad.className} text-[60px] text-[#FFFFFF] mt-4 date-glow mb-20 text-with-blur`}
      >
        21.-25.11.2024
      </span>
      <span
        className={`${turretRoad.className} text-black text-[60px] font-bold date-glow`}
      >
        12 / 140 SPOTS AVAILABLE
      </span>
    </main>
  );
}
