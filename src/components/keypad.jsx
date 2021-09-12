/* eslint-disable react/no-array-index-key */
/* eslint-disable func-names */
/* eslint-disable max-len */
/* eslint-disable no-new-func */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Key from './key';

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
  flex-flow:nowrap column;    
  `;

const Keypad = ({ display, setDisplay }) => {
  /*
    Las siguientes funciones van a retornar una funcion anonima para que otro componente
    las pueda recibir y ejecutar.
 */

  const clearDisplay = () => function () {
    setDisplay('0');
  };

  const calculate = () => function () {
    try {
      /*
          En la siguiente linea se llama al constructor Function creando un objeto Function,
          se le pasa como argumento el cuerpo de la funcion y se ejecuta, retornando el resultado de la operacion
         */
      setDisplay(Function(`return ${display}`)().toString());
    } catch (error) {
      console.log('Operacion no permitida');
      setDisplay('0');
    }
  };

  const writeOnDisplay = (content) => function () {
    if (display[0] === '0') {
      setDisplay(content.toString());
    } else {
      setDisplay(display + content.toString());
    }
  };

  return (
    <Layout>
      <Numbers>
        {
          keys.map((element, index) => (
            <Key
              key={index}
              content={element}
              behavior={writeOnDisplay}
            />
          ))
        }
        <Key content="=" behavior={calculate} />
      </Numbers>
      <Operators>
        <Key content="C" behavior={clearDisplay} />
        {
          operators.map((element, index) => (
            <Key
              key={index}
              content={element}
              behavior={writeOnDisplay}
            />
          ))
        }
      </Operators>
    </Layout>
  );
};

Keypad.propTypes = {
  display: PropTypes.string.isRequired,
  setDisplay: PropTypes.func.isRequired,
};

export default Keypad;
