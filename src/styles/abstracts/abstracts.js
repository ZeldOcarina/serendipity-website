import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
      // COLORS
    --body-background: #ffffff;
    --body-color: #696D80;
    --color-primary: #F1C7B3;
    --color-primary-light: #FFE6DA;
    --color-secondary: #F496A5;
    --color-secondary-light: #FFCBD5;
    --title-secondary-color: #eedcc6;
    --black: #000000;
    --white: #ffffff;

    //FONT FAMILY
    --title-font: "StMarieW01-Light", serif;
    --alternative-font: "Work Sans", sans-serif;
    --body-font: "Sarabun", sans-serif;
    --bold: 700;

    // FONT-SIZES
    --basic-font-size: 1.8rem;
    --mobile-font-size: 1.5rem;

    --big-title: 4.8rem;
    --title-font-size: 2.8rem;
    --mobile-title-font-size: 3rem;
    --small-title: 2.5rem;
    --big-text: 2rem;
  }
`;
