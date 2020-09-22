import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col } from "react-grid-system"
import PortfolioPic from "../components/porfolio-pic"


const AboutMe = ({ data }) => {
  return (
    <Layout>

      <SEO title="About Me" />
      <h1 className="page-title">About Me</h1>

      <Row >
        <Col xs={12} md={5}>
          <PortfolioPic />
        </Col>

        <Col xs={12} md={7}>
          <div>
            <p>I started tinkering with web technologies in high school, customizing Xanga and Myspace profiles and compiling programs written in Notepad. My professional path took me through the healthcare and data industries, but the common thread between them all is that they allowed me to pursue my passion for solving problems and helping people.</p>

            <p>As a developer, I love utilizing professional strengths in multitasking, adaptability, creative thinking, and collaboration with a strong attention to detail (and a little gumption) to elevate the digital experience. My current stack is React, modern Javascript, Node.js, Gatsby, and GraphQL. For a full list of my skills and experience, <a href={data.file.publicURL} target="_blank" rel="noopener noreferrer">view my resume.</a></p>

            <p>When I'm not coding, you can find me baking, gaming, and taking walks with my pup.</p>
          </div>
        </Col>
      </Row>

    </Layout>
  )
}

export default AboutMe

export const query = graphql`
  query PDFQuery {
    file(name: {eq: "richelle-billones-resume"}) {
      publicURL
      name
      extension
    }
  }
`
