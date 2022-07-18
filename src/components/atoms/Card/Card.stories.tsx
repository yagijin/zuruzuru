import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Card, { Props } from './Card'

export default {
  component: Card,
  title: 'Atoms/Card',
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args: Props) => (
  <Card {...args} />
)

export const Default = Template.bind({})
Default.args = {
  link: 'https://google.com',
  children: <p>hello</p>,
}
