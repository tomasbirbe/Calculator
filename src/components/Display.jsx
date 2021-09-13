import React, { useContext } from 'react';
import styled from 'styled-components';
import { DisplayContext } from './DisplayContext';
import { InputDisplayContext } from './InputRefContext';

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
    if (target.value[0] === '0') {
      const stringArray = target.value.split('');
      stringArray.shift();
      setDisplay(stringArray.join(''));
    } else {
      setDisplay(target.value);
    }
  };

  const calculate = (e) => {
    e.preventDefault();
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('0');
    }
  };

  return (
    <Form onSubmit={calculate}>
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
