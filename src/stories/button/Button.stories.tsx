import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Button, ButtonColor, ButtonProps, ButtonSize, ButtonType } from './Button';

export default {
  title: 'Remindle/Button',
  component: Button,
  argTypes: {
    size: {
      type: "select",
      options: Object.values(ButtonSize),
      defaultValue: ButtonSize.SMALL,
    },
    color: {
      type: "select",
      options: Object.values(ButtonColor),
      defaultValue: ButtonColor.PRIMARY,
    },
    type: {
      type: "select",
      options: Object.values(ButtonType),
      defaultValue: ButtonType.BUTTON,
    },
    disabled: {
      type: "boolean",
    },
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary: typeof Template = Template.bind({});
Primary.args = {
  color: ButtonColor.PRIMARY,
  size: ButtonSize.SMALL,
  children: "Button"
};

export const Secondary: typeof Template = Template.bind({});
Secondary.args = {
  color: ButtonColor.SECONDARY,
  size: ButtonSize.SMALL,
  children: "Button"
};

export const Tetriary: typeof Template = Template.bind({});
Tetriary.args = {
  color: ButtonColor.TETRIARY,
  size: ButtonSize.SMALL,
  children: "Button"
};