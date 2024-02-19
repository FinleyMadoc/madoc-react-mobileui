import React from 'react';
import './styles/swiper-page-indicator.scss';
export interface SwiperPageIndicatorProps {
  current: number;
  total: number;
  indicatorClassName?: string;
}
declare const SwiperPageIndicator: React.FC<SwiperPageIndicatorProps>;
export default SwiperPageIndicator;
