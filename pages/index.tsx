import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import HomeRecharging from '../components/HomeRecharging';

const isRecharging = true;

const Home: NextPage = () => {
  useEffect(() => {
    window.onload = function () {
      let myiFrame = document.getElementById("soundcloud-playlist");
      let doc = myiFrame?.ownerDocument?.body?.innerHTML;
      doc = doc + '<style>.title__h2Text {color: red;}</style>';
    }
  })
  return (
    <>
      <Head>
        <title>Mettaway</title>
        <meta name="description" content="Official Mettaway festival website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isRecharging ? <HomeRecharging /> : null}    
    </>
  )
}

export default Home
