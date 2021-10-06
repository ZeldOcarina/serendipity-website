import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const StyledHero = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .text-container {
    text-align: center;
    width: 37%;
    transform: translateY(-6rem);

    h1 {
      font-size: 6rem;
      line-height: 1.3;
    }

    p {
      font-size: 2rem;
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

    .logo {
      max-height: 15rem;
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
