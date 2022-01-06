import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from "uuid";

import parseStringDate from "../utils/parseStringDate";
import Button from "../components/Button";
import respond from "../styles/abstracts/mediaqueries";

const StyledSingleNews = styled.article`
  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  h2,
  p,
  .date {
    ${respond(
      "iphone-5",
      css`
        width: 90%;
        margin: 0 auto;
      `
    )}
  }

  .image {
    max-width: 100%;
    margin-bottom: 2rem;

    ${respond(
      "iphone-5",
      css`
        margin: 2rem 0 4rem 0;
      `
    )}
  }

  .date {
    margin-bottom: 2rem;
    font-size: 1.7rem;
    display: block;
  }

  p {
    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  .button {
    margin-top: 1.6rem;

    ${respond(
      "iphone-5",
      css`
        margin-left: 5%;
      `
    )}
  }
`;

const SingleNews = ({
  articleBody,
  featuredImage,
  articleDate,
  title,
  author,
  media,
  excerpt,
  slug,
  externalUrl,
  externalUrlButtonText,
}) => {
  const alternativeText = featuredImage?.alternativeText || "Press Image";
  const excerptParagraph = articleBody.split("\n\n")[0].split(" ").slice(0, 55);
  const paragraphs = excerpt ? [excerptParagraph.join(" ") + " [...]"] : articleBody.split("\n\n");
  const image = getImage(featuredImage?.localFile?.childImageSharp) || undefined;
  const displayedDate = parseStringDate(articleDate).toLocaleDateString("en-EN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <StyledSingleNews>
      <h2>{title}</h2>
      <span className="date">
        Written by {author} for {media}. {displayedDate}
      </span>
      {image && <GatsbyImage className="image" image={image} alt={alternativeText} />}
      {paragraphs.map((p) => {
        return <p key={uuidv4()}>{p}</p>;
      })}
      {excerpt && (
        <Button
          className="button"
          backgroundColor="var(--color-primary-light)"
          hoverBackgroundColor="var(--color-primary-light)"
          hoverBorderColor="var(--color-primary-light)"
          fontSize="16"
          uppercase
        >
          <Link to={slug}>Read More</Link>
        </Button>
      )}
      {externalUrl && (
        <Button
          className="button"
          backgroundColor="var(--color-primary-light)"
          hoverBackgroundColor="var(--color-primary-light)"
          hoverBorderColor="var(--color-primary-light)"
          fontSize="16"
          uppercase
        >
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">
            {externalUrlButtonText}
          </a>
        </Button>
      )}
    </StyledSingleNews>
  );
};

export default SingleNews;
