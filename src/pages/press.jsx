import React, { useContext } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import AppContext from "../context/AppContext";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";
import InnerPageHeader from "../components/InnerPageHeader";
import SingleNews from "../components/SingleNews";

const StyledPressPage = styled.main`
  margin-top: 4rem;
`;

const PressPage = ({
  data: {
    allStrapiSerendipityNews: { news },
  },
}) => {
  // eslint-disable-next-line
  const appData = useContext(AppContext);

  return (
    <>
      <Seo
        title={"Serendipity Group | Press"}
        description={"Serendipity group press releases"}
        language="en"
        homePage={false}
      />
      <Layout>
        <StyledPressPage>
          <div className="inner-container">
            <InnerPageHeader>Press</InnerPageHeader>
            <div className="news-container">
              {news.map((news) => {
                return <SingleNews {...news} key={news.strapiId} />;
              })}
            </div>
          </div>
        </StyledPressPage>
      </Layout>
    </>
  );
};

export const query = graphql`
  query NewsPage {
    allStrapiSerendipityNews(sort: { order: DESC, fields: articleDate }) {
      news: nodes {
        articleBody
        articleDate
        author
        media
        createdAt
        featuredImage {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
          alternativeText
        }
        title
        strapiId
        slug
        externalUrl
        externalUrlButtonText
      }
    }
  }
`;

export default PressPage;
