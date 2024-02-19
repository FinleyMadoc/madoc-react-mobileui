import React from 'react';
import './styles/index.scss';
export interface ToastProps {
  duration?: number;
  content: React.ReactNode;
  afterClose?: () => void;
  unmount?: () => void;
  icon?: 'success' | 'fail' | 'loading' | React.ReactNode;
}
declare const Toast: React.FC<ToastProps>;
export default Toast;
