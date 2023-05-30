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
    newsData: { newsData },
  },
}) => {
  // eslint-disable-next-line
  const appData = useContext(AppContext);

  return (
    <>
      <Layout>
        <StyledPressPage>
          <div className="inner-container">
            <InnerPageHeader>Press</InnerPageHeader>
            <div className="news-container">
              {newsData.map((news) => {
                return <SingleNews {...news.data} key={news.id} />;
              })}
            </div>
          </div>
        </StyledPressPage>
      </Layout>
    </>
  );
};

export const Head = () => (
  <Seo
    title={"Serendipity Group | Press"}
    description={"Serendipity group press releases"}
    language="en"
    homePage={false}
  />
);

export const query = graphql`
  query NewsPage {
    newsData: allAirtable(filter: { table: { eq: "News" } }, sort: { data: { articleDate: DESC } }) {
      newsData: nodes {
        data {
          articleDate
          title
          articleBody
          author
          media
          externalUrl
          externalUrlButtonText
          featuredImageAltText
          featuredImage {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
        id
      }
    }
  }
`;

export default PressPage;
