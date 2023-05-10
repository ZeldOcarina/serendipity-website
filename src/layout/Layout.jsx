import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import Footer from "./Footer";

const Layout = ({ children, innerPage, homePage }) => {
  const {
    site: { siteMetadata },
    logoData: { logoData },
  } = useStaticQuery(query);

  return (
    <>
      <Navbar
        siteMetadata={siteMetadata}
        innerPage={innerPage || false}
        homePage={homePage || false}
        logo={logoData.attachments.localFiles[0].publicURL}
        logoAlt={logoData.alternativeText}
      />
      {children}
      <Footer
        siteMetadata={siteMetadata}
        logo={logoData.attachments.localFiles[0].publicURL}
        logoAlt={logoData.alternativeText}
      />
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
    logoData: airtable(table: { eq: "Config" }, data: { Category: { eq: "Logo" } }) {
      logoData: data {
        alternativeText
        attachments {
          localFiles {
            publicURL
          }
        }
      }
    }
  }
`;

export default Layout;
