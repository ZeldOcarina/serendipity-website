import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Seo = ({ title, description }) => {
  const {
    site: {
      siteMetadata: { siteUrl, title: metaTitle, description: metaDescription },
    },
  } = useStaticQuery(query);

  return (
    <>
      <title>{title || metaTitle}</title>
      <link rel="stylesheet" href="https://use.typekit.net/mmv4rvk.css" />
      <meta name="description" content={description || metaDescription} />
      <meta name="webmaster" content="Mattia Rasulo" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title || metaTitle} />
      <meta property="og:description" content={description || metaDescription} />
      <meta property="og:image" content={`${siteUrl}/screenshot.jpg`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:width" content="627" />
      <meta property="og:image:type" content="image/jpg" />

      {/* FAVICONS */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
};

const query = graphql`
  {
    site {
      siteMetadata {
        siteUrl
        title
        description
      }
    }
  }
`;

export default Seo;
