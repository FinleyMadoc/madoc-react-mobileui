import React from 'react';
import './styles/index.scss';
export interface SpaceProps {
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  wrap?: boolean;
  block?: boolean;
  gap?: number | string | [number | string, number | string];
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children?: React.ReactNode;
}
declare const Space: React.FC<SpaceProps>;
export default Space;
