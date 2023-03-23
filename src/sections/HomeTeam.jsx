import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import respond from "../styles/abstracts/mediaqueries";

import HomeTeamMember from "../components/HomeTeamMember";
import SectionTitle from "../components/SectionTitle";
import AppContext from "../context/AppContext";

const CIRCLE_WIDTH = 19;

const StyledHomeTeam = styled.section`
  --circle-width: ${CIRCLE_WIDTH}rem;
  --small-circle-width: ${CIRCLE_WIDTH - 1}rem;
  border: 5rem solid var(--color-primary-light);
  transform: scale(1.005);

  ${respond(
    "iphone-5",
    css`
      border: 2rem solid var(--color-primary-light);
    `
  )}

  h2 {
    margin-bottom: 4rem;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    gap: 3rem;

    ${respond("tab-land", css``)}
    ${respond("phone-land", css``)}
    ${respond(
      "phone-port",
      css`
        gap: 0;
      `
    )}
    ${respond("iphone-5", css``)}
  }
`;

function HomeTeam() {
  const {
    teamData: { teamData },
  } = useStaticQuery(query);

  const { isiPhone5 } = useContext(AppContext);

  return (
    <StyledHomeTeam>
      <SectionTitle>MEET THE EXECUTIVES</SectionTitle>
      <div className="container">
        {teamData.map((teamMember) => (
          <HomeTeamMember
            key={teamMember.id}
            {...teamMember.data}
            circleWidth={isiPhone5 ? CIRCLE_WIDTH - 1 : CIRCLE_WIDTH}
          />
        ))}
      </div>
    </StyledHomeTeam>
  );
}

export const query = graphql`
  query HomeTeam {
    teamData: allAirtable(filter: { table: { eq: "Team" } }, sort: { data: { rowNumber: ASC } }) {
      teamData: nodes {
        data {
          name
          post
          email
          backgroundColor
          textColor
        }
        id
      }
    }
  }
`;

export default HomeTeam;
