import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './button'

import mdx from './button.mdx'

// 👇 This default export determines where your story goes in the story list
const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'General/Button 按钮',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      page: mdx,
    },
  },
} satisfies Meta<typeof Button>

export default meta

// 👇 We create a “template” of how args map to rendering

type Story = StoryFn<typeof Button>

const Template: Story = args => (
  <Button type="primary" onClick={action('clicked')} {...args}></Button>
)

export const Default = Template.bind({})
Default.args = {
  type: 'default',
  children: 'Default Button',
}

export const Primary = Template.bind({})
Primary.args = {
  type: 'primary',
  children: 'Primary Button',
}

export const Success = Template.bind({})
Success.args = {
  type: 'success',
  children: 'Success Button',
}

export const Warning = Template.bind({})
Warning.args = {
  type: 'warning',
  children: 'Success Button',
}

export const Danger = Template.bind({})
Danger.args = {
  type: 'danger',
  children: 'Danger Button',
}

export const Link = Template.bind({})
Link.args = {
  type: 'link',
  href: 'https://valzt.cn',
  target: '_blank',
  children: 'Link Button',
}

export const LargeButton = Template.bind({})
LargeButton.args = {
  size: 'lg',
  children: 'Large Button',
}

export const SmallButton = Template.bind({})
SmallButton.args = {
  size: 'sm',
  children: 'Small Button',
}
