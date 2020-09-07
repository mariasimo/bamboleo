import React, { useState, useRef, useEffect } from "react"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import styled from "styled-components"

/** @jsx jsx */
import { jsx } from "theme-ui"

const Section = styled.section`
  height: 240vh;
`

const Container = styled(motion.div)`
  padding: 0 3rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

const Paragraph = styled.p`
  font-size: 4rem;
  margin: 0 0 4rem;
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
    [elTop, elTop + elHeight / 8, elTop + elHeight / 3, elBottom],
    ["#f9cb29", "#f2f2f2", "#f2f2f2", "#208122"]
  )

  return (
    <Section ref={ref}>
      {elTop && elBottom && (
        <Container
          style={{
            height: "100%",
            background: bgColor,
          }}
        >
          <div>
            <Paragraph>
              Caballo de danza vana
              <br />
              Porque es muy despreciado por eso
              <br />
              No te perdona llorar
            </Paragraph>
            <Paragraph>
              Ese amor llega asi esta manera
              <br />
              No tiene la culpa
              <br />
              Amor de compra y venta
              <br />
              Amor de en el pasado
            </Paragraph>
            <Paragraph>
              Bem, bem bem bem, bem bem bem
              <br />
              Bem, bem bem bem, bem bem bem
            </Paragraph>
          </div>
        </Container>
      )}
    </Section>
  )
}

export default ChangingBgSection
