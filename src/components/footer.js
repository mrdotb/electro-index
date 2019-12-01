import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import "./footer.css"
import Fb from "../svg/facebook.svg"
import Soundcloud from "../svg/soundcloud.svg"

const Footer = ({ siteTitle }) => (
  <footer class="footer">

    <h1 class="footer__title"><Link to="/">{siteTitle}</Link></h1>

    <ul class="footer__nav">
      <li class="footer__spacer"></li>
      <li class="footer__link"><Link to="">credits</Link></li>
      <li class="footer__link"><Link to="">legal terms</Link></li>
    </ul>

    <ul class="footer__nav">
      <li class="footer__link"><Link to=""><Fb /></Link></li>
      <li class="footer__link"><Link to=""><Soundcloud /></Link></li>
    </ul>

  </footer>
)

export default Footer
