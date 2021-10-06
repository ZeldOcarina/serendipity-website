import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Footer from "./Footer";

import logo from "../images/serendipity-logo.svg";

const Layout = ({ children, innerPage }) => {
  const {
    site: { siteMetadata },
    strapiSerendipityWebsite: {
      serendipityLogo: { alternativeText },
    },
  } = useStaticQuery(query);

  return (
    <>
      <Navbar siteMetadata={siteMetadata} innerPage={innerPage || false} logo={logo} logoAlt={alternativeText} />
      {children}
      <Footer siteMetadata={siteMetadata} logo={logo} logoAlt={alternativeText} />
      <MobileNavbar siteMetadata={siteMetadata} />
    </>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        navbarLinks {
          social {
            facebook
            instagram
            linkedin
            twitter
            youtube
          }
          pages {
            link
            name
          }
        }
      }
    }
    strapiSerendipityWebsite {
      serendipityLogo {
        alternativeText
      }
    }
  }
`;

export default Layout;
