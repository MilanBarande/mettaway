import type { NextPage } from 'next';
import Head from 'next/head';
import HomeDates from '../components/HomeDates';
import HomeRecharging from '../components/HomeRecharging';

const isRecharging = false;

const Home: NextPage = () => 
  (
    <>
      <Head>
        <title>Mettaway</title>
        <meta name="description" content="Official Mettaway festival website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio autoPlay>
        <source src="/xaxoeira.mp3" type="audio/mpeg"/>
      </audio>
      <HomeDates />
    </>
  )


export default Home
