import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Section = styled.section`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MainTitle = styled.h1`
  font-family: "Savate";
  font-size: 8rem;
  text-transform: uppercase;
  letter-spacing: -0.75rem;
  line-height: 1;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
      <MainTitle>Bamboleo, bambolea</MainTitle>
    </Section>
  </Layout>
)

export default IndexPage
