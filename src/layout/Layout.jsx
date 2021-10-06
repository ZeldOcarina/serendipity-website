import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Footer from "./Footer";

const Layout = ({ children, innerPage }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(query);

  return (
    <>
      <Navbar siteMetadata={siteMetadata} innerPage={innerPage || false} />
      {children}
      <Footer siteMetadata={siteMetadata} />
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
  }
`;

export default Layout;
