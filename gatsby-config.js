const siteMetadata = require("./src/content/siteMetadata");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: siteMetadata,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://admin.nicoletabs.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`serendipity-news`],
        singleTypes: [`serendipity-website`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Sarabun",
              variants: ["200", "400"],
            },
            {
              family: "Merriweather",
              variants: ["300", "300i"],
            },
            { family: "Asul", variants: ["400", "700"] },
          ],
        },
      },
    },
  ],
};
