import React from 'react';

import { Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Remindle/Button',
  component: Button
};

const Template: Story<ButtonProps> = (args) => <Button {...args}>Click Me</Button>;

export const Primary: typeof Template = Template.bind({});
Primary.args = {
  color: 'primary',
  size: 'small',
};