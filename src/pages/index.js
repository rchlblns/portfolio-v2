import React from "react"
import { Link, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTransition from "gatsby-plugin-page-transitions"

const rotate = keyframes`
  0% { transform: rotate( 0.0deg) }
  10% { transform: rotate(14.0deg) }
  /* the following five values can be played with to make the waving more or less extreme */  
  20% { transform: rotate(-8.0deg) }
  30% { transform: rotate(14.0deg) }
  40% { transform: rotate(-4.0deg) }
  50% { transform: rotate(10.0deg) }
  60% { transform: rotate( 0.0deg) }
  /* reset for the last half to pause */  
  100% { transform: rotate( 0.0deg) }
}
`

const Rotate = styled.div`
  animation-name: ${rotate}; 
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  display: inline-block;
  transform-origin: 70% 70%;
`

const Icon = styled.img`
  display: inline;
  margin-bottom: 0;
  height: 2.4rem;
`

const Pitch = styled.p`
margin-bottom: 1.78rem;
font-size: 1.2rem;
line-height: 1.78;
`

const LastPitch = styled.p`
margin-bottom: 0;
font-size: 1.2rem;
line-height: 1.78;
`

const IndexPage = ({ data }) => {
  return (
    <PageTransition>
      <Layout>
        <SEO title="Home" />

        <h1 className="page-title">Hi! <Rotate><Icon src={data.cloudinaryMedia.secure_url} alt={data.cloudinaryMedia.context.custom.alt} /></Rotate> I'm Richelle - a full stack developer based in Houston, TX.</h1>

        <Pitch>I strive to create clean, responsive, and user-focused applications from end to end.</Pitch>
        <Pitch>While you're here, <Link to="/about">read more about my journey</Link> and <Link to="/work">check out my work.</Link></Pitch>
        <LastPitch>Or, drop me a line at <a href="#mailgo" data-address="hello" data-domain="richelleb.dev">hello@richelleb.dev.</a></LastPitch>
      </Layout>
    </PageTransition>
  )
}

export default IndexPage

export const query = graphql`
query IconQuery {
  cloudinaryMedia(public_id: {eq: "portfolio-assets/waving-hand_ekvzkh"}) {
    secure_url
    context {
      custom {
        alt
      }
    }
  }
} 
`

