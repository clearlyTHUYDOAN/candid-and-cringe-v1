import React from "react"
import styled from "styled-components"

import emailIcon from "../images/mail.png"
import twitterIcon from "../images/twitter.png"
import instagramIcon from "../images/instagram.png"
import patreonIcon from "../images/patreon.png"

const Footer = styled.footer`
  display: flex;
  justify-content: center;

  background-color: #324d4c;
  padding-top: 50px;
  padding-bottom: 50px;
`

const Link = styled.a`
  box-shadow: none;
`
const SocialIcon = styled.img`
  margin: 0;
`

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
`

class FooterNavigation extends React.Component {
  render() {
    return (
      <Footer>
        <SocialLinksContainer>
          <Link
            href="mailto:hi@candidandcringe.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src={emailIcon} alt="Mail icon" height={35} />
          </Link>
          <Link href="https://twitter.com/candidandcringe">
            <SocialIcon src={twitterIcon} alt="Twitter icon" height={35} />
          </Link>
          <Link href="https://www.instagram.com/candidandcringe/">
            <SocialIcon src={instagramIcon} alt="Instagram icon" height={35} />
          </Link>
          <Link href="https://www.patreon.com/candidandcringe">
            <SocialIcon src={patreonIcon} alt="Patreon icon" height={35} />
          </Link>
        </SocialLinksContainer>
      </Footer>
    )
  }
}

export default FooterNavigation
