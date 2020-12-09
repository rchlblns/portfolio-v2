import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const StyledImg = styled.img`
  width: 400px;
  border-radius: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const PortfolioPic = () => {
  const data = useStaticQuery(graphql`
    query PhotoQuery {
      cloudinaryMedia(public_id: {eq: "portfolio-assets/three-edited_sibpwy"}) {
        secure_url
        context {
          custom {
            alt
          }
        }
      }
    }
  `)

  return <StyledImg src={data.cloudinaryMedia.secure_url} alt={data.cloudinaryMedia.context.custom.alt}/>
}

export default PortfolioPic
