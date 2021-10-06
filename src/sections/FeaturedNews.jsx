import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";

const StyledFeaturedNews = styled.div`
  color: var(--body-color);
  height: 100%;

  h2 {
    font-family: var(--body-font);
    font-weight: 400;
    text-align: center;
    font-size: 2.7rem;
    text-transform: uppercase;
  }

  .bottom-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .news-container {
    width: 65%;
    font-size: 2.8rem;
  }

  .single-new {
    display: flex;
    align-items: center;
    gap: 3rem;

    .date {
      text-transform: uppercase;
      font-size: 1.6rem;
      min-width: max-content;
      display: block;
    }

    .excerpt {
      color: #55596d;
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
      <h2>PRESS</h2>
      <div className="bottom-container">
        <div className="news-container">
          {serendipityNews.map(({ id, homeExcerpt, articleDate }, i) => {
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
        </div>
      </div>
    </StyledFeaturedNews>
  );
};

const query = graphql`
  query HomeNews {
    allStrapiSerendipityNews(limit: 3, sort: { fields: published_at }) {
      serendipityNews: nodes {
        id
        homeExcerpt
        articleDate(formatString: "MMMM DD")
      }
    }
  }
`;

export default FeaturedNews;
