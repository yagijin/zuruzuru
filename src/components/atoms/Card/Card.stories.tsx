import React from 'react'
import Card, { Props } from './Card'
export default {
  component: Card,
  title: 'Atoms/Card',
}
const Template = (args: Props) => <Card {...args} />

export const Default = Template.bind({
  link: 'https://google.com',
  children: <p>hello</p>,
})
