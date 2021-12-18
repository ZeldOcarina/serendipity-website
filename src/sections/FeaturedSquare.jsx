import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import respond from "../styles/abstracts/mediaqueries";

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
    font-size: 2.1rem;
    color: var(--title-secondary-color);
    font-family: var(--body-font);
    font-weight: 400;
    font-style: normal;

    ${respond(
      "phone-port",
      css`
        font-size: 2rem;
      `
    )}
  }

  .title-container {
    position: relative;
  }

  .vertical-title {
    position: absolute;
    top: 0;
    right: 16rem;
    display: flex;
    flex-direction: column;
    color: var(--title-secondary-color);
    font-size: 2.3rem;
    text-align: center;
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

  .women {
    transform: translateX(-3rem);
    display: inline-block;
  }

  .title-text {
    text-align: center;
    font-size: 6rem;
    width: 80%;
    margin: 0 auto;
    color: #eedcc6;
    font-weight: bold;

    ${respond(
      "phone-port",
      css`
        font-size: 3rem;
      `
    )};
  }

  .bottom-part {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
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
  }

  .abc-logo {
    border-radius: 100%;
    width: 7rem;
  }

  .bottom-logos {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  button {
    color: var(--white);
  }
`;

const FeaturedSquare = () => {
  const {
    strapiSerendipityWebsite: {
      serendipityHomePage: {
        featuringSquare: { title, bgImage, abcLogo, moviePremiereDate, bottomMidText, huluLogo },
      },
    },
  } = useStaticQuery(query);

  return (
    <StyledFeaturedSquare>
      <h2>{title}</h2>
      <div className="bottom-part">
        <p>An ABC Limited Series</p>
        <div className="title-container">
          <h3 className="title-text">
            <span className="women">WOMEN </span>
            <span>&nbsp;MOVEMENT</span>
          </h3>
          <div className="vertical-title">
            <span>OF</span>
            <span>THE</span>
          </div>
        </div>
        <div className="bottom-logos">
          <span>{moviePremiereDate}</span>
          <GatsbyImage image={getImage(abcLogo.localFile)} alt={abcLogo.alternativeText} className="abc-logo" />
          <span>{bottomMidText}</span>
          <img className="hulu-logo" src={huluLogo.localFile.url} alt="Hulu Logo" />
        </div>
      </div>
      <GatsbyImage className="img" image={getImage(bgImage.localFile)} alt={bgImage.alternativeText} />
    </StyledFeaturedSquare>
  );
};

const query = graphql`
  query FeaturedSquare {
    strapiSerendipityWebsite {
      serendipityHomePage {
        featuringSquare {
          link
          title
          bgImage {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
          abcLogo {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
          }
          moviePremiereDate
          bottomMidText
          huluLogo {
            alternativeText
            localFile {
              url
            }
          }
        }
      }
    }
  }
`;

export default FeaturedSquare;
