import React from "react"
import styled from "styled-components"

import SEO from "../components/seo"
import NavigationMenu from "../components/navigationMenu"
import "../components/styles.css"
import hero from "../images/dark-hero-large.jpg"

const TopHeroSection = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;

  background-image: url(${hero});
  background-size: cover;
`

const ContentContainer = styled.div`
  padding-bottom: 20px;

  font-family: "Ogg-Regular";
  font-size: 3.5em;
  text-align: center;
  color: white;
`

const ListenNowCTA = styled.a`
  padding: 2px 30px;

  color: white;
  background-color: #8c4e2f;
  box-shadow: none;

  font-size: 1.2em;
  text-align: center;
  border-radius: 9px;
}
`

class IndexPage extends React.Component {
  render() {
    return (
      <>
        <SEO title="Home" />
        <NavigationMenu aria-label="Site navigation" />
        <TopHeroSection>
          <ContentContainer>
            A podcast breaking barriers
            <br />
            one candid conversation
            <br />
            at a time
          </ContentContainer>
          <ListenNowCTA>LISTEN NOW</ListenNowCTA>
        </TopHeroSection>
        <main>
          <h1 class="test">Candid & Cringe</h1>
          <p>
            a solo podcast with a conversational tone - a reflective, (sometimes
            funny) story-telling and thought-provoking experience.
          </p>
        </main>
        <button>More Episodes</button>
        <section>
          <h2 class="test">
            I’m a social media marketer turned developer looking to learn & grow
            with my community
          </h2>
          <p>
            Tune in to my bi-weekly podcast where I explore topics like mental
            health, uplifting women of colour, women in tech, early career
            developers, people pivoting in their careers, folks in the
            accessibility & disability communities and so much more!
          </p>
          <button>About C&C</button>
          <button>Play Trailer</button>
        </section>
        <section>
          <p>
            Click here to listen to Candid & Cringe now, for collaborations and
            inquiries please email me at hi@candidandcringe.com
          </p>
          <sub>Also available on Spotify and Apple Podcasts</sub>
        </section>
        <section>
          <p>Subscribe to get new episodes directly to your mailbox</p>
          <form>
            <input type="email" aria-label="Email" />
            <button>Submit</button>
          </form>
        </section>
        <footer>
          <ul>
            <li>
              <a
                href="mailto:hi@candidandcringe.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email
              </a>
            </li>
            <li>
              <a href="https://twitter.com/candidandcringe">Twitter</a>
            </li>
            <li>
              <a href="https://www.instagram.com/candidandcringe/">Instagram</a>
            </li>
            <li>
              <a href="https://www.patreon.com/candidandcringe">Patreon</a>
            </li>
          </ul>
        </footer>
      </>
    )
  }
}

export default IndexPage
