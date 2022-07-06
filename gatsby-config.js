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
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Config`,
            mapping: { attachments: `fileNode` },
            tableId: `tblu8ZSQMxzqjFOWz`
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `FeaturingSquare`,
            mapping: { bgImage: `fileNode`, abcLogo: `fileNode`, huluLogo: `fileNode` },
            tableId: `tblDaqa4GPCvqNsUV`
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Hero`,
            mapping: { bgImage: `fileNode` },
            tableId: `tblIz7GWaKifZqrNe`
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `HeroLogos`,
            mapping: { logo: `fileNode` },
            tableId: `tblTLaSgONlZ0Q9Yp`
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `Team`,
            mapping: {},
            tableId: `tbl1z7KJcvNhIxJrj`
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `HomeVideo`,
            mapping: {},
            tableId: `tblEIBkOYH1Vyhy3T`
          },
          {
            baseId: process.env.AIRTABLE_BASE_ID,
            tableName: `News`,
            mapping: { featuredImage: `fileNode` },
            tableId: `tbllwSHYWivX5qMaj`
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-transformer-json`,
    // {
    //   resolve: `gatsby-source-strapi`,
    //   options: {
    //     apiURL: `https://admin.nicoletabs.com`,
    //     queryLimit: 1000, // Defaults to 100
    //     collectionTypes: [`serendipity-news`],
    //     singleTypes: [`serendipity-website`],
    //   },
    // },
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5MDW3BV",

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        // includeInDevelopment: true,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",

        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        routeChangeEventName: "gatsby-route-change",
        // Defaults to false
        enableWebVitalsTracking: true,
        // Defaults to https://www.googletagmanager.com
        // selfHostedOrigin: "YOUR_SELF_HOSTED_ORIGIN",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [
          { userAgent: "Googlebot", allow: "*", disallow: [] },
          {
            userAgent: "msnbot|BingBot",
            allow: "*",
            disallow: [],
          },
          {
            userAgent: "DuckDuckBot",
            allow: "*",
            disallow: [],
          },
          {
            userAgent: "*",
            disallow: "*",
          },
        ],
      },
    },
  ],
};
