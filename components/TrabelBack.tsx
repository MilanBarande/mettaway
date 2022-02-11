import styles from '../styles/TravelBack.module.scss';
import SoundcloudIcon from './SoundcloudIcon';

const TravelBack = ({className}: {className?:string}) => (
  <div className={styles.container}>
    <a href='https://soundcloud.com/delucs-1/sets/mettaway' className={`${styles.link} ${className}`}>
      <span>Travel back in time</span>
      <SoundcloudIcon height={60} width={60} />
    </a>
  </div>
)

export default TravelBack;