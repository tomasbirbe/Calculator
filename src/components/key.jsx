import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width:100%;
  height:100%;
  background:transparent;
  border:none;
  color:inherit;

  &:active{
    background:rgba(0, 0, 0, 0.13);
  }
`;

const Key = ({ content, behavior }) => (
  <Button onClick={behavior(content)}>{content}</Button>
);

Key.defaultProps = {
  behavior: () => {},
};

Key.propTypes = {
  content: PropTypes.string.isRequired,
  behavior: PropTypes.func,
};

export default Key;
