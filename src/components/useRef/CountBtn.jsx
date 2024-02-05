import { useEffect, useRef, useState } from "react";
import styles from './CountBtn.module.css';

export default function CountBtn() {

  let count = 0;
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    count += 1;
    console.log('count: ', count);
  };

  const handleClickState = () => {
    setCountState(countState + 1);
    console.log('state: ', countState);
  };

  const handleClickRef = () => {
    countRef.current = countRef.current + 1;
    console.log('Ref: ', countRef.current)
  }

  useEffect(() => {
    console.log('재렌더링 됨');
  }, [countState])

  return (
    <div className={styles.count_contanier}>
      <div>
        <button className={styles.count} type="button" onClick={handleClick}>
          일반변수 클릿 횟수({count})
        </button>
      </div>

      <div>
        <button className={styles.count_state} type="button" onClick={handleClickState}>
          State 클릿 횟수({countState})
        </button>
      </div>

      <div>
        <button className={styles.count_ref} type="button" onClick={handleClickRef}>
          Ref 클릿 횟수({countRef.current})
        </button>
      </div>
    </div>
  );
}