import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import PortfolioPic from "../components/porfolio-pic"

// const FlexContainer = styled.div`
//   display: flex;
//   &.flex-child {
//     flex: 1;
//   }
// `


const AboutMe = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>Orgin Story</h1>
    <div>
      <PortfolioPic />
    </div>

    <div>
      <p>I started tinkering with web technologies in high school, customizing Xanga and Myspace profiles and compiling programs written in Notepad. My professional path took me through the healthcare and data industries, but the common thread between them all is that they allowed me to pursue my passion for solving problems and helping people.</p>

      <p>As a developer, I love utilizing professional strengths in multitasking, adaptability, creative thinking, and collaboration with a strong attention to detail (and a little gumption) to elevate user experiences on the web. My current stack is React, modern Javascript, Node.js, Gatsby, and GraphQL. <Link href="">View my resume</Link> for a full list of my skills and experience.</p>

      <p>When I'm not coding, you can find me baking, gaming, and taking walks with my pup.</p>
    </div>

  </Layout>
)

export default AboutMe
