import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>Whoops! This page doesn&#39;t exist. <Link to={"/"}>Go home.</Link></p>

  </Layout>
)

export default NotFoundPage
