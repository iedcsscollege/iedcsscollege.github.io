import * as React from "react";
import type { HeadFC } from "gatsby";
import Navbar from "../components/Navbar";
import Layout from "../components/Layout";

const IndexPage = () => {
  return <Layout>helloworld</Layout>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
