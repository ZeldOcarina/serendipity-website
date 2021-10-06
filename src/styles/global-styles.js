import React from "react";

import Typography from "./typography/fonts";
import Abstracts from "./abstracts/abstracts";
import Animations from "./abstracts/animations";
import Base from "./base/base";
import Utils from "./utils/utils";

const GlobalStyles = () => {
  return (
    <>
      <Typography />
      <Abstracts />
      <Animations />
      <Base />
      <Utils />
    </>
  );
};

export default GlobalStyles;
