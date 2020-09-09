/** @jsx jsx */
import { jsx } from "theme-ui"

import React, { useRef, useState, useEffect } from "react"
import { useTransform, useViewportScroll, motion } from "framer-motion"
import styled from "styled-components"

const RotatingStarSection = () => {
  const ref = useRef()
  const { scrollY } = useViewportScroll()
  const [elementTop, setElementTop] = useState()
  const [elementHeight, setElementHeight] = useState()

  const y = useTransform(
    scrollY,
    [elementTop, elementTop + elementHeight / 3],
    [elementHeight / 10, 0]
  )

  const y2 = useTransform(
    scrollY,
    [elementTop + elementHeight / 40, elementTop + elementHeight / 1.5],
    [elementHeight / 8, 0]
  )

  const rotate = useTransform(
    scrollY,
    [elementTop + elementHeight / 2, elementTop + elementHeight],
    [0, 75]
  )
  const x2 = useTransform(
    scrollY,
    [elementTop + elementHeight / 2, elementTop + elementHeight],
    [elementHeight, 30]
  )
  const x = useTransform(
    scrollY,
    [elementTop + elementHeight / 2, elementTop + elementHeight],
    [elementHeight * -1, -30]
  )

  useEffect(() => {
    if (!ref.current) return

    setElementTop(ref.current.offsetTop - ref.current.offsetHeight)
    setElementHeight(ref.current.offsetHeight)

    window.addEventListener("scroll", () => {
      console.log(y.current, elementTop, scrollY.current)
    })
  }, [ref])

  return (
    <div
      ref={ref}
      sx={{ background: "#000", height: "100vh", position: "relative" }}
    >
      <div
        sx={{
          background: "#E79FB9",
          height: "700px",
          width: "700px",
          clipPath: "circle(14.5rem at 50% 50%)",
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div sx={{ position: "absolute" }} style={{ y, rotate }}>
          <img src="./bold-star.svg" />
        </motion.div>
        <motion.div sx={{ position: "absolute" }} style={{ y: y2, rotate }}>
          <img src="./thin-star.svg" />
        </motion.div>
      </div>
      <div>
        <div sx={{ display: "flex", justifyContent: "center" }}>
          <Text initial={{ x: "-30vw" }} style={{ x }}>
            Bamboleo,
          </Text>
          <Text initial={{ x: "30vw" }} style={{ x: x2 }}>
            Bambolea
          </Text>
        </div>
      </div>
    </div>
  )
}

export default RotatingStarSection

const Text = styled(motion.h2)`
  color: #e79fb9;
  font-size: 8rem;
  font-family: Savate;
  margin: 0;
  padding-top: 250px;
  text-align: center;
`
