import styles from '../styles/TravelBack.module.scss';
import SoundcloudIcon from './SoundcloudIcon';

const TravelBack = ({className}: {className?:string}) => (
  <div className={styles.container}>
    <a target='_blank' rel="noreferrer noopener" href='https://soundcloud.com/taylla-yamagucci/sets/mettaway-voayge-2-laser-jungle' className={`${styles.link} ${className}`}>
      <span>travel back in time</span>
      <SoundcloudIcon height={60} width={60} />
    </a>
  </div>
)

export default TravelBack;