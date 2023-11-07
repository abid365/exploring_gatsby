import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle={"About page"}>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export const Head = () => (
  <>
    <Seo title={"About page"} />
    <meta name="description" content="your description" />
  </>
);

export default AboutPage;
