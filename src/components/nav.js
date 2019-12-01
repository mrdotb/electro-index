import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import "./nav.css"
import History from "../svg/history.svg"
import Features from "../svg/features.svg"
import Artists from "../svg/artists.svg"
import Places from "../svg/places.svg"
import Releases from "../svg/releases.svg"
import Share from "../svg/share.svg"

const Nav = () => (
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__link nav__link--odd"><Link to=""><History />History</Link></li>
      <li class="nav__link nav__link--even"><Link to=""><Features />Features</Link></li>
      <li class="nav__link nav__link--odd"><Link to=""><Artists />Artists</Link></li>
      <li class="nav__link nav__link--even"><Link to=""><Places />Places</Link></li>
      <li class="nav__link nav__link--odd"><Link to=""><Releases />Releases</Link></li>
      <li class="nav__link nav__link--even"><Link to=""><Share />Contact</Link></li>
    </ul>
  </nav>
)

export default Nav
