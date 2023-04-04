import { useEffect, useState } from 'react';
import Loader from './Loader';
import styles from '../styles/Counter.module.scss';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [paid, setPaid] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/counter');
      const data = await res.json();
      setCount(data.registered);
      setPaid(data.paid);
      setLoading(false);
    };
    fetchData();
  }, []);
  const pending = count - paid;
  const seatsLeft = 152 - count;

  return (
    <div className={`${styles.counter} ${loading ? styles.extraMargin: ''}`}>
      {
        loading ? 
          <Loader /> : 
          <div className={styles.box}>
            <p>{paid} seats booked</p>
            <p>{pending} seats reserved (payment pending)</p>
            <p>{seatsLeft} seats available</p>
          </div>
      }
    </div>
  )
}