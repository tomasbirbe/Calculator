import React, { useContext } from 'react';
import styled from 'styled-components';
import Key from './Key';
import FnKey from './FnKey';
import { DisplayContext } from './context/DisplayContext';
import { InputDisplayContext } from './context/InputRefContext';
import { calculate } from './logic/calculate';
import { useLocalStorage } from './hooks/useLocalStorage';

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

const Keypad = () => {
  const { display, setDisplay } = useContext(DisplayContext);
  const inputDisplayRef = useContext(InputDisplayContext);
  const [history, setHistory] = useLocalStorage('0', 'history');

  const clearDisplay = () => {
    setDisplay('0');
    inputDisplayRef.current.focus();
  };

  const resolveDisplay = () => {
    setDisplay(calculate(display));
    inputDisplayRef.current.focus();
  };

  // Guardar un valor en el localStorage
  const saveInHistory = () => {
    setHistory(calculate(display));
    inputDisplayRef.current.focus();
  };

  // Traer el valor guardado del localStorage
  const showHistory = () => {
    setDisplay(history);
    inputDisplayRef.current.focus();
  };

  return (
    <Layout>
      <Numbers>
        {
          keys.map((element, index) => <Key key={index} content={element} />)
        }
        <FnKey content="=" behavior={() => resolveDisplay} />
      </Numbers>
      <Operators>
        {/*
          FnKey representa a todos los botones que no escriben en la pantalla
          y deben realizar alguna funcion especifica.
        */}
        <FnKey content="SAVE" behavior={() => saveInHistory} width="50%" />
        <FnKey content="SHOW" behavior={() => showHistory} width="50%" />
        <FnKey content="C" behavior={() => clearDisplay} />
        {
          operators.map((element, index) => <Key key={index} content={element} />)
        }
      </Operators>
    </Layout>
  );
};

export default React.memo(Keypad);
