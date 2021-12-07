import React, { useContext } from 'react';
import styled from 'styled-components';
import { DisplayContext } from './context/DisplayContext';
import { InputDisplayContext } from './context/InputRefContext';
import { calculate } from './logic/calculate';

const Screen = styled.input`
  width:100%;
  height:100%;
  padding:20px;
  background:#2D2424;
  color:white;
  outline:none;
  text-align:right;

  &active{
    outline:none;
  }
`;

const Form = styled.form`
  height:20%;
`;

const Display = () => {
  const { display, setDisplay } = useContext(DisplayContext);

  const inputDisplayRef = useContext(InputDisplayContext);

  const writeOnDisplayWithKeyboard = ({ target }) => {
    // El siguiente condicional es simplemente para borrar el 0 cuando se empieza a tipear
    if (target.value[0] === '0') {
      const stringArray = target.value.split('');
      stringArray.shift();
      setDisplay(stringArray.join(''));
    } else {
      setDisplay(target.value);
    }
  };

  const resolveDisplay = (e) => {
    e.preventDefault();
    setDisplay(calculate(display));
  };

  return (
    <Form onSubmit={resolveDisplay}>
      <Screen
        value={display}
        onChange={writeOnDisplayWithKeyboard}
        autoFocus
        ref={inputDisplayRef}
      />
    </Form>
  );
};

export default Display;
