import styles from '../styles/Home.module.scss';
import { range } from '../helpers';
import Title from './Title';
import SoundcloudIcon from './SoundcloudIcon'
import TravelBack from './TrabelBack';

const { stars, stars2, stars3, main, sphere, glitch } = styles;

const getRings = () => range(0, 36).map(index => <div key={index} className={`ring#${index}`} />)

const HomeRecharging = () => (
  <>
  <div className={stars}/>
      <div className={stars2} />
  
      <main className={main}>
        <Title />
        <div className={sphere}>
          {getRings()}
        </div>
        <h2 className={glitch} data-text="recharging">recharging</h2>
        <TravelBack />
        {/* <iframe id='soundcloud-playlist' width="80%" height="350" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1356370978&color=%23440bd4&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false" /> */}
      </main>
  </>
)

export default HomeRecharging;