import React from 'react';
import './styles/swiper.scss';
export interface SwiperProps {
  loop?: boolean;
  autoplay?: boolean;
  autoplayInterval?: number;
  defaultIndex?: number;
  showIndicator?: boolean;
  indicatorClassName?: string;
  children: React.ReactElement | React.ReactElement[];
  style?: React.CSSProperties & Partial<Record<'--height' | '--width' | '--border-radius' | '--track-padding', string>>;
}
declare const Swiper: React.FC<SwiperProps>;
export default Swiper;
