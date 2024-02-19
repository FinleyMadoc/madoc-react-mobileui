import React from 'react';
import './styles/index.scss';
export interface PopupProps {
  position?: 'left' | 'top' | 'bottom' | 'right';
  style?: React.CSSProperties;
  className?: string;
  visible: boolean;
  children?: React.ReactNode;
  mask?: boolean;
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  afterShow?: () => void;
  afterClose?: () => void;
}
declare const Popup: React.FC<PopupProps>;
export default Popup;
