import React from 'react';
import './styles/index.scss';
export interface ButtonProps {
  color?: 'default' | 'primary' | 'success' | 'warining' | 'danger';
  size?: 'small' | 'middle' | 'large';
  shape?: 'default' | 'rounded' | 'rectangular';
  fill?: 'solid' | 'outline' | 'none';
  children?: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => Promise<void> | unknown;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean | 'auto';
  loadingIcon?: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
