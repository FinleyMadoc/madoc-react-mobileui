import React from 'react';
import './styles/index.scss';
export interface SidebarProps {
  activeKey: string;
  onChange?: (key: string) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties &
    Partial<Record<'--width' | '--height' | '--background-color' | '--content-padding' | '--sidebar-padding', string>>;
}
declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
