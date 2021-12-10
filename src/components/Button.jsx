import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--white);
  border-radius: 5px;
  padding: 2rem 5rem;
  transition: all 0.2s ease-in-out;
  ${(props) => {
    console.log(props.disabled);

    return props.disabled
      ? css`
          cursor: default;
        `
      : css`
          cursor: pointer;
        `;
  }}

  a {
    &:hover {
      color: var(--body-color);
    }
  }

  &:hover {
    color: var(--body-color) !important;
    border: 1px solid var(--body-color);
    background-color: var(--white);
  }
`;

const Button = (props) => {
  function handleClick(e) {
    if (!e.target.type === "button") return;
    e.target.children[0].click();
  }
  return (
    <StyledButton type="button" onClick={props.disabled ? null : handleClick} disabled={props.disabled}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
