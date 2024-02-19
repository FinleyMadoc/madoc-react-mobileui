import React from 'react';
import './styles/index.scss';
export interface MaskProps {
  visible: boolean;
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  style?: React.CSSProperties & Partial<Record<'--z-index' | '--background', string>>;
}
declare const Mask: React.FC<MaskProps>;
export default Mask;
