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
  const { isiPhone5, isPhonePort } = useContext(AppContext);

  console.log("isiPhone5");
  console.log(isiPhone5);
  console.log("isPhonePort");
  console.log(isPhonePort);

  return (
    <StyledHomeNews>
      <Square mobileHeight={isiPhone5 && !isPhonePort ? 150 : 75}>
        <FeaturedSquare />
      </Square>
      <Square backgroundColor="var(--color-primary)" mobileHeight={isiPhone5 && !isPhonePort ? 100 : undefined}>
        <FeaturedNews />
      </Square>
    </StyledHomeNews>
  );
}

export default HomeNews;
