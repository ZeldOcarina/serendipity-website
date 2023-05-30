import React from "react";
import styled, { css } from "styled-components";

import Square from "../components/Square";
import FeaturedSquare from "../sections/FeaturedSquare";
import FeaturedNews from "../sections/FeaturedNews";
import respond from "../styles/abstracts/mediaqueries";

import { StaticImage } from "gatsby-plugin-image";

//import AppContext from "../context/AppContext";

const StyledHomeNews = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${respond(
    "tab-port",
    css`
      display: block;
    `
  )}

  .square-top-left {
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: var(--new-font);

    .square-title {
      text-align: center;

      font-family: var(--body-font);
    }

    .square-bottom {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h3 {
        align-items: center;
        text-align: center;
        font-family: inherit;
        font-size: 4.7rem;
      }
    }
  }

  .award-winner {
    padding: 0;

    .square-title {
      text-align: center;
      font-family: var(--body-font);
      color: var(--white);
      z-index: 100;
      position: relative;
      padding-top: 5%;
    }
    .bg-image {
      position: absolute;
      background: red;
      width: 100%;
      height: 100%;
      top: 0;
    }
  }
`;

function HomeNews() {
  return (
    <StyledHomeNews>
      <Square backgroundColor="#F2CBCC">
        <div className="square-top-left">
          <h2 className="square-title">NEWS</h2>
          <div className="square-bottom">
            <h3>Women of the Movement Best Limited Series</h3>
          </div>
        </div>
      </Square>
      <Square className="award-winner" backgroundColor="var(--color-primary)" smallMobileSquare>
        <h2 className="square-title">FEATURING</h2>
        <StaticImage className="bg-image" quality={100} src="../images/award-winner.png" alt="Award Winner" />
      </Square>
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
