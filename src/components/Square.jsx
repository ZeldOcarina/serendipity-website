import React, { useEffect, useRef, useContext } from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

import AppContext from "../context/AppContext";

const StyledSquare = styled.div`
  position: relative;
  width: 100%;
  padding: 5%;
  box-sizing: border-box;

  ${respond(
    "phone-port",
    css`
      height: 70vh !important;
    `
  )}
  ${respond(
    "iphone-8-plus",
    css`
      height: 80vh !important;
    `
  )}

  ${(props) => {
    return (
      props.smallMobileSquare &&
      respond(
        "phone-port",
        css`
          height: max-content !important;
          padding: 5rem 2rem;
        `
      )
    );
  }};

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

  const { isPhonePort } = useContext(AppContext);

  useEffect(() => {
    const currentWidth = squareRef.current.offsetWidth;
    squareRef.current.style.height = `${currentWidth}px`;
  }, [isPhonePort]);

  return (
    <StyledSquare ref={squareRef} backgroundColor={props.backgroundColor} smallMobileSquare={props.smallMobileSquare}>
      {props.children}
    </StyledSquare>
  );
};

export default Square;
