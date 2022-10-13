import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Radio from './radio'

const RadioMeta: ComponentMeta<typeof Radio> = {
  title: 'Data Entry/Radio 单选框',
  component: Radio
}

export default RadioMeta

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />

export const Basic = Template.bind({})
Basic.args = {
  children: 'Radio'
}

export const Disabled = Template.bind({})
Disabled.args = {
  checked: true,
  disabled: true,
  children: 'Can not be checked'
}

export const ChangeEvent = Template.bind({})
ChangeEvent.args = {
  children: 'Change Event',
  onChange: (e:any) => console.log(e.target.checked)
}
