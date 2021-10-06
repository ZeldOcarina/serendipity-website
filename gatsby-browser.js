const React = require("react");
require("./src/scss/index.scss");
const GlobalStyles = require("./src/styles/global-styles").default;
const { ContextProvider } = require("./src/context/AppContext");

exports.wrapRootElement = ({ element }) => {
  return <ContextProvider>{element}</ContextProvider>;
};

exports.wrapPageElement = (props) => {
  return (
    <>
      <GlobalStyles />
      {props.element}
    </>
  );
};
