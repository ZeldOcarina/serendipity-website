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

    ${respond(
      "tab-port",
      css`
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
      `
    )}
    ${respond(
      "phone-port",
      css`
        text-align: center;
      `
    )}
  }
`;

const Footer = ({
  siteMetadata: {
    navbarLinks: { social, pages },
  },
  logo,
  logoAlt,
}) => {
  return (
    <StyledFooter>
      <div className="container">
        <img src={logo} alt={logoAlt} className="logo" />
        <div className="copyright">
          &copy;{new Date().getFullYear()} Serendipity Film Group. All Rights Reserved |{" "}
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
