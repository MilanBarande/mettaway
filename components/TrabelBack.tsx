import styles from '../styles/TravelBack.module.scss';
import SoundcloudIcon from './SoundcloudIcon';

const TravelBack = () => (
  <div className={styles.container}>
    <a href='https://soundcloud.com/delucs-1/sets/mettaway' className={styles.link}>
      <span>Travel back in time</span>
      <SoundcloudIcon height={30} width={30} />
    </a>
  </div>
)

export default TravelBack;