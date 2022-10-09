import { useEffect, useState } from 'react';
import styled from 'styled-components';
import styles from '../styles/GlowingDots.module.scss';

const COLORS = [
  '134,255,0',
  '255,214,0',
  '0,226,255',
  '254,32,120',
  '68,10,213',
  '233,46,251',
]

const Dot = styled.span<{ i: number, randomNumber: number }>`
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
    border-radius: 50%;
    background: ${props => `rgba(${COLORS[props.randomNumber - props.i]},1)`};
    box-shadow: ${props => `
              0 0 20px rgba(${COLORS[props.randomNumber - props.i]},1),
              0 0 40px rgba(${COLORS[props.randomNumber - props.i]},1),
              0 0 60px rgba(${COLORS[props.randomNumber - props.i]},1),
              0 0 80px rgba(${COLORS[props.randomNumber - props.i]},0.1);
    `}
  }
`

export default function GlowingDots() {
  const [randomNumber, setRandomNumber] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.floor(Math.random() * 6) + 1)
    }, 2000)
    return () => clearInterval(interval)
  })
  
  return (
    <div className={styles.glowingContainer}>
        <div className={styles.glowing}>
          <Dot i={1} randomNumber={randomNumber}  className={styles.dot} />
          <Dot i={2} randomNumber={randomNumber}  className={styles.dot} />
          <Dot i={3} randomNumber={randomNumber}  className={styles.dot} />
        </div>
        <div className={styles.glowing}>
          <Dot i={2} randomNumber={randomNumber}  className={styles.dot} />
          <Dot i={3} randomNumber={randomNumber}  className={styles.dot} />
          <Dot i={1} randomNumber={randomNumber}  className={styles.dot} />
        </div>
        <div className={styles.glowing}>
          <Dot i={1} randomNumber={randomNumber}  className={styles.dot} />
          <Dot i={2} randomNumber={randomNumber}  className={styles.dot} />
          <Dot i={3} randomNumber={randomNumber}  className={styles.dot} />
        </div>
        <div className={styles.glowing}>
          <Dot i={3} randomNumber={randomNumber}  className={styles.dot} />
          <Dot i={1} randomNumber={randomNumber}  className={styles.dot} />
          <Dot i={2} randomNumber={randomNumber}  className={styles.dot} />
        </div> 
      </div>
  )
}