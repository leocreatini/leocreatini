import React from 'react'

import Layout from '../components/Layout'
// import Image from '../components/Image'
import CenterCenter from '../components/CenterCenter'
import Card from '../components/Card'
import List from '../components/List'
import ListItem from '../components/ListItem'
import ListBorder from '../components/ListBorder'
import SEO from '../components/SEO'
import PartialSpinner from '../components/PartialSpinner'
import { InternalLink, ExternalLink } from '../components/Link'
import { H2 } from '../components/Typography'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CenterCenter>
      <Card.Circle width="20rem">
        <PartialSpinner size="5px" scale={1.075} timing="3000ms" />
        <PartialSpinner size="5px" scale={1.125} timing="2000ms" reverse />
        <Card.Body margin="3rem auto 0" width="14rem">
          <H2>Navigation</H2>
          <ListBorder />
          <List>
            <ListItem>
              <InternalLink to="/about">About</InternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://www.linkedin.com/in/leocreatini/">
                LinkedIn
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://twitter.com/leocreatini">
                Twitter
              </ExternalLink>
            </ListItem>
            <ListItem>
              <ExternalLink href="https://github.com/leocreatini">
                GitHub
              </ExternalLink>
            </ListItem>
          </List>
        </Card.Body>
      </Card.Circle>
    </CenterCenter>
  </Layout>
)

export default IndexPage
