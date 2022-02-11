import styles from '../styles/HomeDates.module.scss';
import RocketIcon from './RocketIcon';
import Title from './Title';
import TravelBack from './TrabelBack';

const HomeDates = () => (
  <div className={styles.container}>
    <Title className={styles.title} />
    <h2 className={styles.subtitle}>Voyage #2</h2>
    <span className={styles.dates}>12-16</span>
    <span className={styles.dates}>05|22</span>
    <a href='https://forms.gle/3bLx5p9tfBtJwAyk8' className={styles.link}>
      <span>Fly with us</span>
      <RocketIcon height={42} width={42} fill='white' />
    </a>
    <TravelBack className={styles.whiteOnHover} />
  </div>
)

export default HomeDates;