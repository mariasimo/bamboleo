import React, { useState, useRef, useEffect } from "react"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import styled from "styled-components"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Section = styled.section`
  border: 1px solid red;
  height: 400vh;
`

const Background = styled.div`
  border: 1px solid blue;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ChangingBgSection = () => {
  const ref = useRef(null)
  const { scrollY } = useViewportScroll()

  const [elTop, setElTop] = useState(null)
  const [elHeight, setElHeight] = useState(null)

  useEffect(() => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setElTop(window.pageYOffset + rect.top)

    setElHeight(window.pageYOffset + rect.top + rect.height)

    window.addEventListener("scroll", () => {
      console.log(scrollY.current, elTop + elHeight / 3, elTop + elHeight)
    })
  }, [ref])

  let opacity = useTransform(scrollY, [elTop + 5, elTop + elHeight / 3], [1, 0])

  let opacity2 = useTransform(
    scrollY,
    [elTop + elHeight / 3, elTop + elHeight],
    [1, 0]
  )

  return (
    <Section ref={ref} sx={{ position: "relative", background: "green" }}>
      {elTop && elHeight && (
        <>
          <motion.div
            sx={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              height: "100%",
              zIndex: "1",
            }}
            style={{
              opacity,
            }}
          >
            <Background sx={{ background: "gold" }}>Holi</Background>
          </motion.div>
          <motion.div
            sx={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              height: "100%",
            }}
            style={{
              opacity: opacity2,
            }}
          >
            <Background sx={{ background: "white" }}>Holi</Background>
          </motion.div>
        </>
      )}
    </Section>
  )
}

export default ChangingBgSection
