import React from 'react';
import './styles/index.module.scss';
export interface CardProps {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  headerClassName?: string;
  titleClassName?: string;
  extraClassName?: string;
  bodyClassNmae?: string;
  children?: React.ReactNode;
  onHeaderClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onBodyClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
declare const Card: React.FC<CardProps>;
export default Card;
