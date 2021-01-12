import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { Row, Col } from "react-grid-system"
import { LinkExternal } from "@styled-icons/boxicons-regular/LinkExternal"
import { Github } from "@styled-icons/boxicons-logos/Github"
import PageTransition from "gatsby-plugin-page-transitions"
import loadable from "@loadable/component"

const GifPlayer = loadable(() => import("react-gif-player"))

const GifWrapper = styled.div`
img {
  border-radius: 20px;
  width: 100%;
}
`

const StyledLink = styled.a`
margin-right: 1em;
`
const Lead = styled.p`
margin-top: -20px;
padding-bottom: 20px;
font-family: "Oxygen";
font-weight: 300;
font-size: 20px;
`

const StyledRow = styled(Row)`
margin: 5.5em;
display: flex;
align-items: center;
`

const StyledCol = styled(Col)`
margin: auto 0;
`

const Work = ({ data }) => {

  return (
    <PageTransition>
      <Layout>
        <SEO title="Work" />
        <h1 className="page-title">Work</h1>
        <Lead>A selection of my projects and freelance work, crafted with love</Lead>

        {data.allContentfulProjects.edges.map(edge =>
          <>
            {edge.node.orderNumber % 2 ? (
              <StyledRow>
                <StyledCol xs={12} lg={6}>
                  <Row>
                    <Col xs={9}>
                      <h2>{edge.node.name}</h2>
                    </Col>
                    <Col xs={3} style={{ display: "flex", justifyContent: "flex-end" }}>
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
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Built with: {edge.node.stack}</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>{edge.node.description.description}</p>
                    </Col>
                  </Row>
                </StyledCol>
                <Col xs={12} lg={6}>
                  <GifWrapper>
                    <GifPlayer
                      gif={edge.node.gif.fluid.src}
                      still={edge.node.thumbnail.fluid.src}
                    />
                  </GifWrapper>
                </Col>
              </StyledRow>
            ) : (
                <StyledRow>
                  <Col xs={12} lg={6}>
                    <GifWrapper>
                      <GifPlayer
                        gif={edge.node.gif.fluid.src}
                        still={edge.node.thumbnail.fluid.src}
                      />
                    </GifWrapper>
                  </Col>
                  <StyledCol xs={12} lg={6} style={{ justifyContent: "space-between" }}>
                    <Row >
                      <Col xs={9}>
                        <h2>{edge.node.name}</h2>
                      </Col>
                      <Col xs={3} style={{ display: "flex", justifyContent: "flex-end" }}>
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
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                    <p>Built with: {edge.node.stack}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                    <p>{edge.node.description.description}</p>
                      </Col>
                    </Row>

                  </StyledCol>
                </StyledRow>
              )}
          </>
        )}
      </Layout>
    </PageTransition>
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
          gif {
            fluid {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              src
            }
          }
          thumbnail {
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
          orderNumber
        }
      }
    }
  }
`