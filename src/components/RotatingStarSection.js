/** @jsx jsx */
import { jsx } from "theme-ui"

import React, { useRef, useState, useEffect } from "react"
import { useTransform, useViewportScroll, motion } from "framer-motion"

const RotatingStarSection = () => {
  const ref = useRef()
  const { scrollY } = useViewportScroll()
  const [elementTop, setElementTop] = useState()
  const [elementHeight, setElementHeight] = useState()

  const y = useTransform(
    scrollY,
    [elementTop, elementTop + elementHeight / 4],
    [elementHeight / 10, 0]
  )

  const y2 = useTransform(
    scrollY,
    [elementTop + elementHeight / 40, elementTop + elementHeight / 2],
    [elementHeight / 8, 0]
  )

  const rotate = useTransform(
    scrollY,
    [elementTop + elementHeight / 2, elementTop + elementHeight],
    [0, 45]
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
          height: "60vh",
          width: "60vh",

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
    </div>
  )
}

export default RotatingStarSection
