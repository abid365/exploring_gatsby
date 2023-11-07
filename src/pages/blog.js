import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Blog = () => {
  return (
    <Layout pageTitle={"My Blog Posts"}>
      <p>My Cool posts will go in here</p>
    </Layout>
  );
};

export const Head = () => <Seo title={"My blog post"} />;

export default Blog;
