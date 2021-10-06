import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../components/Button";

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
  }

  p {
    text-align: center;
    font-family: "Merriweather";
    font-size: 5rem;
    width: 80%;
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
  }

  .img {
    width: 100%;
    height: 100%;
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const FeaturedSquare = () => {
  const {
    strapiSerendipityWebsite: {
      serendipityHomePage: {
        featuringSquare: { title, text, cta, link, bgImage },
      },
    },
  } = useStaticQuery(query);
  return (
    <StyledFeaturedSquare>
      <h2>{title}</h2>
      <div className="bottom-part">
        <p>{text}</p>
        <Button>
          <a className="btn" href={link}>
            {cta}
          </a>
        </Button>
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
