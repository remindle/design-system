import React from 'react';
import styled from 'styled-components';

import { ButtonProps } from './Button';

export interface StyledButtonProps {
  isButton: boolean;
  children: React.ReactNode;
  buttonProps: ButtonProps;
}

export const StyledButton = styled.button<ButtonProps>`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  line-height: 1;
  font-weight: 300;
  transition: 0.3s all ease-in;
  border-radius: 100px;
  border: none;
`;
