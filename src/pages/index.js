/** @jsx jsx */
import { jsx } from "theme-ui"

import React, { useRef } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion } from "framer-motion"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 90vh;
  position: relative;

  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background: #f9cb29;
  }
`

const MainTitle = styled.h1`
  font-family: "Savate";
  font-size: 8rem;
  text-transform: uppercase;
  letter-spacing: -0.25rem;
  line-height: 1.2;
  max-width: 640px;
  margin-left: -7.5rem;
  padding-bottom: 4rem;

  span {
    display: flex;
    text-indent: 7.5rem;
  }
`

const Title = styled.h2`
  font-family: "Savate";
  font-size: 6rem;
  line-height: 1.2;
`

const Paragraph = styled.p`
  font-family: "vg5000";
  font-size: 1.5rem;
  text-stroke: 0.2rem;
  line-height: 1.2;
`

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 50% 50%)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 50% 50%)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
}

const CircleBgSection = () => (
  <Section
    sx={{
      color: "primary",
      background: "#000",
    }}
  >
    <motion.div
      className="background"
      variants={sidebar}
      initial={false}
      animate="closed"
    >
      <Title sx={{ color: "red", position: "absolute", top: "19%" }}>
        Ese amor llega así de esa manera
      </Title>
    </motion.div>

    <Title>Ese amor llega así de esa manera</Title>
    <Paragraph>No tiene la culpa</Paragraph>
  </Section>
)

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
    <CircleBgSection />
  </Layout>
)

export default IndexPage
