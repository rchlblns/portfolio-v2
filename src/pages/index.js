import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h1 className="page-title">Hi! I'm Richelle, a full stack developer based in Houston, TX.</h1>

    <p>I strive to create clean, responsive, and user-focused applications from end to end.</p>
    <p>While you're here, <Link to="/about">read more about me </Link> and <Link to="/work">check out my work.</Link></p>
    <p>Have a question? Get in touch with me at <a href="#mailgo" data-address="rbillones921" data-domain="gmail.com">rbillones921@gmail.com.</a></p>
  </Layout>
)

export default IndexPage


