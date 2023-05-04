import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const StyledHomeTeamMember = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;

  .circle-name {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${({ circleWidth }) =>
      css`
        ${circleWidth}rem
      `};
    height: ${({ circleWidth }) =>
      css`
        ${circleWidth}rem
      `};
    border-radius: 50%;
    margin-bottom: 1.5rem;
    gap: 0.7rem;

    ${(props) => {
      return css`
        color: ${props.textColor};
        background-color: ${props.backgroundColor};
      `;
    }}
  }

  .name {
    font-family: var(--new-font);
    font-weight: 400;
    font-size: 2rem;
  }

  .post {
    text-align: center;
    text-transform: uppercase;
    line-height: 1;
  }

  .email,
  .post {
    font-size: 1.6rem;
  }

  &:not(:last-child) {
    ${respond(
      "phone-port",
      css`
        margin-bottom: 3rem;
      `
    )}
  }
`;

const HomeTeamMember = ({ backgroundColor, textColor, email, name, post, circleWidth }) => {
  return (
    <StyledHomeTeamMember textColor={textColor} backgroundColor={backgroundColor} circleWidth={circleWidth}>
      <div className="circle-name">
        <span className="name">{name}</span>
        <span className="post">{post}</span>
      </div>
      <span className="email">
        <a href={`mailto:${email}`}>{email}</a>
      </span>
    </StyledHomeTeamMember>
  );
};

export default HomeTeamMember;
