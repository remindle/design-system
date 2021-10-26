import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';

import { ColorBrandPrimaryBlue, ColorBrandPrimaryOrange } from '@remindle/design-tokens';

import { ButtonProps, ButtonSize } from './Button';

export interface StyledButtonProps {
  isButton: boolean;
  children: React.ReactNode;
  buttonProps: ButtonProps;
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-block;
  //
  border: none;
  border-radius: 5px;
  background-color: ${ rgba(ColorBrandPrimaryOrange, 1)};
  padding: ${ props => props.size === ButtonSize.SMALL ? "0.75rem 2rem" : "1rem 2rem" };
  //
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  color: ${ ColorBrandPrimaryBlue };
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  //
  transition-property: background-color, color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
`;
