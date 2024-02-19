import React from 'react';
import './styles/thumb.scss';
interface ThumbProps {
  value: number;
  min: number;
  max: number;
  disabled: boolean;
  trackRef: React.RefObject<HTMLDivElement>;
  onDrag: (value: number) => void;
  onChangeAfter: (value: number) => void;
}
declare const Thumb: React.FC<ThumbProps>;
export default Thumb;
