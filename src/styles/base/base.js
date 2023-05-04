import { createGlobalStyle, css } from "styled-components";
import respond from "../abstracts/mediaqueries";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  overflow-x: hidden;
  font-size: 10px;

  ${respond(
    "4k-tv",
    css`
      font-size: 20px;
    `
  )}
}

body {
  font-family: var(--body-font);
  color: var(--body-color);
  font-size: var(--basic-font-size);
  font-weight: 200;
  letter-spacing: 2px;
  line-height: 1.5;
  background-color: var(--body-background);
  overflow-x: hidden;
  overflow-y: hidden;

  ${respond(
    "phone-land",
    css`
      font-size: var(--mobile-font-size);
      overflow-wrap: break-word;
    `
  )}
  ${respond(
    "iphone-5",
    css`
      font-size: var(--mobile-font-size);
      overflow-wrap: anywhere;
    `
  )}
}

h1 {
  font-size: var(--big-title);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--title-font);
  color: var(--body-font);

  ${respond(
    "tab-land",
    css`
      font-size: 3.5rem;
    `
  )}
  ${respond(
    "phone-land",
    css`
      font-size: var(--mobile-title-font-size);
    `
  )}
}

h2,
h3,
h4,
h5,
h6 {
  font-size: var(--title-font-size);

  ${respond(
    "tab-land",
    css`
      font-size: 3rem;
    `
  )}
  ${respond(
    "phone-port",
    css`
      font-size: 2.5rem;
    `
  )}
}

p {
  letter-spacing: 0.1rem;
  line-height: 1.5;
}

section {
  padding: 5rem 0;
}

a {
  color: var(--body-color);
  text-decoration: none;
}

strong {
  font-weight: 700;
}

i {
  font-style: italic;
}

button {
  letter-spacing: inherit;
  font-family: var(--alternative-font);
}
`;
