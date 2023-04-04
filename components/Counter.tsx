import styles from '../styles/Counter.module.scss';

export default function Counter({registered, paid}: {registered: number, paid: number}) {
  const pending = registered - paid;
  const seatsLeft = 152 - registered;
  
  return (
    <div className={styles.counter}>
      <div className={styles.box}>
        <p>{paid} seats booked</p>
        <p>{pending} seats reserved (payment pending)</p>
        <p>{seatsLeft} seats available</p>
      </div>
    </div>
  )
}