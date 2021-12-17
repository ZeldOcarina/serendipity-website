import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";

import HomeTeamMember from "../components/HomeTeamMember";
import SectionTitle from "../components/SectionTitle";

const CIRCLE_WIDTH = `19rem`;

const StyledHomeTeam = styled.section`
  border: 5rem solid var(--color-primary-light);
  transform: scale(1.005);

  h2 {
    margin-bottom: 4rem;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(4, ${CIRCLE_WIDTH});
    justify-content: center;
    justify-items: center;
    gap: 3rem;
  }
`;

function HomeTeam() {
  const {
    strapiSerendipityWebsite: {
      serendipityHomePage: { homeTeam },
    },
  } = useStaticQuery(query);

  return (
    <StyledHomeTeam>
      <SectionTitle>MEET THE EXECUTIVES</SectionTitle>
      <div className="container">
        {homeTeam.map((props) => (
          <HomeTeamMember key={props.id} {...props} circleWidth={CIRCLE_WIDTH} />
        ))}
      </div>
    </StyledHomeTeam>
  );
}

export const query = graphql`
  query HomeTeam {
    strapiSerendipityWebsite {
      serendipityHomePage {
        homeTeam {
          backgroundColor
          email
          id
          name
          post
          textColor
        }
      }
    }
  }
`;

export default HomeTeam;
