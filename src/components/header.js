import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
  margin: 3rem auto;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Menu = styled.nav`
  width: 100%;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style-type: none;
    justify-content: space-between;
  }
`

const Header = () => (
  <HeaderWrapper>
    <Menu>
      <ul>
        <li>
          <a>Secuoyas 19 años</a>
        </li>
        <li>
          <a>Qué es esto</a>
        </li>
        <li>
          <a>Github Repo</a>
        </li>
      </ul>
    </Menu>
  </HeaderWrapper>
)

export default Header
