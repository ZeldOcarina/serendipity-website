import React, { useContext } from "react";
import styled, { css } from "styled-components";

import Square from "../components/Square";
import FeaturedSquare from "../sections/FeaturedSquare";
import FeaturedNews from "../sections/FeaturedNews";
import respond from "../styles/abstracts/mediaqueries";

import AppContext from "../context/AppContext";

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
      <Square backgroundColor="var(--color-primary)" smallMobileSquare>
        <FeaturedNews />
      </Square>
    </StyledHomeNews>
  );
}

export default HomeNews;
