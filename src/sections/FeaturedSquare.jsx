import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../components/Button";
import respond from "../styles/abstracts/mediaqueries";

const StyledFeaturedSquare = styled.div`
  color: var(--white);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-family: var(--body-font);
    font-weight: 400;
    text-align: center;
    font-size: 2.7rem;

    ${respond(
      "phone-port",
      css`
        font-size: 2rem;
      `
    )}
  }

  p {
    text-align: center;
    font-family: "Merriweather";
    font-size: 5rem;
    width: 80%;

    ${respond(
      "phone-port",
      css`
        font-size: 3rem;
      `
    )}
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

  button {
    color: var(--white);
  }
`;

const FeaturedSquare = () => {
  const {
    strapiSerendipityWebsite: {
      serendipityHomePage: {
        featuringSquare: { title, text, cta, bgImage },
      },
    },
  } = useStaticQuery(query);
  return (
    <StyledFeaturedSquare>
      <h2>{title}</h2>
      <div className="bottom-part">
        <p>{text}</p>
        <Button>{cta}</Button>
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
          cta
          link
          text
          title
          bgImage {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  }
`;

export default FeaturedSquare;
