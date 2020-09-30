import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import loadable from "@loadable/component"
import styled from "styled-components"
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal"
import { Github } from "@styled-icons/boxicons-logos/Github"

const StyledCard = styled.div`
background: rgba(255,255,255,0.9);
padding: 20px;
margin-top: 45px;
margin-bottom: 3em;
border-radius: 12px;
box-shadow: 
0 1px 3px rgba(0,0,0,0.12), 
0 1px 2px rgba(0,0,0,0.24);
`
const CardTitle = styled.h1`
margin-top: -50px;
text-align: left;
`

const ImgWrapper = styled.div`
width: 80%;
margin: 0 auto;
margin-top: 30px;
&.ff-container.ff-responsive .ff-image, .ff-container.ff-responsive .ff-canvas {
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.30);
}
`

const CardInfo = styled.div`
margin-top: 10px;
margin-bottom: 10px;
`

const CardImg = styled.img`
width: 100%;
object-fit: cover;
border-radius: 12px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`

const StyledLink = styled.a`
  margin-right: 1em;
`
const Lead = styled.p`
margin-top: -20px;
padding-bottom: 20px;
`

const ReactFreezeframe = loadable(() => import("react-freezeframe"))

const Work = ({ data }) => {

  return (
    <Layout>
      <SEO title="Work" />
      <h1 className="page-title">Work</h1>
      <Lead>A selection of my projects and freelance work</Lead>

      {data.allContentfulProjects.edges.map(edge =>
        <StyledCard
          key={edge.node.id}
          className="card"
        >
          <CardTitle>{edge.node.name}</CardTitle>

          <ReactFreezeframe
            options={{
              trigger: "hover"
            }}
          >
            <ImgWrapper>
              <CardImg src={edge.node.image.fluid.src} alt={edge.node.imageAlt} />
            </ImgWrapper>
          </ReactFreezeframe>
          <CardInfo>
            <p>Built with: {edge.node.stack}</p>
            <p>{edge.node.description.description}</p>

            {/* only displays repo link for public projects */}
            {edge.node.publicRepo === true ? (
              <>
                <StyledLink href={edge.node.github} target="_blank" rel="noopener noreferrer"><Github size={32} /></StyledLink>
                <StyledLink href={edge.node.demo} target="_blank" rel="noopener noreferrer"><LinkExternal size={32} /></StyledLink>
              </>
            ) : (
                <StyledLink href={edge.node.demo} target="_blank" rel="noopener noreferrer"><LinkExternal size={32} /></StyledLink>
              )
            }
          </CardInfo>
        </StyledCard>
      )}
    </Layout>
  )


}

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
          publicRepo
        }
      }
    }
  }
`