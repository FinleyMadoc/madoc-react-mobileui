import React from 'react';
import './styles/index.scss';
export interface DividerProps {
  contentPosition?: 'left' | 'right' | 'center';
  dashed?: boolean;
  direction?: 'horizontal' | 'vertical';
  hairline?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties &
    Partial<Record<'--border-width' | '--border-padding' | '--text-color' | '--border-left', string>>;
}
declare const Divider: React.FC<DividerProps>;
export default Divider;
