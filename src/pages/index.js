import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi hello</h1>
    <p>I'm Richelle</p>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
