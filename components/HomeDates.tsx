import styles from '../styles/HomeDates.module.scss';
import Title from './Title';
import TravelBack from './TravelBack';
import styled from 'styled-components';

const Dot = styled.span<{ i: number }>`
  position: absolute;
  top: calc(80px * ${props => props.i});
  left: calc(80px * ${props => props.i});
  right: calc(80px * ${props => props.i});
  bottom: calc(80px * ${props => props.i});
  
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -8px;
    width: 15px;
    height: 15px;
    background: #F00;
    border-radius: 50%;
  }
`

const HomeDates = () => {
  return (
  <>
    <div className={styles.container}>
      <Dot i={1} className={styles.dot} />
      <Dot i={2} className={styles.dot} />
      <Dot i={3} className={styles.dot} />
      <Title className={styles.title} />
      <h2 className={styles.subtitle}>voyage #3</h2>
      <div className={styles.box}>
        <span className={styles.destination}>destination</span>
        <span className={styles.darkpalm}>D4rk P4lm</span>
        <span className={styles.dates}>01-05</span>
        <div className={styles.dates}>
          <span style={{marginRight:'30px'}}>12</span>
          2022
        </div>
        <a href='https://tally.so/r/w44MYb' className={styles.link}>
          fly with us →
        </a>
      </div>
      <TravelBack className={styles.soundcloudLink} />
    </div>
  </>
)}

export default HomeDates;