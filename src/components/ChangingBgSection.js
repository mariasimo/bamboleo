import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  createRef,
} from "react"
import {
  motion,
  useTransform,
  useViewportScroll,
  useElementScroll,
} from "framer-motion"
import styled from "styled-components"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 200vh;
  position: relative;
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
  height: 90vh;
`

const ChangingBgSection = () => {
  const [elementTop, setElementTop] = useState(null)
  const ref = useRef(null)
  const { scrollY } = useViewportScroll()

  const opacity = useTransform(
    scrollY,
    [elementTop, elementTop + elementTop / 5],
    [1, 0]
  )

  useLayoutEffect(() => {
    if (!ref.current) return
    setElementTop(ref.current.offsetTop)
  }, [ref])

  return (
    <Container ref={ref}>
      <motion.div
        initial={{ background: "#f9cb29" }}
        style={{
          opacity,
        }}
      >
        <Background>Holi</Background>
      </motion.div>
    </Container>
  )
}

export default ChangingBgSection
