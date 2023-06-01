import { useEffect, useState } from 'react';

import styles from './App.module.css';

function App() {
  const [time, setTime] = useState(0);
  const [isRun, setIsRun] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRun) intervalId = setInterval(() => setTime((prev) => prev + 1), 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [time, isRun]);

  const hour = Math.floor(time / 360000);
  const minute = Math.floor((time % 360000) / 6000);
  const second = Math.floor((time % 6000) / 100);
  const millisecond = time % 100;

  return (
    <div className={styles.wrapper}>
      <div className={styles.stopWatch}>
        <p>
          <span className={styles.time}>
            {hour.toString().padStart(2, '0')}
          </span>
          <span>:</span>
          <span className={styles.time}>
            {minute.toString().padStart(2, '0')}
          </span>
          <span>:</span>
          <span className={styles.time}>
            {second.toString().padStart(2, '0')}
          </span>
          <span>.</span>
          <span className={styles.time}>
            {millisecond.toString().padStart(2, '0')}
          </span>
        </p>
        <button onClick={() => setIsRun((prev) => !prev)}>
          {isRun ? 'Pause' : 'Start'}
        </button>{' '}
        <button onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;
