import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Icon = styled.img`
display: inline;
margin-bottom: 0;
height: 2.5rem;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <h1 className="page-title">Hi <Icon src={data.cloudinaryMedia.url} alt={data.cloudinaryMedia.context.custom.alt}/> I'm Richelle, a full stack developer based in Houston, TX.</h1>

      <p>I strive to create clean, responsive, and user-focused applications from end to end.</p>
      <p>While you're here, <Link to="/about">read more about me </Link> and <Link to="/work">check out my work.</Link></p>
      <p>Have a question? Get in touch with me at <a href="#mailgo" data-address="rbillones921" data-domain="gmail.com">rbillones921@gmail.com.</a></p>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
query IconQuery {
  cloudinaryMedia(public_id: {eq: "portfolio-assets/waving-hand_ekvzkh"}) {
    url
    context {
      custom {
        alt
      }
    }
  }
} 
`

