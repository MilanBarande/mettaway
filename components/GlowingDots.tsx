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
  '255,255,255',
  '247, 92, 3',
  '252, 188, 184',
  '19, 60, 85'
]

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

export default function GlowingDots() {
  const [randomNumber, setRandomNumber] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNumber(Math.round(Math.random() *10))
    }, 1000)
    return () => clearInterval(interval)
  })
  return (
    <div className={styles.glowingContainer}>
        <div className={styles.glowing}>
          <Dot i={1} className={styles.dot} />
          <Dot i={2} className={styles.dot} />
          <Dot i={3} className={styles.dot} />
        </div>
        <div className={styles.glowing}>
          <Dot i={1} className={styles.dot} />
          <Dot i={2} className={styles.dot} />
          <Dot i={3} className={styles.dot} />
        </div>
        <div className={styles.glowing}>
          <Dot i={1} className={styles.dot} />
          <Dot i={2} className={styles.dot} />
          <Dot i={3} className={styles.dot} />
        </div>
        <div className={styles.glowing}>
          <Dot i={1} className={styles.dot} />
          <Dot i={2} className={styles.dot} />
          <Dot i={3} className={styles.dot} />
        </div> 
      </div>
  )
}