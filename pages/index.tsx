import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { range } from '../helpers';
import styles from '../styles/Home.module.scss';

const { stars, stars2, stars3, main, title, title__letter, sphere, glitch } = styles;

const getRings = () => range(0, 36).map(index => <div key={index} className={`ring#${index}`} />)

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

      <div className={stars}/>
      <div className={stars2} />
      <div className={stars3} />
  
      <main className={main}>
        <div className={title}>
          <span className={title__letter}>M</span>
          <span className={title__letter}>e</span>
          <span className={title__letter}>t</span>
          <span className={title__letter}>t</span>
          <span className={title__letter}>a</span>
          <span className={title__letter}>w</span>
          <span className={title__letter}>a</span>
          <span className={title__letter}>y</span>
        </div>
        <div className={sphere}>
          {getRings()}
        </div>
        <h2 className={glitch} data-text="recharging...">recharging...</h2>
        {/* <iframe id='soundcloud-playlist' width="80%" height="350" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1356370978&color=%23440bd4&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false" /> */}
      </main>
    </>
  )
}

export default Home
