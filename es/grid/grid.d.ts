import React from 'react';
import './styles/grid.scss';
export interface GridProps {
  columns?: number;
  gap?: number | string | [number | string, number | string];
  children?: React.ReactNode;
}
declare const Grid: React.FC<GridProps>;
export default Grid;
