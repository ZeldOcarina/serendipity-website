import React, { useEffect, useRef, useContext } from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

import AppContext from "../context/AppContext";

const StyledSquare = styled.div`
  --mobile-height: ${(props) => props.mobileHeight + "vh" || "initial"};
  position: relative;
  width: 100%;
  padding: 5%;
  box-sizing: border-box;

  ${(props) => {
    return (
      props.mobileHeight &&
      respond(
        "phone-port",
        css`
          height: var(--mobile-height);
        `
      )
    );
  }}

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
    console.log(isPhonePort);
    if (isPhonePort) return;
    const currentWidth = squareRef.current.offsetWidth;
    squareRef.current.style.height = `${currentWidth}px`;
  }, [isPhonePort]);

  return (
    <StyledSquare ref={squareRef} backgroundColor={props.backgroundColor} mobileHeight={props.mobileHeight}>
      {props.children}
    </StyledSquare>
  );
};

export default Square;
