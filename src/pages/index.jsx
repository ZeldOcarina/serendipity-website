import React, { useContext } from "react";

import AppContext from "../context/AppContext";

import Seo from "../components/Seo";
import Hero from "../sections/Hero";
import HomeBigText from "../sections/HomeBigText";
import HomeVideo from "../sections/HomeVideo";
import HomeNews from "../sections/HomeNews";
import HomeTeam from "../sections/HomeTeam";
import Layout from "../layout/Layout";

const IndexPage = () => {
  // eslint-disable-next-line
  const appData = useContext(AppContext);

  return (
    <main>
      <Seo
        title={"Serendipity Group"}
        description={
          "At Serendipity we produce high content movies and TV series partnering with major brands like Disney and ABC. We air on major broadcast media."
        }
        language="en"
      />
      <Layout homePage>
        <Hero />
        <HomeBigText />
        <HomeVideo />
        <HomeNews />
        <HomeTeam />
      </Layout>
    </main>
  );
};

export default IndexPage;
