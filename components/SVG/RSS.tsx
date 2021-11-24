import React from 'react';
import styled from 'styled-components';

const RssSVG = ({ color = '#0074AA', size }) => {
  return (
    <Wrapper size={size} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M265.216 758.784c22.528 22.528 34.816 51.2 34.816 83.968 0 32.768-13.312 62.464-34.816 83.968-22.528 22.528-53.248 34.816-83.968 34.816-32.768 0-62.464-13.312-83.968-34.816C73.728 905.216 61.44 874.496 61.44 843.776c0-32.768 13.312-62.464 34.816-83.968 22.528-22.528 51.2-34.816 83.968-34.816 33.792-1.024 62.464 12.288 84.992 33.792zM61.44 367.616v172.032c111.616 0 218.112 44.032 296.96 122.88S481.28 848.896 481.28 962.56h172.032c0-163.84-66.56-312.32-174.08-419.84C373.76 436.224 225.28 369.664 61.44 367.616zM61.44 61.44v172.032c402.432 0 729.088 326.656 729.088 729.088H962.56c0-247.808-101.376-473.088-264.192-636.928C536.576 163.84 311.296 63.488 61.44 61.44z"
        fill={ color }
      />
    </Wrapper>
  );
};

const Wrapper = styled.svg`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
`;

export default RssSVG;
