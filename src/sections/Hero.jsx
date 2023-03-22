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
    "tab-port",
    css`
      height: 100vh;
    `
  )}
  ${respond(
    "phone-port",
    css`
      height: 80vh;
    `
  )}
  ${respond(
    "nexus-7",
    css`
      height: 100vh;
    `
  )}
  ${respond(
    "small-phone",
    css`
      height: 100vh;
    `
  )}
  ${respond(
    "iphone-8-plus",
    css`
      height: 115vh;
    `
  )}
  ${respond(
    "iphone-5",
    css`
      height: 155vh;
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
    ${respond(
      "phone-port",
      css`
        width: 100%;
      `
    )}

    h1 {
      font-size: 5rem;
      line-height: 1.3;
      text-transform: uppercase;
      font-family: var(--new-font);
      font-weight: 400;
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
      max-height: 6rem;
      width: 16rem;
      filter: brightness(0);

      &--hulu {
        width: 12rem;
        transform: translateY(-5px);
      }

      &--disney {
        transform: translateX(16px);
      }

      ${respond(
        "small-phone",
        css`
          max-height: 4rem;
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
    heroData: { heroData },
    logosData: { logosData },
  } = useStaticQuery(query);

  function setLogoClass(alternativeText) {
    switch (alternativeText) {
      case "Hulu Logo":
        return "logo logo--hulu";
      case "Disney Logo":
        return "logo logo--disney";
      default:
        return "logo";
    }
  }

  return (
    <StyledHero>
      <div className="text-container">
        <h1>{heroData.title}</h1>
        <p>{heroData.description}</p>
      </div>
      <div className="logo-container">
        {logosData.map(
          ({
            id,
            data: {
              logo: {
                localFiles: [{ publicURL }],
              },
              alternativeText,
            },
          }) => {
            return <img className={setLogoClass(alternativeText)} key={id} alt={alternativeText} src={publicURL} />;
          }
        )}
      </div>
      <GatsbyImage className="bg-image" image={getImage(heroData.bgImage.localFiles[0])} alt={heroData.bgImageAlt} />
    </StyledHero>
  );
};

const query = graphql`
  {
    heroData: airtable(table: { eq: "Hero" }) {
      heroData: data {
        title
        description
        bgImage {
          localFiles {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
        bgImageAlt
      }
    }
    logosData: allAirtable(filter: { table: { eq: "HeroLogos" } }) {
      logosData: nodes {
        data {
          logo {
            localFiles {
              publicURL
            }
          }
          alternativeText
        }
        id
      }
    }
  }
`;

export default Hero;
