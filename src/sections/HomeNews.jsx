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
        font-weight: 200;

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

    h2 {
      position: absolute;
      bottom: 5%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 100;
      color: white;
      font-family: "Fleur De Leah", cursive;
      font-weight: 400;
      font-style: normal;
      font-size: 6rem;
      text-align: center;
      width: 100%;
    }

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
      width: 100%;
      height: 100%;
      top: 0;
    }
  }

  .square-bottom {
    flex-grow: 1;
  }

  .bottom-content {
    position: relative;
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
          <div className="bottom-content">
            <StaticImage className="bottom-image" src="../images/gracies.png" alt="The Gracies logo" />
            <StaticImage
              className="bottom-image bottom-image--award"
              src="../images/award.png"
              alt="Award winner logo"
            />
          </div>
        </div>
      </Square>
      <Square>
        <FeaturedSquare />
      </Square>
      <Square className="award-winner" backgroundColor="var(--color-primary)">
        <StaticImage className="bg-image" quality={100} src="../images/new-photo.png" alt="The Queen Empress of Iran" />
        <h2>Empress Farah Pahlavi</h2>
      </Square>
      <Square backgroundColor="var(--color-primary)" smallMobileSquare>
        <FeaturedNews />
      </Square>
    </StyledHomeNews>
  );
}

export default HomeNews;
