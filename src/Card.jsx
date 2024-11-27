import Title from './Title'
import Count from './Count'
import ResetButton from './ResetButton'
import ButtonContainer from './ButtonContainer'
import { useEffect, useState } from 'react';

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 8 ? true : false;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        const newCount = count + 1;
        if (newCount > 8) {
          setCount(8);
          return;
        } else {
          setCount(newCount)
        }
    }
  }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [count])

  

  return <div className={`card ${locked ? 'card--limit' : ''}`}>
    <Title locked={locked}/>
    <Count count={count}/>
    <ResetButton setCount={setCount}/>
    <ButtonContainer locked={locked} setCount={setCount}/>
  </div>;
}