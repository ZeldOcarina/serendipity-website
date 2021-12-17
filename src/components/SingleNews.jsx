import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from "uuid";

import parseStringDate from "../utils/parseStringDate";
import Button from "../components/Button";

const StyledSingleNews = styled.article`
  &:not(:last-child) {
    margin-bottom: 5rem;
  }

  .image {
    max-width: 100%;
    margin-bottom: 2rem;
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
  }
`;

const SingleNews = ({
  articleBody,
  featuredImage,
  featuredImage: { alternativeText },
  articleDate,
  title,
  author,
  media,
  excerpt,
  slug,
}) => {
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
    </StyledSingleNews>
  );
};

export default SingleNews;
