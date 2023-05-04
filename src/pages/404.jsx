import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Seo from "../components/Seo";
import Layout from "../layout/Layout";

import image from "../images/404.svg";

const Styled404Page = styled.main`
  background-color: var(--color-primary-light);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin: 0;
  }

  p {
    margin: 1rem 0 3rem 0;
  }

  .image {
    width: 50%;
    margin-bottom: 4rem;
  }

  .link {
    text-decoration: underline;
    font-weight: 700;
  }
`;

const Error = () => {
  return (
    <>
      <Seo title="Serendipity Group | 404 Not Found" />
      <Styled404Page className="">
        <div className="content">
          <h1>We cannot find this page</h1>
          <p>But we have many more pages waiting for you!</p>
          <img className="image" src={image} alt="Drawing of a person looking at a window" />
          <Link to="/" className="link">
            Go back to the home page
          </Link>
        </div>
      </Styled404Page>
      <Layout innerPage />
    </>
  );
};

export default Error;
