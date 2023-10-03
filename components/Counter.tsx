import styles from '../styles/Counter.module.scss';

export default function Counter({registered, paid}: {registered: number, paid: number}) {
  return (
    <div className={styles.counter}>
      <div className={styles.box}>
        <p>{registered} seats booked</p>
      </div>
    </div>
  )
}