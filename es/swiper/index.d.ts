import InternalSwiper from './swiper';
import SwiperItem from './swiper-item';
export type { SwiperProps } from './swiper';
export type { SwiperItemProps } from './swiper-item';
declare type InternalSwiperType = typeof InternalSwiper;
export interface SwiperInterface extends InternalSwiperType {
  Item: typeof SwiperItem;
}
declare const Swiper: SwiperInterface;
export default Swiper;
