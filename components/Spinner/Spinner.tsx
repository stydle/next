import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Loader } from 'react-feather';

const Spinner = ({ size = 24, color }) => {
  return (
    <Wrapper
      style={{
        width: size,
        height: size,
        '--size': size + 'px',
        color,
      }}
    >
      <Loader size={size} />
    </Wrapper>
  );
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.span`
  display: inline-block;
  color: hsl(222deg, 22%, 5%);
  opacity: 0.75;
  animation: ${spin} 1400ms linear infinite;
  transform-origin: center center;

  svg {
    display: block !important;
    height: var(--size);
  }
`;

export default Spinner;
