import React from 'react';
import './styles/index.scss';
export interface CountdownProps {
  time: number;
  format?: string;
  endText?: string;
  numberClassName?: string;
  symbolClassName?: string;
  endTextClassName?: string;
}
declare const Countdown: React.FC<CountdownProps>;
export default Countdown;
