import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";

const Styled404Page = styled.main``;

const Error = () => {
  return (
    <>
      <Seo title="Nicole Tabs | Error" />
      <Styled404Page className="container">
        <h1>404</h1>
        <Link to="/" className="">
          Go back to the home page
        </Link>
      </Styled404Page>
      <Layout innerPage />
    </>
  );
};

export default Error;
