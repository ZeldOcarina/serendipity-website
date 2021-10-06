import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

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
