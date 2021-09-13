import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DisplayContext } from './context/DisplayContext';
import { InputDisplayContext } from './context/InputRefContext';

const Button = styled.button`
  width:100%;
  background:transparent;
  border:none;
  color:inherit;

  &:active{
    background:rgba(0, 0, 0, 0.13);
  }
`;

const Key = ({ content }) => {
  const { display, setDisplay } = useContext(DisplayContext);
  const inputDisplayRef = useContext(InputDisplayContext);

  const writeOnDisplayWithKeypad = () => {
    console.log('Esto es un render');
    if (display[0] === '0') {
      setDisplay(content.toString());
    } else {
      setDisplay(display + content.toString());
    }
    inputDisplayRef.current.focus();
  };

  return (
    <Button onClick={writeOnDisplayWithKeypad}>{content}</Button>
  );
};

Key.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Key;
