import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './display';
import Keypad from './keypad';

const Container = styled.div`
  height: 100%;
`;

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  return (
    <Container>
      <Display display={display} />
      <Keypad display={display} setDisplay={setDisplay} />
    </Container>
  );
};

export default Calculator;
