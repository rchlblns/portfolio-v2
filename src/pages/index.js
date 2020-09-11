import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi! I'm Richelle, a full stack developer in Houston, TX.</h1>
    {/* <p>I'm interested in creating simple solutions for complex problems.</p> */}
    <p>Current stack: React, Gatsby, GraphQL, Node.js</p>
    <p>View my resume here. And check out my work here!</p>
    <p>Have a question or want to say hi? Email me at </p>
    {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
