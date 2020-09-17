import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactFreezeframe from 'react-freezeframe'
import styled from "styled-components"
import { GoMarkGithub, GoLinkExternal } from "react-icons/go"

const StyledCard = styled.div`
  background: rgba(250,223,215, 0.6);
  padding: 20px;
  margin-top: 45px;
  margin-bottom: 3em;
  border-radius: 15px;
  box-shadow: 
    -8px 8px 12px 0 rgba(0, 0, 0, 0.3),
    12px -12px 40px rgba(255, 255, 255, 0.25);
`

const ImgWrapper = styled.div`
  margin-top: -45px;
  &.ff-container.ff-responsive .ff-image, .ff-container.ff-responsive .ff-canvas {
    border-radius: 10px;
    box-shadow: 
    -8px 8px 12px 0 rgba(0, 0, 0, 0.3),
    12px -12px 10px rgba(255, 255, 255, 0.25);
  }
`

const CardInfo = styled.div`
  margin-top: -40px;
  margin-bottom: 10px;
`

const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: inherit;
  // box-shadow: 
  //   -8px 8px 12px 0 rgba(0, 0, 0, 0.3),
  //   12px -12px 10px rgba(255, 255, 255, 0.25);
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
      <StyledCard
        key={edge.node.id}
      >
        <ImgWrapper>
          <ReactFreezeframe
            options={{
              trigger: "hover"
            }}
          >
            <CardImg src={edge.node.image.fluid.src} alt={edge.node.imageAlt} />
          </ReactFreezeframe>
        </ImgWrapper>
        <CardInfo>
          <h2>{edge.node.name}</h2>
          <p>Built with: {edge.node.stack}</p>
          <p>{edge.node.description.description}</p>
          <StyledLink href={edge.node.github} target="_blank" rel="noopener noreferrer"><GoMarkGithub size={32}/></StyledLink>
          <StyledLink href={edge.node.demo} target="_blank" rel="noopener noreferrer"><GoLinkExternal size={32}/></StyledLink>
        </CardInfo>
      </StyledCard>
    )}
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default Work

export const query = graphql`
  query ProjectsQuery {
    allContentfulProjects(sort: {fields: orderNumber}) {
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