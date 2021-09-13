import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { DisplayContext } from './DisplayContext';
import Display from './Display';
import Keypad from './Keypad';
import { InputDisplayContext } from './InputRefContext';

const Container = styled.div`
  height: 100%;
  `;

const Calculator = () => {
  // Se declara el estado para guardar un resultado
  // eslint-disable-next-line no-unused-vars
  const [history, setHistory] = useState('0');

  // Se declara el estado para mostrar en pantalla los resultados
  const [display, setDisplay] = useState('0');

  const inputDisplay = useRef();

  return (
    <Container>
      <DisplayContext.Provider value={{ display, setDisplay }}>
        <InputDisplayContext.Provider value={inputDisplay}>
          <Display />
          <Keypad setHistory={setHistory} />
        </InputDisplayContext.Provider>
      </DisplayContext.Provider>
    </Container>
  );
};

export default Calculator;
