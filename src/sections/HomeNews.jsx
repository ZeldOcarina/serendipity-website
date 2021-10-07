import React from "react";
import styled, { css } from "styled-components";

import Square from "../components/Square";
import FeaturedSquare from "../sections/FeaturedSquare";
import FeaturedNews from "../sections/FeaturedNews";
import respond from "../styles/abstracts/mediaqueries";

const StyledHomeNews = styled.div`
  display: flex;
  justify-content: center;

  ${respond(
    "tab-port",
    css`
      flex-direction: column;
    `
  )}
`;

function HomeNews() {
  return (
    <StyledHomeNews>
      <Square>
        <FeaturedSquare />
      </Square>
      <Square backgroundColor="var(--color-primary)">
        <FeaturedNews />
      </Square>
    </StyledHomeNews>
  );
}

export default HomeNews;
