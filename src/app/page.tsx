import { Monoton, Turret_Road } from 'next/font/google';
import { Client } from '@notionhq/client';
import InterestedButton from './components/InterestedButton';

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

const dbId = '034f5c56085d4ae0a91f7cde65ab52b1';

const notion = new Client({ auth: process.env.NOTION_API_KEY });
console.log('🔥 ~~~ process.env.NOTION_API_KEY:', process.env.NOTION_API_KEY);

async function getNotionData() {
  const response = await notion.databases.query({
    database_id: dbId,
  });
  return response.results;
}

async function addInterestedPerson() {
  'use server';
  try {
    const result = await notion.pages.create({
      parent: { database_id: dbId },
      properties: {
        'First Name': {
          title: [
            {
              text: {
                content: 'Anonymous Interested',
              },
            },
          ],
        },
      },
    });
    console.log('🔥 ~~~ addInterestedPerson ~~~ result:', result);
    return { success: true };
  } catch (error) {
    console.error('Failed to add interested person:', error);
    return { success: false, error: 'Failed to register interest' };
  }
}

export default async function Home() {
  const notionData = await getNotionData();
  console.log('🔥 ~~~ Home ~~~ notionData:', notionData);

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
        <InterestedButton />
      </div>
    </main>
  );
}
