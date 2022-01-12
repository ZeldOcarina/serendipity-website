import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import respond from "../styles/abstracts/mediaqueries";

import Button from "../components/Button";
import SectionTitle from "../components/SectionTitle";

const StyledFeaturedNews = styled.div`
  color: var(--body-color);
  height: 100%;

  .bottom-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${respond(
      "phone-port",
      css`
        height: max-content;
        margin-top: 3rem;
      `
    )}
  }

  .news-container {
    width: 80%;
    font-size: 2.8rem;

    ${respond(
      "laptop",
      css`
        width: 90%;
        font-size: 2.3rem;
      `
    )}
    ${respond(
      "tab-land",
      css`
        width: 100%;
      `
    )}
    ${respond(
      "tab-port",
      css`
        width: 80%;
      `
    )}
    ${respond(
      "phone-port",
      css`
        width: 90%;
      `
    )}
  }

  .single-new {
    display: flex;
    align-items: center;
    gap: 3rem;

    ${respond(
      "phone-port",
      css`
        flex-direction: column;
        gap: 1rem;
      `
    )}

    .date {
      text-transform: uppercase;
      font-size: 1.6rem;
      min-width: max-content;
      display: block;

      ${respond(
        "phone-port",
        css`
          font-size: 1.4rem;
        `
      )}
    }

    .excerpt {
      color: #55596d;

      ${respond(
        "phone-port",
        css`
          font-size: 1.6rem;
          text-align: center;
        `
      )}
    }
  }

  hr {
    border: none;
    border-top: 1px solid #ffe3d5;
    margin: 2rem 0;
  }
`;

const FeaturedNews = () => {
  const {
    allStrapiSerendipityNews: { serendipityNews },
  } = useStaticQuery(query);
  return (
    <StyledFeaturedNews>
      <SectionTitle>PRESS</SectionTitle>
      <div className="bottom-container">
        <div className="news-container">
          {serendipityNews.map(({ id, homeExcerpt, articleDate }, i) => {
            if (i > 2) return "";
            return (
              <React.Fragment key={id}>
                <article className="single-new">
                  <span className="date">{articleDate}</span>
                  <p className="excerpt">{homeExcerpt}</p>
                </article>
                {!(serendipityNews.length === i + 1) && <hr />}
              </React.Fragment>
            );
          })}
          <Button alternative backgroundColor="rgba(255, 255, 255, 0.25)" uppercase>
            <Link to="/press">View All</Link>
          </Button>
        </div>
      </div>
    </StyledFeaturedNews>
  );
};

const query = graphql`
  query HomeNews {
    allStrapiSerendipityNews(limit: 3, sort: { fields: published_at, order: DESC }) {
      serendipityNews: nodes {
        id
        homeExcerpt
        articleDate(formatString: "MMMM DD")
      }
    }
  }
`;

export default FeaturedNews;
