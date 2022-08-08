import styles from '../styles/HomeDates.module.scss';
import RocketIcon from './RocketIcon';
import Title from './Title';
import TravelBack from './TravelBack';

const HomeDates = () => (
  <div className={styles.container}>
    <Title className={styles.title} />
    <h2 className={styles.subtitle}>voyage #3</h2>
    <span className={styles.dates}>01-05</span>
    <div className={styles.dates}>
      <span style={{marginRight:'60px'}}>12</span>
      2022
    </div>
    <a href='https://forms.gle/3bLx5p9tfBtJwAyk8' className={styles.link}>
      explore with us
      <RocketIcon height={42} width={42} fill='#ababab' />
    </a>
    <TravelBack className={styles.soundcloudLink} />
  </div>
)

export default HomeDates;