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
        <div className={styles.soldout}>
          <p>
            We&apos;ve reached capacity!
          </p>
          <p>
            Hello dear explorer, our spaceship only has a limited amount of seats and they&apos;ve been filled with lovely people. Usually there are some people cancelling before the event, so we&apos;d invite you to fill out the waitlist <a className={styles.waitlistlink} href="https://tally.so/r/mRol2Q">here</a>. If you have the option to sleep in a van or tent, we could still take you with us anyway. Just tick the respective boxes in the waitlist form and we&apos;ll be in touch! with love from your space friends!
          </p>
        </div>
        {/* <Counter paid={paid} registered={registered} /> */}
      </div>
    </>
  )
}

export default HomeDates;