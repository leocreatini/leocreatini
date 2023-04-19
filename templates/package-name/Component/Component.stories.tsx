import * as React from 'react'
import { Meta } from '@storybook/react'
// local
import { Component, ComponentProps } from './Component'

export default {
  title: 'Component',
  component: Component,
} as Meta

const Template = (args: ComponentProps) => <Component {...args} />

export const Default = Template.bind({
  parameters: {
    docs: {
      description: {
        story: 'This is the default story',
      },
    },
  },
})
