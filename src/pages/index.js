import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import feature from "../images/feature01.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="History" />
    <article>
      <img src={feature} alt="" />
      <h1>the Roland<span>TR-808</span></h1>
      <ul>
        <li>Iconic hardware</li>
        <li>~ 3mn read</li>
      </ul>
      <p>In 1980, Roland released the TR-808, its first fully programmable drum machine. Fully programmable becase 2 years earlier Roland released its first programmable drum machine, the CR-78, which also the first drum machine to feature a microprocessor and user-controlled accents on specifics beats. The TR-808 improved upon the CR-78 by having a better front panel for easier real-time programming, volume knobs for each individual voice, multiple audio outputs, and superior sounds, which were created using analog circuits. Let's tune into the raw samples of the electro beast.
      </p>
      <ul>
        <li>Bass Drum</li>
        <li>Snare Drum</li>
        <li>Low Tom</li>
      </ul>
      <blockquote>
        <header>
          Words from <cite title="Ikutaro Kakehashi">Ikutaro Kakehashi (Roland founder)</cite> about the TR-808
        </header>
        <p>It was a bright cold day in April, and the clocks were striking thirteen. It was a bright cold day in April, and the clocks were striking thirteen. It was a bright cold day in April, and the clocks were striking thirteen.</p>
      </blockquote>
    </article>
  </Layout>
)

export default IndexPage
