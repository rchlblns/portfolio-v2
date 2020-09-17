import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

// const Photo = styled.div`

// `

// const Bio = styled.div`

// `

const AboutMe = () => (
  <Layout>
    <SEO title="About Me" />
    <h1>Origin Story</h1>
    <div>
      <img src="https://res.cloudinary.com/dimp0dvky/image/upload/v1600197942/portfolio-assets/three-edited_jpp8sa.png"
        style={{ maxWidth: 350 }}
        alt="Richelle" />
    </div>

    <div>
      <p>I started tinkering with web technologies in high school, customizing Xanga and Myspace profiles and compiling programs written in Notepad. My professional path took me through the healthcare and data industries, but the common thread between them all is that they allowed me to pursue my passion for solving problems and helping people.</p>

      <p>As a developer, I love utilizing professional strengths in multitasking, creative thinking, and collaboration with a strong attention to detail (and a little gumption) to elevate user experiences on the web. When I'm not coding, you can find me baking, gaming, and taking walks with my pup.</p>

      <p>Currently, my stack is React, modern Javascript, Node.js, Express, Gatsby, and GraphQL. View my resume for a full list of my skills and experience.</p>
    </div>

  </Layout>
)

export default AboutMe
