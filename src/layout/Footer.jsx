import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import respond from "../styles/abstracts/mediaqueries";

const StyledFooter = styled.footer`
  background-color: var(--color-primary-light);
  display: flex;
  align-items: center;
  padding: 4rem 0;

  .container {
    display: flex;
    justify-content: space-around;
  }
`;

const Footer = ({
  siteMetadata: {
    navbarLinks: { social, pages },
  },
}) => {
  return (
    <StyledFooter>
      <div className="container">
        <img src="./serendipity-logo.svg" alt="Serendipity Logo" className="logo" />
        <div className="copyright">
          &copy;{new Date().getFullYear()} Monarchy LLC. All Rights Reserved | <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
