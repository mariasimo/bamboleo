/** @jsx jsx */
import { jsx } from "theme-ui"

import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 90vh;
`

const MainTitle = styled.h1`
  font-family: "Savate";
  font-size: 8rem;
  text-transform: uppercase;
  letter-spacing: -0.5rem;
  line-height: 1.1;
  max-width: 640px;
  margin-left: -7.5rem;
  padding-bottom: 4rem;

  span {
    display: flex;
    text-indent: 7.5rem;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section
      sx={{
        color: "primary",
        background: "#000",
      }}
    >
      <MainTitle>
        Bamboleo, <span>bambolea</span>
      </MainTitle>
    </Section>
  </Layout>
)

export default IndexPage
