import React from "react";
import styled from "styled-components";

import Square from "../components/Square";
import FeaturedSquare from "../sections/FeaturedSquare";
import FeaturedNews from "../sections/FeaturedNews";

const StyledHomeNews = styled.div`
  display: flex;
  justify-content: center;
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
