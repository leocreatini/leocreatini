import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import PageLimit from '../PageLimit'
import { ExternalLink } from '../Link'
import Header from '../Header'
import './styles.css'
import CenterCenter from '../CenterCenter'
import Footer from '../Footer.js'

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
    <PageLimit>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main>{children}</main>

      <Footer>
        <CenterCenter>
          Made by Leo. 2019. View code on{' '}
          <ExternalLink href="https://github.com/leocreatini/leocreatini">
            GitHub
          </ExternalLink>
          .
        </CenterCenter>
      </Footer>
    </PageLimit>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
