import React from 'react';
import { StyledButton } from './Button.styles';

export type StyledButtonProps = {
  type?: 'primary' | 'outlined' | 'premium' | 'text' | 'icon';
  size?: 'big' | 'small';
  fullWidth?: boolean;
  $backgroundColor?: string;
  color?: string;
  borderColor?: string;
};

type ButtonProps = {
  onClick: () => void;
  children: any;
} & StyledButtonProps;

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  size,
  fullWidth,
  $backgroundColor,
  color,
  borderColor,
  children,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      size={size}
      fullWidth={fullWidth}
      $backgroundColor={$backgroundColor}
      color={color}
      borderColor={borderColor}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
