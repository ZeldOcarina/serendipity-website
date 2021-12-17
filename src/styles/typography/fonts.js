import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @font-face {
    font-family: 'StMarieW01-Light';
    src: local('StMarieW01-Light'), url(../../fonts/StMarie-Light.ttf) format('truetype');
}
@font-face {font-family: "St Marie W01 DemiBold";
  src: url("StMarie-Demibold/f208da006bca981473abfe0cae1eb975.eot"); /* IE9*/
  src: url("StMarie-Demibold/f208da006bca981473abfe0cae1eb975.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
  url("StMarie-Demibold/f208da006bca981473abfe0cae1eb975.woff2") format("woff2"), /* chrome、firefox */
  url("StMarie-Demibold/f208da006bca981473abfe0cae1eb975.woff") format("woff"), /* chrome、firefox */
  url("StMarie-Demibold/f208da006bca981473abfe0cae1eb975.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url("StMarie-Demibold/f208da006bca981473abfe0cae1eb975.svg#St Marie W01 DemiBold") format("svg"); /* iOS 4.1- */
}

.demibold {
    font-family:"St Marie W01 DemiBold" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
`;
