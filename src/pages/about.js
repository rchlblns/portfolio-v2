import React from "react"
import { SiReact, SiGatsby, SiGraphql, SiJavascript, SiHtml5, SiCss3, SiSass } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>About Me</h1>
    <div>
      <img src="https://res.cloudinary.com/dimp0dvky/image/upload/v1600197942/portfolio-assets/three-edited_jpp8sa.png" style={{maxWidth: 350}} alt="Richelle"/>
    </div>
    
    <p>My stack right now includes React, Node, Express, Gatsby, GraphQL and  </p>
  </Layout>
)

export default AboutMe
