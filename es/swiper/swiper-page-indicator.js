import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import _fillInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/fill';
import React from 'react';
import cx from 'classnames';
import './styles/swiper-page-indicator.scss';
var classPrefix = 'ygm-swiper-page-indicator';

var SwiperPageIndicator = function SwiperPageIndicator(props) {
  var dots = React.useMemo(
    function () {
      var _context, _context2;

      // 预防空白，判断显示图片，切换样式
      return _mapInstanceProperty(
        (_context = _fillInstanceProperty((_context2 = Array(props.total))).call(_context2, 0))
      ).call(_context, function (_, index) {
        return /*#__PURE__*/ React.createElement('div', {
          key: index, // cx-classnames:用来有条件的将不同的 classNames 联合在一起
          className: cx(
            ''.concat(classPrefix, '-dot'),
            _defineProperty({}, ''.concat(classPrefix, '-active'), props.current === index)
          ),
        });
      });
    },
    [props]
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
    },
    dots
  );
};

export default SwiperPageIndicator;
SwiperPageIndicator.displayName = 'SwiperPageIndicator';
