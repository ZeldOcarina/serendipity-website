import React, { useContext } from "react";

import AppContext from "../context/AppContext";

import Seo from "../components/Seo";
import Hero from "../sections/Hero";
import HomeVideo from "../sections/HomeVideo";
import HomeNews from "../sections/HomeNews";
import Layout from "../layout/Layout";

const IndexPage = () => {
  // eslint-disable-next-line
  const appData = useContext(AppContext);

  return (
    <main>
      <Seo title={"Nicole Tabs"} description={""} language="en" />
      <Layout>
        <Hero />
        <HomeVideo />
        <HomeNews />
      </Layout>
    </main>
  );
};

export default IndexPage;
