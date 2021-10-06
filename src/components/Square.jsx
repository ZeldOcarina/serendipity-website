import React, { useEffect, useRef } from "react";
import styled, { css } from "styled-components";

const StyledSquare = styled.div`
  position: relative;
  width: 50%;
  padding: 5%;
  box-sizing: border-box;
  ${(props) => {
    return (
      props.backgroundColor &&
      css`
        background-color: ${props.backgroundColor};
      `
    );
  }};
`;

const Square = (props) => {
  const squareRef = useRef(null);

  useEffect(() => {
    const currentWidth = squareRef.current.offsetWidth;
    squareRef.current.style.height = `${currentWidth}px`;
  }, []);

  return (
    <StyledSquare ref={squareRef} backgroundColor={props.backgroundColor}>
      {props.children}
    </StyledSquare>
  );
};

export default Square;
