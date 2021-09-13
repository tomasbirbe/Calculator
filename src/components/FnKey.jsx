import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  width:${({ width }) => width || '100%'};
  background:transparent;
  border:none;
  color:inherit;

  &:active{
    background:rgba(0, 0, 0, 0.13);
  }
`;

// eslint-disable-next-line object-curly-newline
const FnKey = ({ content, behavior, width }) => (
  <Button onClick={behavior()} width={width}>{content}</Button>
);

FnKey.defaultProps = {
  behavior: () => {},
  width: '100%',
};

FnKey.propTypes = {
  content: PropTypes.string.isRequired,
  behavior: PropTypes.func,
  width: PropTypes.string,
};

export default FnKey;
