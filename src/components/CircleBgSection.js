/** @jsx jsx */
import { jsx } from "theme-ui"

import React, { useRef, useState, useEffect } from "react"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  position: relative;
`

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: #f9cb29;
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

const Container = styled.div`
  height: 200vh;
`

const StickyBox = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  width: 100%;
  height: 100vh;
`

const CircleBgSection = () => {
  const innerElRef = useRef(null)
  const containerElRef = useRef(null)

  const { scrollY } = useViewportScroll()
  const [containerElTop, setContainerElTop] = useState(null)
  const [containerElBottom, setContainerElBottom] = useState(null)
  const [innerElHeight, setInnerElHeight] = useState(null)

  useEffect(() => {
    if (!containerElRef.current || !innerElRef.current) return

    const setValues = () => {
      setContainerElTop(
        window.pageYOffset + containerElRef.current.getBoundingClientRect().top
      )
      setContainerElBottom(
        window.pageYOffset +
          containerElRef.current.getBoundingClientRect().bottom
      )
      setInnerElHeight(innerElRef.current.getBoundingClientRect().height)
    }

    setValues()
    document.addEventListener("load", setValues)
    window.addEventListener("resize", setValues)

    return () => {
      document.removeEventListener("load", setValues)
      window.removeEventListener("resize", setValues)
    }
  }, [containerElRef, innerElRef])

  const offset = -2
  const transformInitialValue = containerElTop + innerElHeight / offset
  const transformFinalValue = containerElBottom - innerElHeight

  let transformValue = useTransform(
    scrollY,
    [transformInitialValue, transformFinalValue],
    [0, 1000]
  )

  return (
    <>
      <Container ref={containerElRef}>
        <StickyBox ref={innerElRef}>
          {containerElTop &&
            containerElBottom &&
            innerElHeight &&
            transformValue && (
              <Section
                sx={{
                  color: "primary",
                  background: "#000",
                }}
              >
                <svg
                  sx={{
                    position: "absolute",
                    width: "100vw",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <defs>
                    <clipPath id="clippath">
                      <motion.circle
                        cx="50%"
                        cy="50%"
                        initial={{ r: "30" }}
                        style={{
                          r: transformValue,
                        }}
                      ></motion.circle>
                    </clipPath>
                  </defs>
                </svg>
                <Background sx={{ clipPath: "url(#clippath)" }}>
                  <Title
                    sx={{
                      color: "#f9cb29",
                      textShadow:
                        "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
                    }}
                  >
                    Ese amor llega así de esa manera
                  </Title>
                  <Paragraph sx={{ color: "text" }}>
                    No tiene la culpa
                  </Paragraph>
                </Background>
                <Title>Ese amor llega así de esa manera</Title>
                <Paragraph>No tiene la culpa</Paragraph>
              </Section>
            )}
        </StickyBox>
      </Container>
    </>
  )
}

export default CircleBgSection
