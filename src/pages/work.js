import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"
import { GoMarkGithub, GoLinkExternal } from "react-icons/go"

const Card = styled.div`
background: papayawhip;
padding: 1em;
margin: 1em auto;
border-radius: 15px;
`
const StyledLink = styled.a`
margin-right: 1em;
`

const Work = ({ data }) => (

  <Layout>
    <SEO title="Work" />
    <h1>My Work</h1>
    <p>Freelance work and personal projects</p>

    {data.allContentfulProjects.edges.map(edge =>
      <>
      <img src={edge.node.image.fluid.src} alt={edge.node.alt} />
      <Card>
        <h2>{edge.node.name}</h2>
        <p>Built with: {edge.node.stack}</p>
        <p>{edge.node.description.description}</p>
        <StyledLink href={edge.node.github} target="_blank" rel="noopener noreferrer"><GoMarkGithub /></StyledLink>
        <StyledLink href={edge.node.demo} target="_blank" rel="noopener noreferrer"><GoLinkExternal /></StyledLink> 
      </Card>
      </>
    )}
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default Work

export const query = graphql`
  query ProjectsQuery {
    allContentfulProjects {
      edges {
        node {
          demo
          description {
            description
          }
          github
          id
          image {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              src
            }
          }
          imgAlt
          name
          stack
        }
      }
    }
  }
`