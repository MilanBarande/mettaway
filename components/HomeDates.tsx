import styles from '../styles/HomeDates.module.scss';
import GlowingDots from './GlowingDots';
import Title from './Title';
import TravelBack from './TravelBack';

 
const HomeDates = () => {
  return ( 
  <>
    <GlowingDots />
    <div className={styles.container}>
      <Title className={styles.title} />
      <h2 className={styles.subtitle}>voyage #3</h2> 
      <GlowingDots />      
      <div className={styles.box}>
        <span className={styles.destination}>destination</span>
        <span className={styles.darkpalm}>D4rk P4lm</span>
        <span className={styles.dates}>01-05</span>
        <div className={styles.dates}>
          <span style={{marginRight:'30px'}}>12</span>
          2022
        </div>
        <a href='https://tally.so/r/w44MYb' className={styles.link}>
          embark →
        </a>
      </div>
      <GlowingDots />      

      <TravelBack className={styles.soundcloudLink} />
    </div>  
  </>
)}

export default HomeDates;