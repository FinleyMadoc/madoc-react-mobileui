import React from 'react';
import './styles/index.scss';
export interface NavBarProps {
  onBack?: () => void;
  right?: React.ReactNode;
  children?: React.ReactNode;
  leftArrow?: boolean;
  leftText?: string;
  style?: React.CSSProperties & Partial<Record<'-nav-bar-height' | '-border-bottom', string>>;
}
declare const NavBar: React.FC<NavBarProps>;
export default NavBar;
