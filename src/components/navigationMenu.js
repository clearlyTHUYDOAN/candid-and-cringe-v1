import React from "react"
import styled from "styled-components"
import logo from "../images/flower-logo.png"

const NavigationBar = styled.nav`
  background-color: #e8dece;
  display: flex;
  justify-content: center;
  padding-top: 1%;
  padding-bottom: 1%;
`

const InnerContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

const Link = styled.a`
  color: black;
  box-shadow: none;

  &:hover {
    color: #8c4d2e;
  }
`

const Logo = styled.img`
  margin: 0;
`

class NavigationMenu extends React.Component {
  render() {
    return (
      <NavigationBar aria-label="Site navigation">
        <InnerContainer>
          <Link href="/about/">ABOUT</Link>
          <Link href="/episodes/">EPISODES</Link>
          <Link href="/">
            <Logo src={logo} height="100" />
          </Link>
          <Link href="https://www.patreon.com/candidandcringe">PATREON</Link>
          <Link href="/subscribe/">SUBSCRIBE</Link>
        </InnerContainer>
      </NavigationBar>
    )
  }
}

export default NavigationMenu
