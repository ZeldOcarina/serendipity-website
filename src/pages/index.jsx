import React, { useContext } from "react";

import AppContext from "../context/AppContext";

import Seo from "../components/Seo";
import Hero from "../sections/Hero";
import HomeVideo from "../sections/HomeVideo";
import HomeNews from "../sections/HomeNews";
import HomeTeam from "../sections/HomeTeam";
import Layout from "../layout/Layout";

const IndexPage = () => {
  // eslint-disable-next-line
  const appData = useContext(AppContext);

  return (
    <main>
      <Seo title={"Serendipity Film Group"} description={""} language="en" />
      <Layout homePage>
        <Hero />
        <HomeVideo />
        <HomeNews />
        <HomeTeam />
      </Layout>
    </main>
  );
};

export default IndexPage;
