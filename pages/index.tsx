import type { NextPage } from 'next';
import Head from 'next/head';
import HomeDates from '../components/HomeDates';
import { Client } from "@notionhq/client";

type Props = {
  registered: number;
  paid: number;
}

const Home: NextPage<Props> = ({
  registered,
  paid,
}) =>
  (
    <>
      <Head>
        <title>Mettaway</title>
        <meta name="description" content="Official Mettaway festival website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeDates registered={registered} paid={paid} />
    </>
  )

const API_KEY = process.env.NOTION_API_KEY as string;

const notion = new Client({ auth: API_KEY }); 

const databaseUrlOrId = "1b3c3237691d4b25a8139b089ee98daa"; // Signups #4

async function getDatabaseData() {
  try {
    const response = await notion.databases.query({
      database_id: databaseUrlOrId,
      // filter: {
      //   or: [
      //     {
      //       property: 'Participant',
      //       title: {
      //         is_not_empty: true,
      //       },
      //     },
      //   ],
      // },
    });
    const registered = response?.results?.length;
    const paid = response?.results?.filter((item) => (item as any)?.properties['Paid']?.checkbox)?.length
    return {
      registered,
      paid,
    };
  } catch (error) {
    console.error('Error retrieving database', error);
  }
}

export async function getServerSideProps() {
  const data = await getDatabaseData();
  return {
    props: {
      registered: data?.registered ?? 0,
      paid: data?.paid ?? 0,
    }
  }
}

export default Home
