import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Seo from "../../components/Seo";
import SingleNews from "../../components/SingleNews";
import Layout from "../../layout/Layout";

const StyledSingleNewsPage = styled.main`
  margin-top: 4rem;
`;

const SingleNewsPage = ({ data: { strapiSerendipityNews } }) => {
  //console.log(strapiSerendipityNews);
  return (
    <>
      <Seo
        title={`Serendipity Group | ${strapiSerendipityNews.title}`}
        description={strapiSerendipityNews.homeExcerpt}
        language="en"
        homePage={false}
      />
      <Layout>
        <StyledSingleNewsPage className="inner-container">
          <SingleNews {...strapiSerendipityNews} />
        </StyledSingleNewsPage>
      </Layout>
    </>
  );
};

export const query = graphql`
  query GetSingleNews($slug: String) {
    strapiSerendipityNews(slug: { eq: $slug }) {
      slug
      articleBody
      articleDate
      author
      media
      homeExcerpt
      featuredImage {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: TRACED_SVG, layout: CONSTRAINED)
          }
        }
        alternativeText
      }
      title
      strapiId
    }
  }
`;

export default SingleNewsPage;
