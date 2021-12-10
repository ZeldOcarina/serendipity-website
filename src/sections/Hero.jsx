import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

const StyledHero = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  ${respond(
    "phone-land",
    css`
      height: 180vh;
    `
  )}
  ${respond(
    "phone-port",
    css`
      height: 100vh;
    `
  )}

  .text-container {
    text-align: center;
    width: 65%;
    transform: translateY(-6rem);

    ${respond(
      "tab-port",
      css`
        width: 90%;
      `
    )}

    h1 {
      font-size: 5rem;
      line-height: 1.3;
      text-transform: uppercase;
      font-family: "adobe-caslon-pro", serif;
      font-weight: 700;
      font-style: normal;

      ${respond(
        "phone-land",
        css`
          font-size: 5rem;
        `
      )}
      ${respond(
        "phone-port",
        css`
          font-size: 4rem;
        `
      )}
    }

    p {
      font-size: 2rem;
      width: 70%;
      margin: 0 auto;

      ${respond(
        "phone-port",
        css`
          font-size: 1.8rem;
        `
      )}
    }
  }

  .logo-container {
    position: absolute;
    bottom: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    width: 100%;

    ${respond(
      "phone-port",
      css`
        flex-wrap: wrap;
        gap: 1rem;
        width: 90%;
      `
    )}
    ${respond(
      "iphone-5",
      css`
        flex-wrap: wrap;
        gap: 1rem;
        width: 100%;
      `
    )}

    .logo {
      max-height: 15rem;
      filter: brightness(0);

      ${respond(
        "phone-port",
        css`
          max-height: 10rem;
        `
      )}
    }
  }

  .bg-image {
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
`;

const Hero = () => {
  const {
    strapiSerendipityWebsite: {
      serendipityHomePage: {
        serendipityHero: { title, description, logos, bgImage },
      },
    },
  } = useStaticQuery(query);
  return (
    <StyledHero>
      <div className="text-container">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="logo-container">
        {logos.map(({ id, alternativeText, localFile: { publicURL } }) => {
          return <img className="logo" key={id} alt={alternativeText} src={publicURL} />;
        })}
      </div>
      <GatsbyImage className="bg-image" image={getImage(bgImage.localFile)} alt={bgImage.alternativeText} />
    </StyledHero>
  );
};

const query = graphql`
  query HomeHero {
    strapiSerendipityWebsite {
      serendipityHomePage {
        serendipityHero {
          description
          title
          logos {
            alternativeText
            id
            localFile {
              publicURL: url
            }
          }
          bgImage {
            alternativeText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;

export default Hero;
