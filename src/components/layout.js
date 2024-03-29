/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"

import "./fonts.css"
import "./layout.css"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div class="rack">
      <div class="rack__first">
        <Header siteTitle={data.site.siteMetadata.title} />
        <Nav />
      </div>
      <main class="rack__second">{children}</main>
    </div>
    <div class="rack">
      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
