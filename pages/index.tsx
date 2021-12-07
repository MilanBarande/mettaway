import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Mettaway</title>
        <meta name="description" content="Official Mettaway festival website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.stars}/>
      <div className={styles.stars2} />
      <div className={styles.stars3} />
  
      <main className={styles.main}>
        <h1 className={styles.glitch} data-text="Recharging...">Recharging...</h1>
      </main>
    </>
  )
}

export default Home
