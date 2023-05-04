import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const StyledSectionTitle = styled.h2`
  font-family: var(--body-font);
  font-weight: 400;
  text-align: center;
  font-size: 2.7rem;
  text-transform: uppercase;

  ${respond(
    "phone-port",
    css`
      font-size: 2rem;
    `
  )}
`;

const SectionTitle = (props) => {
  return <StyledSectionTitle>{props.children}</StyledSectionTitle>;
};

export default SectionTitle;
