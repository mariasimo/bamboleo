/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"

import React, { useRef, useState, useLayoutEffect, useEffect } from "react"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import styled from "styled-components"
import CircleBgSection from "../components/CircleBgSection"
import ChangingBgSection from "../components/ChangingBgSection"
import RotatingStarSection from "../components/RotatingStarSection"

const Section = styled.section`
  padding-bottom: 20vh;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 90vh;
  position: relative;
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

const IndexPage = () => {
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <Section
          sx={{
            color: "primary",
            background: "#000",
          }}
        >
          <Inner>
            <MainTitle>
              Bamboleo, <span>bambolea</span>
            </MainTitle>
          </Inner>
        </Section>

        <CircleBgSection />
        <ChangingBgSection />
        <RotatingStarSection />
      </Layout>
    </>
  )
}

export default IndexPage
