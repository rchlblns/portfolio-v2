import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Work = ({ data }) => (

  <Layout>
    <SEO title="Work" />
    <h1>My Work!</h1>
    <p>I built these things!</p>

    {data.allProjectInfoJson.edges.map(edge =>
      <div class="card">
        <h2>{edge.node.name}</h2>
        <p>Built with: {edge.node.stack}</p>
        <p>{edge.node.description}</p>
      </div>
    )}
    {/* <Link to="/">Go back to the homepage</Link> */}
  </Layout>
)

export default Work

export const query = graphql`
  query ProjectsQuery {
    allProjectInfoJson {
      edges {
        node {
          name
          stack
          description
          links {
            demo
            github
          }
          id
        }
      }
    }
  }
`