import { useState } from 'react';
import styled from 'styled-components';

// let number = 0;
const Counter = () => {
  const [number, setNumber] = useState(2);
  // const [displayNubmer, setDisplayNumber] = useState(0);
  const onClickEvent = () => {
    for (let i = 0; i < number; i++) {
      console.log('cal', i);
      setNumber((prev) => prev + 1);
    }
  };
  return (
    <Style>
      <h1>{number}</h1>
      <button onClick={onClickEvent}>add number</button>
    </Style>
  );
};

const Style = styled.div``;

export default Counter;
