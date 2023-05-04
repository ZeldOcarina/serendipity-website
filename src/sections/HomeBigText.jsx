import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled, { css, keyframes } from "styled-components";
import MarkdownParser from "../helpers/MarkdownParser";
import respond from "../styles/abstracts/mediaqueries";

import Button from "../components/Button";

const StyledHomeBigText = styled.section`
  position: relative;
  min-height: 100vh;
  padding-top: 10rem;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .big-title {
    font-family: "Six Caps", sans-serif;
    font-size: 45rem;
    font-weight: 200;
    text-align: center;
    line-height: 1;
    letter-spacing: 30px;

    ${respond(
      1570,
      css`
        font-size: 35rem;
      `
    )}
    ${respond(
      930,
      css`
        font-size: 30rem;
        letter-spacing: 20px;
      `
    )}
    ${respond(
      670,
      css`
        font-size: 25rem;
        letter-spacing: 18px;
      `
    )}
    ${respond(
      550,
      css`
        font-size: 20rem;
        letter-spacing: 10px;
      `
    )}
    ${respond(
      380,
      css`
        font-size: 15rem;
        letter-spacing: 10px;
      `
    )}
    @media only screen and (min-width: 1990px) {
      font-size: 50rem;
    }
    @media only screen and (min-width: 2100px) {
      font-size: 60rem;
    }
    @media only screen and (min-width: 2500px) {
      font-size: 65rem;
    }
    @media only screen and (min-width: 2800px) {
      font-size: 70rem;
      letter-spacing: 40px;
    }
  }

  .crown {
    margin: 0 auto;
    max-width: 100%;

    ${respond(
      670,
      css`
        width: 15rem;
      `
    )}
    ${respond(
      380,
      css`
        width: 10rem;
      `
    )}
    @media only screen and (min-width: 1990px) {
      transform: scale(1.2);
      margin-bottom: 2rem;
    }
    @media only screen and (min-width: 2100px) {
      transform: scale(1.5);
      margin-bottom: 5rem;
    }
    @media only screen and (min-width: 2500px) {
      transform: scale(1.7);
      margin-top: 10rem;
      margin-bottom: 7rem;
    }
    @media only screen and (min-width: 2800px) {
      transform: scale(1.9);
      margin-top: 10rem;
      margin-bottom: 10rem;
    }
  }

  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;

    ${respond(
      1420,
      css`
        top: 10rem;
      `
    )}
    ${respond(
      1150,
      css`
        top: 15rem;
      `
    )}
    ${respond(
      1000,
      css`
        top: 20rem;
      `
    )}
    ${respond(
      780,
      css`
        top: 25rem;
      `
    )}
    ${respond(
      380,
      css`
        top: 20rem;
      `
    )}
  }

  .text-container {
    text-align: center;
    margin-top: 25rem;

    ${respond(
      1750,
      css`
        margin-top: 15rem;
      `
    )}
    ${respond(
      1650,
      css`
        margin-top: 15rem;
      `
    )}
    ${respond(
      1420,
      css`
        margin-top: 20rem;
      `
    )}
    ${respond(
      1300,
      css`
        margin-top: 15rem;
      `
    )}
    ${respond(
      1100,
      css`
        margin-top: 10rem;
      `
    )}
    ${respond(
      930,
      css`
        margin-top: 15rem;
      `
    )}
    ${respond(
      850,
      css`
        margin-top: 10rem;
      `
    )}
    ${respond(
      550,
      css`
        margin-top: 13rem;
      `
    )}
    ${respond(
      450,
      css`
        margin-top: 6rem;
      `
    )}
    @media only screen and (min-width: 1990px) {
      margin-top: 35rem;
    }
    @media only screen and (min-width: 2100px) {
      margin-top: 30rem;
    }
    @media only screen and (min-width: 2500px) {
      margin-top: 35rem;
    }
    @media only screen and (min-width: 2800px) {
      margin-top: 50rem;
    }

    .text-heading {
      font-family: "din-condensed", sans-serif;
      font-weight: 700;
      font-style: normal;
      letter-spacing: 2px;
      font-size: 4rem;
      margin-bottom: 2rem;
    }

    .copy {
      font-family: "Montserrat", sans-serif;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Montserrat", sans-serif;
      margin-bottom: 2rem;
      font-size: var(--body-font-size);
    }

    p {
      margin-bottom: 1rem;
    }

    strong {
      font-weight: 700;
    }

    .button {
      margin-top: 3rem;
      color: var(--white);
    }
  }
`;

const words = ["Woman", "Life", "Freedom"];

const HomeBigText = () => {
  const [isTitleInView, setIsTitleInView] = React.useState(false);
  const [isCopyExpanded, setIsCopyExpanded] = React.useState(false);
  const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
  const titleRef = React.useRef(null);

  const {
    homeBigTextData: {
      homeBigTextData: { heading, crownAltText, bgImageAltText, textHeading, copy, bgImage, crown },
    },
  } = useStaticQuery(query);

  React.useEffect(() => {
    // Add a small fade in effect to the title when it comes into view
    const title = titleRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTitleInView(entry.isIntersecting);
      },
      { threshold: 1 }
    );

    observer.observe(title);

    return () => {
      observer.unobserve(title);
    };
  }, []);

  React.useEffect(() => {
    if (!isTitleInView) return;
    const interval = setInterval(() => {
      setCurrentWordIndex((currentWordIndex) => {
        return currentWordIndex === words.length - 1 ? 0 : currentWordIndex + 1;
      });
    }, 1000);

    // if (!isTitleInView) clearInterval(interval);

    return () => {
      clearInterval(interval);
    };
  }, [isTitleInView]);

  function handleClick() {
    setIsCopyExpanded(!isCopyExpanded);
  }

  const fullCopy = new MarkdownParser({
    inputMarkdown: copy,
  }).parseHtml(copy);

  const shortenedCopy = new MarkdownParser({
    inputMarkdown: copy.substr(0, 1206),
  }).parseHtml(copy);

  return (
    <StyledHomeBigText>
      <div className="container">
        {/* <GatsbyImage className="crown" image={getImage(crown.localFiles[0])} alt={crownAltText} /> */}
        <img className="crown" image={crown.localFiles[0].publicURL} alt={crownAltText} />
        <h2 className="big-title" ref={titleRef}>
          {words[currentWordIndex].toUpperCase()}
        </h2>
        <div className="text-container">
          <h3 className="text-heading">{textHeading}</h3>
          <div className="copy">{isCopyExpanded ? fullCopy : shortenedCopy}</div>
          <Button
            alternative
            backgroundColor="#EDC4C9"
            hoverBackgroundColor="#EDC4C9"
            uppercase
            className="button"
            color="#ffffff"
            onClick={handleClick}
          >
            {isCopyExpanded ? "Read Less" : "Read More"}
          </Button>
        </div>
      </div>
      <img className="bg-image" image={bgImage.localFiles[0]} alt={bgImageAltText} lazy={true} />
    </StyledHomeBigText>
  );
};

const query = graphql`
  query {
    homeBigTextData: airtable(table: { eq: "HomeBigText" }) {
      homeBigTextData: data {
        crownAltText
        bgImageAltText
        textHeading
        heading
        copy
        bgImage {
          localFiles {
            publicURL
          }
        }
        crown {
          localFiles {
            publicURL
          }
        }
      }
    }
  }
`;

export default HomeBigText;
