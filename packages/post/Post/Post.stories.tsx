import * as React from 'react'
import { Meta } from '@storybook/react'
// local
import { Post, PostProps } from './Post'

export default {
  title: 'Post',
  component: Post,
} as Meta

const Template = (args: PostProps) => <Post {...args} />

export const Default = Template.bind({
  parameters: {
    docs: {
      description: {
        story: 'This is the default story',
      },
    },
  },
})
