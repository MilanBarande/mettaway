import type { NextPage } from 'next';
import Head from 'next/head';
import HomeDates from '../components/HomeDates';

const Home: NextPage = () => 
  (
    <>
      <Head>
        <title>Mettaway</title>
        <meta name="description" content="Official Mettaway festival website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeDates />
    </>
  )

export default Home
