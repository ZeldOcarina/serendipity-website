import React from "react";
import styled from "styled-components";

import Square from "../components/Square";
import FeaturedSquare from "../sections/FeaturedSquare";
import FeaturedNews from "../sections/FeaturedNews";

import { StaticImage } from "gatsby-plugin-image";

//import AppContext from "../context/AppContext";

const StyledHomeNews = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: 1230px) {
    display: block;
  }

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

        @media only screen and (max-width: 750px) {
          font-size: 3.5rem;
        }
        @media only screen and (max-width: 350px) {
          font-size: 3rem;
        }
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

    .bottom-content {
      position: absolute;
      z-index: 100;
      bottom: 5%;
      max-width: 90%;
      left: 5%;
      display: flex;
      flex-direction: column;
      align-items: center;

      .bottom-image {
        max-width: 50%;
      }
      .bottom-image--award {
        max-width: 75%;
      }
    }

    .bg-image {
      position: absolute;
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
      <Square className="award-winner" backgroundColor="var(--color-primary)">
        <h2 className="square-title">FEATURING</h2>
        <div className="bottom-content">
          <StaticImage className="bottom-image" src="../images/gracies.png" alt="The Gracies logo" />"
          <StaticImage className="bottom-image bottom-image--award" src="../images/award.png" alt="Award winner logo" />
          "
        </div>
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
