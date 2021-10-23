import React, { ReactNode } from 'react';

import { StyledButton } from './Button.style';

type ButtonType = 'button' | 'submit';
type ButtonColor = 'primary' | 'secondary' | 'default';
type ButtonSize = 'small' | 'large';

export interface ButtonProps {
  /**
   * Button color type.
   */
  color?: ButtonColor;
  /**
   * How large should the button be?
   */
  size?: ButtonSize;
  /**
   * Button type
   */
  type?: ButtonType;
  /**
   * Button text contents
   */
  children: ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * If this prop is passed the button will be rendered as an anchor element
   */
  href?: string;
  /**
   * Specifies the relationship between the current document and the linked document/resource
   * (used in conjunction with anchor elements)
   */
  rel?: string;
  /**
   * Specifies where to open the linked document (used in conjunction with anchor elements)
   */
  target?: string;
  /**
   * Optional disable
   */
  disabled?: boolean;
  /**
   * Optional CSS class name
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<ButtonProps> = (props) => {
  const {
    href,
    children
  } = props;
  const isButton = !Boolean(href);

  return (
    <StyledButton as={isButton ? 'button' : 'a'} href={href} { ...props }>
      <span>
          {children}
        </span>
    </StyledButton>
  );
};

Button.defaultProps = {
  color: 'primary',
  size: 'small',
  type: 'button',
  className: '',
  href: '',
};
