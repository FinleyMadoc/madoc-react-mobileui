import React from 'react';
import './styles/grid-item.scss';
export interface GridItemProps {
  span?: number;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: React.ReactNode;
}
declare const GridItem: React.FC<GridItemProps>;
export default GridItem;
