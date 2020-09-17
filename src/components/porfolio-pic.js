import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledImg = styled.img`
  width: 500px;
`

const PortfolioPic = () => {
  const data = useStaticQuery(graphql`
    query PhotoQuery {
      cloudinaryMedia(public_id: {eq: "portfolio-assets/three-edited_jpp8sa"}) {
        url
        context {
          custom {
            alt
          }
        }
      }
    }
  `)

  return <StyledImg src={data.cloudinaryMedia.url} alt={data.cloudinaryMedia.context.custom.alt}/>
}

export default PortfolioPic
