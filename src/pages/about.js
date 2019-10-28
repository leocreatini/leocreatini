import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Card from '../components/Card'
import FlexBox from '../components/FlexBox'
import { H2, P } from '../components/Typography'
import { InternalLink } from '../components/Link'
import CenterCenter from '../components/CenterCenter'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <CenterCenter>
      <Card width="35rem">
        <FlexBox alignItems="center" justifyContent="space-between">
          <H2>About</H2>
          <InternalLink to="/">Go Back</InternalLink>
        </FlexBox>
        <P>High 20's leveled Web Dev. Human.</P>
        <P>
          Born in Buenos Aires, I came to United States when I was four. A
          tinkerer at heart, I grew up with legos, games, and naturally evolved
          into design and engineering.
        </P>
        <P>
          My passion lies in learning new skills and creating meaningful
          products. For me, it's not enough to make something beautiful or
          useful — it has to spark curiosity, solve something important, and
          feel like a natural extension of your body.
        </P>
      </Card>
    </CenterCenter>
  </Layout>
)

export default AboutPage
