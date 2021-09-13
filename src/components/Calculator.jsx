import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { DisplayContext } from './context/DisplayContext';
import Display from './Display';
import Keypad from './Keypad';
import { InputDisplayContext } from './context/InputRefContext';

const Container = styled.div`
  height: 100%;
  `;

const Calculator = () => {
  // Se declara el estado para mostrar en pantalla los resultados
  const [display, setDisplay] = useState('0');

  // inputDisplay es una referencia al input en donde tipeas los numeros.
  const inputDisplay = useRef();

  return (
    <Container>
      {/* Context para el display */}
      <DisplayContext.Provider value={{ display, setDisplay }}>
        {/* Context para la referencia del input */}
        <InputDisplayContext.Provider value={inputDisplay}>
          <Display />
          {/* Keypad utiliza React.memo ya que se renderizaba mas veces de lo necesario */}
          <Keypad />
        </InputDisplayContext.Provider>
      </DisplayContext.Provider>
    </Container>
  );
};

export default Calculator;
