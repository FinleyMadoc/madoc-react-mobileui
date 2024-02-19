import InternalSwiper from '@/swiper/swiper';
import SwiperItem from '@/swiper/swiper-item';

export type { SwiperProps } from '@/swiper/swiper';
export type { SwiperItemProps } from '@/swiper/swiper-item';

type InternalSwiperType = typeof InternalSwiper;

export interface SwiperInterface extends InternalSwiperType {
  Item: typeof SwiperItem;
}

const Swiper = InternalSwiper as SwiperInterface;

Swiper.Item = SwiperItem;

export default Swiper;
