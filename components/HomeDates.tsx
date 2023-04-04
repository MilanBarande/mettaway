import styles from '../styles/HomeDates.module.scss';
import GlowingDots from './GlowingDots';
import Title from './Title';
import TravelBack from './TravelBack';
import Counter from './Counter';
 
const HomeDates = () => {
  return ( 
  <>
    <GlowingDots />
    <GlowingDots />      

    <div className={styles.container}>
      <Title className={styles.title} />
      <div className={styles.box1}>
        <h2 
        className={styles.subtitle}
        >voyage #4</h2> 
        <div className={styles.box3}>
          <span>24.05. -29.05.</span>
          <span>Oyonnax Region</span>
          <span>France</span>
        </div>
      </div>
      <Counter />
      <GlowingDots /> 
      <div  
        className={styles.box2}
      >
        <span className={styles['laser-lake']}>L4SER L4KE</span>     
      </div>
      <div className={styles.box4}>
      <TravelBack className={styles.soundcloudLink} />
        <a href='https://tally.so/r/3XL2KV' className={styles.link}>
          embark →
        </a>
      </div>
    </div>  
  </>
)}

export default HomeDates;