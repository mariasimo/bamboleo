import React, { useState, useRef, useEffect } from "react"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import styled from "styled-components"
import CircleBgSection from "./CircleBgSection"

const Section = styled.section`
  height: 400vh;
`

const ChangingBgSection = ({ children }) => {
  const ref = useRef(null)
  const { scrollY } = useViewportScroll()
  const [elTop, setElTop] = useState(null)
  const [elBottom, setElBottom] = useState(null)
  const [elHeight, setElHeight] = useState(null)

  useEffect(() => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setElTop(ref.current.offsetTop)

    setElBottom(
      ref.current.offsetTop + ref.current.offsetHeight - window.innerHeight
    )

    setElHeight(rect.height)
    // window.addEventListener("scroll", () => {
    //   console.log(scrollY.current, rect.height)
    // })
  }, [ref])

  let bgColor = useTransform(
    scrollY,
    [elTop, elTop + elHeight / 1.5, elBottom],
    ["#f9cb29", "#ffffff", "#3F9C43"]
  )

  return (
    <Section ref={ref}>
      {elTop && elBottom && (
        <motion.div
          style={{
            height: "100%",
            background: bgColor,
          }}
        >
          <CircleBgSection bgColor={bgColor} />
        </motion.div>
      )}
    </Section>
  )
}

export default ChangingBgSection
