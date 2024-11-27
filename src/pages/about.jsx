import React from "react";
import { graphql } from "gatsby";
import styled, { css } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Markdown from "react-markdown";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";
import InnerPageHeader from "../components/InnerPageHeader";
import respond from "../styles/abstracts/mediaqueries";

const StyledAboutPage = styled.main`
  margin-top: 4rem;
`;

const StyledBlock = styled.div`
  &:not(:last-child) {
    margin-bottom: 3rem;
  }

  h2,
  p {
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

    ${respond(
      "iphone-5",
      css`
        margin: 2rem 0 4rem 0;
      `
    )}
  }

  p {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`;

const AboutPage = ({
  data: {
    aboutPageData: { aboutPageData },
  },
}) => {
  return (
    <>
      <Layout>
        <StyledAboutPage>
          <div className="inner-container">
            <InnerPageHeader>About</InnerPageHeader>

            {aboutPageData.map(({ id, data: { AltText, Block, Heading, Copy, Media, Subheading } }) => {
              const image = getImage(Media?.localFiles[0]) || undefined;

              switch (Block) {
                case "Text":
                  return (
                    <StyledBlock key={id}>
                      <h2>{Heading}</h2>
                      <p>{Subheading}</p>
                      <Markdown>{Copy}</Markdown>
                    </StyledBlock>
                  );
                case "Image":
                  return (
                    <StyledBlock key={id}>
                      {image && <GatsbyImage className="image" image={image} alt={AltText} />}
                    </StyledBlock>
                  );
                default:
                  throw new Error("A Block is needed to render this page");
              }
            })}
          </div>
        </StyledAboutPage>
      </Layout>
    </>
  );
};

export const Head = () => (
  <Seo
    title={"Serendipity Group | About"}
    description={"A description of the Serendipity founders"}
    language="en"
    homePage={false}
  />
);

export const query = graphql`
  query AboutPage {
    aboutPageData: allAirtable(
      filter: { table: { eq: "About" }, data: { isActive: { eq: true } } }
      sort: { data: { rowNumber: ASC } }
    ) {
      aboutPageData: nodes {
        data {
          Block
          Heading
          Copy
          AltText
          Media {
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

export default AboutPage;
