import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled, { css } from "styled-components";
import YouTubeEmbed from "../components/YouTubeEmbed";
import respond from "../styles/abstracts/mediaqueries";

const StyledHomeVideo = styled.section`
  ${respond(
    "phone-land",
    css`
      max-width: 100%;
      padding-left: 0;
      padding-right: 0;
    `
  )}
  ${respond(
    "phone-port",
    css`
      max-width: 100%;
      width: 100%;
      padding-left: 0;
      padding-right: 0;
    `
  )}
`;

const HomeVideo = () => {
  const {
    homeVideoIdData: {
      homeVideoIdData: { homeVideoId },
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
    homeVideoIdData: airtable(table: { eq: "HomeVideo" }) {
      homeVideoIdData: data {
        homeVideoId
      }
    }
  }
`;

export default HomeVideo;
