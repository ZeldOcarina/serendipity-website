import { graphql, useStaticQuery } from "gatsby";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import respond from "../styles/abstracts/mediaqueries";
import AppContext from "../context/AppContext";

const StyledFeaturedSquare = styled.div`
  color: var(--white);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    //font-family: var(--body-font);
    text-align: center;
    font-size: 2.5rem;
    color: var(--title-secondary-color);
    font-family: var(--body-font);
    font-weight: 400;
    font-style: normal;

    ${respond(
      "laptop",
      css`
        font-size: 1.6rem;
      `
    )}
    ${respond(
      "phone-port",
      css`
        font-size: 2rem;
      `
    )}
    ${respond(
      "iphone-5",
      css`
        font-size: 1.4rem;
      `
    )}
  }

  .title-container {
    position: relative;
    width: min-content;
    text-align: center;

    ${respond(
      "phone-port",
      css`
        width: 100%;
      `
    )}
  }

  .women,
  .vertical-title {
    display: inline-block;
  }

  .women {
    transform: translateX(-10%);
  }

  .title-text,
  .vertical-title {
    text-transform: uppercase;
    font-family: "adobe-caslon-pro", serif;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0;
    line-height: 1;
  }

  .title-text {
    text-align: center;
    font-size: 6rem;
    color: #eedcc6;
    font-weight: bold;

    ${respond(
      "phone-port",
      css`
        font-size: 4rem;
        line-height: 1.2;
      `
    )};
  }

  .vertical-title {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    color: var(--title-secondary-color);
    font-size: 2.3rem;
    text-align: center;
    transform: translateX(-50%);

    ${respond(
      "phone-port",
      css`
        font-size: 1.75rem;
        transform: translateX(-150%);
        line-height: 1.1;
      `
    )}

    ${respond(
      "small-phone",
      css`
        font-size: 1.75rem;
        transform: translateX(-115%);
        line-height: 1.1;
      `
    )}
    ${respond(
      "iphone-5",
      css`
        transform: translateX(-60%);
      `
    )}
  }

  .bottom-part {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    ${respond(
      "iphone-5",
      css`
        gap: 1rem;
      `
    )}
  }

  .btn {
    text-transform: uppercase;
    color: var(--white);

    ${respond(
      "phone-port",
      css`
        font-size: 1.6rem;
      `
    )}
  }

  .img {
    width: 100%;
    height: 100%;
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .hulu-logo {
    width: 9rem;
    filter: invert(99%) sepia(25%) saturate(31%) hue-rotate(55deg) brightness(105%) contrast(100%);
  }

  .abc-logo {
    border-radius: 100%;
    width: 7rem;
  }

  .bottom-logos {
    display: flex;
    gap: 1rem;
    align-items: center;

    ${respond(
      "iphone-5",
      css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        justify-content: center;
        justify-items: center;
        margin-bottom: 2rem;
      `
    )}
  }

  button {
    color: var(--white);
  }
`;

const FeaturedSquare = () => {
  const {
    featuringSquareData: { featuringSquareData },
  } = useStaticQuery(query);

  const { isPhonePort } = useContext(AppContext);

  return (
    <StyledFeaturedSquare>
      {isPhonePort ? (
        <h2>
          {featuringSquareData.titleTopLine}
          <br />
          {featuringSquareData.titleSecondLine}
        </h2>
      ) : (
        <h2>{`${featuringSquareData.titleTopLine} ${featuringSquareData.titleSecondLine}`}</h2>
      )}
      <div className="bottom-part">
        <p>An ABC Limited Series</p>
        <div className="title-container">
          <h3 className="title-text">
            <span className="women">WOMEN</span>
            <span>&nbsp;MOVEMENT</span>
          </h3>
          <div className="vertical-title">
            <span>OF</span>
            <span>THE</span>
          </div>
        </div>
        <div className="bottom-logos">
          <span>{featuringSquareData.moviePremiereDate}</span>
          <GatsbyImage
            image={getImage(featuringSquareData.abcLogo.localFiles[0])}
            alt={featuringSquareData.abcLogoAltText}
            className="abc-logo"
          />
          <span>{featuringSquareData.bottomMidText}</span>
          <img
            className="hulu-logo"
            src={featuringSquareData.huluLogo.localFiles[0].publicURL}
            alt={featuringSquareData.huluLogoAltText}
          />
        </div>
      </div>
      <GatsbyImage
        className="img"
        image={getImage(featuringSquareData.bgImage.localFiles[0])}
        alt={featuringSquareData.bgImageAlt}
      />
    </StyledFeaturedSquare>
  );
};

const query = graphql`
  query FeaturedSquare {
    featuringSquareData: airtable(table: { eq: "FeaturingSquare" }) {
      featuringSquareData: data {
        titleTopLine
        titleSecondLine
        abcLogoAltText
        huluLogoAltText
        bgImageAlt
        bgImage {
          localFiles {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        moviePremiereDate
        bottomMidText
        abcLogo {
          localFiles {
            publicURL
            childImageSharp {
              gatsbyImageData(placeholder: NONE)
            }
          }
        }
        huluLogo {
          localFiles {
            publicURL
          }
        }
      }
    }
  }
`;

export default FeaturedSquare;
