import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const StyledInnerPageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 1rem;

  ${respond(
    "laptop",
    css`
      gap: 2rem;
    `
  )}

  h1 {
    color: var(--color-secondary);
    font-size: 4rem;
    text-transform: capitalize;
    min-width: max-content;

    ${respond(
      "laptop",
      css`
        font-size: 3.5rem;
      `
    )}
  }

  .rectangle {
    display: inline-block;
    width: 100%;
    height: 2.5rem;
    background-color: var(--color-secondary);

    ${respond(
      "laptop",
      css`
        height: 2rem;
      `
    )}
  }
`;

const InnerPageHeader = ({ children }) => {
  return (
    <StyledInnerPageHeader className="demibold">
      <h1>{children}</h1>
      <div className="rectangle"></div>
    </StyledInnerPageHeader>
  );
};

export default InnerPageHeader;
