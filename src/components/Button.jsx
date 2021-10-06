import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--white);
  border-radius: 5px;
  padding: 2rem 5rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

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

  function handleMouseEnter(e) {
    e.target.children[0].style.color = "var(--body-color)";
  }
  function handleMouseLeave(e) {
    e.target.children[0].style.color = "";
  }
  return (
    <StyledButton type="button" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
