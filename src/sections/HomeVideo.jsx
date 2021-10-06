import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import YouTubeEmbed from "../components/YouTubeEmbed";

const StyledHomeVideo = styled.section``;

const HomeVideo = () => {
  const {
    strapiSerendipityWebsite: {
      serendipityHomePage: { homeVideoId },
    },
  } = useStaticQuery(query);
  return (
    <StyledHomeVideo className="container">
      <YouTubeEmbed id={homeVideoId} />
    </StyledHomeVideo>
  );
};

const query = graphql`
  query HomeVideoQuery {
    strapiSerendipityWebsite {
      serendipityHomePage {
        homeVideoId
      }
    }
  }
`;

export default HomeVideo;
