import React from 'react';
import './styles/index.scss';
export interface SpinnerLoadingProps {
  color?: 'default' | 'primary' | 'white';
  size?: number;
  style?: React.CSSProperties;
}
declare const SpinnerLoading: React.FC<SpinnerLoadingProps>;
export default SpinnerLoading;
