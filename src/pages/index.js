import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import NavigationMenu from "../components/navigationMenu"
import FooterNavigation from "../components/footerNavigation"
import "../components/styles.css"
import deepJadeLeafBackground from "../images/dark-hero-large.jpg"
import multiEpisodePlayerBackground from "../images/multi-episode-player-background.jpg"
import playerPlaceholder from "../images/player-placeholder.jpg"
import sageLeafBackground from "../images/sage-leaf-background.jpg"

const DeepJadeLeafBackground = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;

  background-image: url(${deepJadeLeafBackground});
  background-size: cover;
`

const ContentContainer = styled.div`
  padding-bottom: 20px;

  font-family: "Ogg-Regular";
  font-size: 3.5em;
  text-align: center;
  color: white;
`

const CTA = styled.a`
  padding: 2px 30px;

  color: white;
  background-color: #8c4e2f;
  box-shadow: none;

  font-size: 1.2em;
  text-align: center;
  border-radius: 9px;

  &:hover {
    background-color: #c3754d;
  }
}
`

const MultiEpisodePlayerSection = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;

  background-image: url(${multiEpisodePlayerBackground});
  background-size: cover;
`

const Header = styled.h1`
  font-family: "Ogg-Regular";
  font-size: 4.5em;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 100;

  padding-right: 10em;
`

const SageLeafBackground = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-weight: 100;
  color: white;

  padding-bottom: 5%;

  background-image: url(${sageLeafBackground});
  background-size: cover;
`

const SubheadingContainer = styled.div`
  width: 60%;
`

const Subheading = styled.h2`
  font-family: "Ogg-Regular";
  font-size: 3em;
  font-weight: 100;
`
const SubtextContainer = styled.div`
  padding-bottom: 2%;
  width: 50%;
  font-size: 1.2em;
`

const EmailSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;

  text-align: center;
`

const EmailCTAText = styled.p`
  width: 40%;
  margin: 0;
  padding-bottom: 20px;

  font-family: "Ogg-Regular";
  font-size: 1.5em;
  font-weight: 100;
`

const PodcastAvailabilityText = styled.sub`
  font-size: 0.8em;
  font-weight: 100;
`

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <SEO title="Home" />
        <NavigationMenu aria-label="Site navigation" />
        <DeepJadeLeafBackground>
          <ContentContainer>
            A podcast breaking barriers
            <br />
            one candid conversation
            <br />
            at a time
          </ContentContainer>
          <CTA href="/episodes/">LISTEN NOW</CTA>
        </DeepJadeLeafBackground>
        <MultiEpisodePlayerSection>
          <TextContainer>
            <Header>
              Candid
              <br />& Cringe
            </Header>
            a solo podcast with a <br />
            conversational tone - a reflective, <br />
            (sometimes funny) story-telling and <br />
            thought-provoking experience.
            <CTA href="/episodes/">More Episodes</CTA>
          </TextContainer>
          <img
            src={playerPlaceholder}
            alt="Sample multi-episode player"
            height={400}
          />
        </MultiEpisodePlayerSection>
        <SageLeafBackground>
          <SubheadingContainer>
            <Subheading>
              I’m a social media marketer
              <br />
              turned developer looking to learn
              <br />& grow with my community
            </Subheading>
          </SubheadingContainer>
          <SubtextContainer>
            Tune in to my bi-weekly podcast where I explore topics like
            <br />
            mental health, uplifting women of colour, women in tech, early
            <br />
            career developers, people pivoting in their careers, folks in the
            <br />
            accessibility & disability communities and so much more!
          </SubtextContainer>
          <CTA href="/about/">ABOUT C&C</CTA>
        </SageLeafBackground>
        <EmailSection>
          <EmailCTAText>
            Click here to listen to Candid & Cringe now, for collaborations and
            inquiries please email me at hi@candidandcringe.com
          </EmailCTAText>
          <PodcastAvailabilityText>
            Also available on Spotify and Apple Podcasts
          </PodcastAvailabilityText>
        </EmailSection>
        <section>
          <p>Subscribe to get new episodes directly to your mailbox</p>
          <form>
            <input type="email" aria-label="Email" />
            <CTA>Submit</CTA>
          </form>
        </section>
        <FooterNavigation />
      </>
    )
  }
}

export default IndexPage
