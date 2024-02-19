import React from 'react';
import './styles/index.scss';
export interface ErrorBlockProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  image?: React.ReactNode;
}
declare const ErrorBlock: React.FC<ErrorBlockProps>;
export default ErrorBlock;
