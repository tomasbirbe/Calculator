import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Screen = styled.div`
  width:100%;
  height:20%;
  display:flex;
  flex-flow:nowrap row-reverse;
  justify-content:right;
  align-items:center;
  padding:20px;
  background:#2D2424;
  color:white;
`;

const Display = ({ display = 0 }) => (
  <Screen>{display}</Screen>
);

Display.propTypes = {
  display: PropTypes.string.isRequired,
};

export default Display;
