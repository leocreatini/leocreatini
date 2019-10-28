import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { H1, P } from '../components/Typography'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <H1>NOT FOUND</H1>
    <P>You just hit a route that doesn&#39;t exist... the sadness.</P>
  </Layout>
)

export default NotFoundPage
