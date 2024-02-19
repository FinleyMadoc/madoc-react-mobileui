import React from 'react';
import './styles/swiper-item.scss';
var classPrefix = 'ygm-swiper-item';

var SwiperItem = function SwiperItem(props) {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
    },
    props.children
  );
};

SwiperItem.displayName = 'SwiperItem';
export default SwiperItem;
