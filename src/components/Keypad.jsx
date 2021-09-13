import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Key from './Key';
import FnKey from './FnKey';
import { DisplayContext } from './DisplayContext';
import { InputDisplayContext } from './InputRefContext';

const keys = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
const operators = ['/', '*', '-', '+'];

const Layout = styled.div`
  width:100%;
  height:80%;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  grid-template-rows:repeat(4,1fr);
  grid-template-areas:
    "numbers numbers numbers operators"
    "numbers numbers numbers operators"
    "numbers numbers numbers operators" 
    "numbers numbers numbers operators";
`;

const Numbers = styled.div`
  grid-area:numbers;
  background:#5C3D2E;
  display:grid;
  color:white;
  grid-template:repeat(4,1fr) / repeat(3,1fr);
  `;

const Operators = styled.div`
  grid-area:operators;
  background:#E0C097;
  display:flex;
  color:black;
  flex-flow:wrap row;    
  `;

const Keypad = ({ setHistory }) => {
  const { display, setDisplay } = useContext(DisplayContext);
  const inputDisplayRef = useContext(InputDisplayContext);

  const clearDisplay = () => function () {
    setDisplay('0');
    inputDisplayRef.current.focus();
  };

  const calculate = () => function () {
    try {
      /*
          MDN recomienda utilizar el constructor Function y pasarle una
          funcion como string y ejecutarla.
          (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval#never_use_eval!)
          Tanto eval como Function son peligrosos al momento de utilizarlos

          Se puede utilizar Function descomentando linea 54 y comentando linea 56.

          Se va a utilizar eval() respetando la consigna.
          */
      // setDisplay(Function(`return ${display}`)().toString());
      // setDisplay('0');
      setDisplay(eval(display).toString());
      inputDisplayRef.current.focus();
    } catch (error) {
      setDisplay('0');
      inputDisplayRef.current.focus();
    }
  };

  const saveInHistory = () => function () {
    if (display.length) {
      setHistory(eval(display).toString());
      localStorage.setItem('history', display);
    }
    inputDisplayRef.current.focus();
  };

  const showHistory = () => function () {
    setDisplay(localStorage.getItem('history'));
    inputDisplayRef.current.focus();
  };

  return (
    <Layout>
      <Numbers>
        {
          keys.map((element, index) => <Key key={index} content={element} />)
        }
        <FnKey content="=" behavior={calculate} />
      </Numbers>
      <Operators>

        {/*
          FnKey representa a todos los botones que no escriben en la pantalla
          y deben realizar alguna funcion especifica.
        */}
        <FnKey content="SAVE" behavior={saveInHistory} width="50%" />
        <FnKey content="SHOW" behavior={showHistory} width="50%" />
        <FnKey content="C" behavior={clearDisplay} />
        {
          operators.map((element, index) => <Key key={index} content={element} />)
        }
      </Operators>
    </Layout>
  );
};

Keypad.propTypes = {
  setHistory: PropTypes.func.isRequired,
};

export default Keypad;
