const BASE_PIXELS = 16;

function respond(breakpoint, css) {
  switch (breakpoint) {
    case "iphone-5":
      return `@media only screen and (max-width: ${365 / BASE_PIXELS}em) {
                ${css}
              }`; // 365px
    case "small-phone":
      return `@media only screen and (max-width: ${400 / BASE_PIXELS}em) {
                ${css}
              }`; // 400px
    case "phone-port":
      return `@media only screen and (max-width: ${450 / BASE_PIXELS}em) {
                ${css}
              }`; // 450px
    case "phone-land":
      return `@media only screen and (max-width: ${900 / BASE_PIXELS}em) {
                ${css}
              }`; // 900px
    case "tab-port":
      return `@media only screen and (max-width: ${900 / BASE_PIXELS}em) {
                ${css}
              }`; // 900px
    case "tab-land":
      return `@media only screen and (max-width: ${1200 / BASE_PIXELS}em) {
                ${css}
              }`; // 1200px
    case "laptop":
      return `@media only screen and (max-width: ${1634 / BASE_PIXELS}em) {
                ${css}
              }`; // 1634px
    case "big-laptop":
      return `@media only screen and (max-width: ${1920 / BASE_PIXELS}em) {
                ${css}
              }`; // 1920px
    case "big-desktop":
      return `@media only screen and (min-width: ${1740 / BASE_PIXELS}em) {
                ${css}
              }`; // 1740px
    case "4k-tv":
      return `@media only screen and (min-width: ${3800 / BASE_PIXELS}em) {
                ${css}
              }`; // 3800px
    default:
      return new Error("Invalid Media Query");
  }
}

export default respond;
