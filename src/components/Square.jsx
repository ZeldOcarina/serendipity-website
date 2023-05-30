import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const StyledSquare = styled.div`
  position: relative;
  width: 100%;
  padding: 5%;
  box-sizing: border-box;
  aspect-ratio: 1 / 1;

  ${(props) => {
    return (
      props.smallMobileSquare &&
      respond(
        "tab-land",
        css`
          height: max-content !important;
          aspect-ratio: unset;
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
  return (
    <StyledSquare
      className={props.className || ""}
      backgroundColor={props.backgroundColor}
      smallMobileSquare={props.smallMobileSquare}
    >
      {props.children}
    </StyledSquare>
  );
};

export default Square;
