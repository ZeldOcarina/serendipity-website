import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "transparent")};
  color: ${({ color }) => (color ? color : "var(--color-tertiary)")};
  text-transform: ${({ uppercase }) => (uppercase ? "uppercase" : "default")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize + "px" : "1.6rem")};
  border: 1px solid var(--white);
  border-radius: 5px;
  padding: 2rem 5rem;
  transition: all 0.2s ease-in-out;

  ${({ alternative }) =>
    alternative &&
    css`
      margin: 0 auto;
      display: block;
      margin-top: 6rem;
      border: none;
      color: var(--color-tertiary);
      font-size: 1.6rem;

      &:hover {
        border: none !important;
      }
    `}
  ${(props) => {
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
    border: ${({ hoverBorderColor }) =>
      hoverBorderColor ? "1px solid " + hoverBorderColor : "1px solid var(--body-color)"};
    background-color: ${({ hoverBackgroundColor }) => (hoverBackgroundColor ? hoverBackgroundColor : "var(--white)")};
  }
`;

const Button = (props) => {
  function handleClick(e) {
    if (!e.target.type === "button") return;
    if (!e.target.children[0]) return;
    e.target.children[0].click();
  }

  function setOnClick() {
    if (props.onClick) {
      return props.onClick;
    } else if (props.disabled) {
      return null;
    } else {
      return handleClick;
    }
  }
  return (
    <StyledButton
      type="button"
      onClick={setOnClick()}
      disabled={props.disabled}
      alternative={props.alternative}
      backgroundColor={props.backgroundColor}
      color={props.color}
      className={props.className ? props.className : ""}
      uppercase={props.uppercase}
      fontSize={props.fontSize}
      hoverBackgroundColor={props.hoverBackgroundColor}
      hoverBorderColor={props.hoverBorderColor}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
