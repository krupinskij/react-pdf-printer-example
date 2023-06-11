import { useEffect, useRef, useState } from 'react';

const sleep = async (ms: number = 0) => new Promise((resolve) => setTimeout(() => resolve(''), ms));

const TestPage = () => {
  const [num, setNum] = useState(0);
  const stopRef = useRef(false);
  useEffect(() => {
    const handle = async () => {
      let sum = 0;
      loop: for (let i = 0; i < 10000; i++) {
        await sleep(0);
        if (stopRef.current) {
          break loop;
        }
        for (let j = 0; j < 10000; j++) {
          await sleep(0);
          if (stopRef.current) {
            break loop;
          }
          setNum(i + j);
          sum = sum + sum + i;
          console.log(sum);
        }
      }
    };

    handle();
    return () => {
      console.log('stop');
      stopRef.current = true;
    };
  }, []);

  return <div>Current number is {num}</div>;
};

export default TestPage;
