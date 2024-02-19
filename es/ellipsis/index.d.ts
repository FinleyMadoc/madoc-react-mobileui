import React from 'react';
import './styles/index.scss';
export interface EllipsisProps {
  text: string;
  rows?: number;
  collapse?: React.ReactNode;
  expand?: React.ReactNode;
}
declare const Ellipsis: React.FC<EllipsisProps>;
export default Ellipsis;
