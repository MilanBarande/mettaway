import styles from '../styles/HomeDates.module.scss';
import GlowingDots from './GlowingDots';
import Title from './Title';
import TravelBack from './TravelBack';
import Counter from './Counter';

type HomeDatesProps = {
  paid: number;
  registered: number;
}


const HomeDates = ({ paid, registered }: HomeDatesProps) => {
  return (
    <>
      {/* <GlowingDots /> */}
      {/* <GlowingDots /> */}

      <div className={styles.container}>
        <Title className={styles.title} />
        <h2 className={styles.subtitle}>
          voyage #5
        </h2>

        <h1 className={styles.yggdrasil}>YGGDRASIL</h1>
        <div className={styles.infos}>
          <p>16.-20.</p>
          <p>11.2023</p>
          <p className={styles.location}>Black Forest Region</p>
        </div>
        {/* <GlowingDots /> */}
        <a href='https://tally.so/r/3XL2KV' className={styles.link}>
          explore with us →
        </a>
        {/* <Counter paid={paid} registered={registered} /> */}
      </div>
    </>
  )
}

export default HomeDates;