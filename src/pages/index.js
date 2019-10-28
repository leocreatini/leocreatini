import React from 'react'

import Layout from '../components/Layout'
// import Image from '../components/Image'
import CenterCenter from '../components/CenterCenter'
import UnorderedList from '../components/UnorderedList'
import { CircleCard } from '../components/Card'
import ListItem from '../components/ListItem'
import SEO from '../components/SEO'
import PartialSpinner from '../components/PartialSpinner'
import { InternalLink, ExternalLink } from '../components/Link'
import { H2 } from '../components/Typography'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CenterCenter>
      <CircleCard width="20rem">
        <PartialSpinner size="5px" scale={1.075} timing="3000ms" />
        <PartialSpinner size="5px" scale={1.125} timing="2000ms" reverse />
        <H2>Navigation</H2>
        <UnorderedList>
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
        </UnorderedList>
      </CircleCard>
    </CenterCenter>
  </Layout>
)

export default IndexPage
