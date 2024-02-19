import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import _setInterval from '@babel/runtime-corejs3/core-js-stable/set-interval';
import React from 'react';
import SwiperItem from './swiper-item';
import './styles/swiper.scss';
import SwiperPageIndicator from './swiper-page-indicator';
import { moduls } from './utils';
var classPrefix = 'ygm-swiper';

var Swiper = function Swiper(props) {
  // 轮播图页面index记录
  var _React$useState = React.useState(props.defaultIndex || 0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    currentIndex = _React$useState2[0],
    setCurrentIndex = _React$useState2[1];

  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    dragging = _React$useState4[0],
    setDragging = _React$useState4[1]; //   开始距离

  var startRef = React.useRef(0); //   滑动比例

  var slideRatioRef = React.useRef(0); //   宽度

  var trackRef = React.useRef(null);
  var autoPlaying = React.useRef(false);
  var intervalRef = React.useRef(0); //   切换图片

  var getFinalPosition = function getFinalPosition(index) {
    var finalPosition = -currentIndex * 100 + index * 100;
    if (!props.loop) return finalPosition;
    var totalWidth = count * 100; // 无限轮播，当前图的前后平均分配轮播图数量

    var flagWidth = totalWidth / 2; // 1 2 3 4 =》 3 4 1 2
    // 4 ===》 300， flagWidth = 200
    // (300 + 200) % 400 = 100 , 100 - flagWidth ===> -100(就是第一张图)

    finalPosition = moduls(finalPosition + flagWidth, totalWidth) - flagWidth;
    return finalPosition;
  };

  var getTransition = function getTransition(position) {
    if (dragging) {
      return '';
    } else if (autoPlaying.current) {
      if (position === -100 || position === 0) {
        return 'transform 0.3s ease-out';
      } else {
        return '';
      }
    } // 处理闪影
    else if (position < -100) {
      return '';
    }

    return 'transform 0.3s ease-out';
  }; //   验证传入的对象是否是swiperItem

  var _React$useMemo = React.useMemo(
      function () {
        var _context;

        var count = 0;

        var validChildren = _mapInstanceProperty((_context = React.Children)).call(
          _context,
          props.children,
          function (child) {
            if (!(/*#__PURE__*/ React.isValidElement(child))) return null;

            if (child.type !== SwiperItem) {
              console.warn('传入的元素必须是SwiperItem');
            }

            count++;
            return child;
          }
        );

        return {
          validChildren: validChildren,
          count: count,
        };
      },
      [props]
    ),
    validChildren = _React$useMemo.validChildren,
    count = _React$useMemo.count;

  var renderSwiperItem = function renderSwiperItem() {
    var _context2;

    return /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-track-inner'),
      },
      _mapInstanceProperty((_context2 = React.Children)).call(_context2, validChildren, function (child, index) {
        var position = getFinalPosition(index);
        return /*#__PURE__*/ React.createElement(
          'div',
          {
            className: ''.concat(classPrefix, '-slide'),
            style: {
              left: '-'.concat(index * 100, '%'),
              transform: 'translate3d('.concat(position, '%,0,0)'),
              transition: getTransition(position),
            },
          },
          child
        );
      })
    );
  }; //   计算滑动距离/页面宽度

  var getSlideRatio = function getSlideRatio(diff) {
    var element = trackRef.current;
    if (!element) return 0;
    return diff / element.offsetWidth;
  }; //   滑动事件监听

  var onTouchMove = function onTouchMove(e) {
    // 结束距离
    var currentX = e.changedTouches[0].clientX;
    var diff = startRef.current - currentX; //开始距离与结束距离的差值

    slideRatioRef.current = getSlideRatio(diff); //滑动比例

    var position = currentIndex + slideRatioRef.current; // 当不是循环播放的时候，第一张和最后一张无法朝边界值移动

    if (!props.loop) {
      position = bundIndex(position);
    }

    setCurrentIndex(position);
  };

  var bundIndex = React.useCallback(
    function (currentIndex) {
      var min = 0;
      var max = count - 1; // 限制边界

      var ret = currentIndex;
      ret = Math.max(currentIndex, min);
      ret = Math.min(ret, max);
      return ret;
    },
    [count]
  ); // 滑动

  var swipeTo = React.useCallback(
    function (index) {
      var targetIndex = props.loop ? moduls(index, count) : bundIndex(index);
      setCurrentIndex(targetIndex);
    },
    [bundIndex, count, props.loop]
  );
  var swipeNext = React.useCallback(
    function () {
      swipeTo(currentIndex + 1);
    },
    [swipeTo, currentIndex]
  ); //   结束滑动监听

  var onTouchEnd = function onTouchEnd() {
    var index = Math.round(slideRatioRef.current); //按滑动比例取整

    slideRatioRef.current = 0;
    var position = currentIndex + index;
    swipeTo(position);
    setDragging(false);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
  }; //   触碰事件

  var onTouchStart = function onTouchStart(e) {
    startRef.current = e.changedTouches[0].clientX;
    setDragging(true); // 拖动的自动切换进行暂停

    clearInterval(intervalRef.current);
    autoPlaying.current = false;
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
  };

  React.useEffect(
    function () {
      if (!props.autoplay || dragging) return;
      intervalRef.current = _setInterval(function () {
        autoPlaying.current = true;
        swipeNext();
      }, props.autoplayInterval);
      return function () {
        // 拖动的自动切换进行暂停
        clearInterval(intervalRef.current);
      };
    },
    [dragging, props.autoplayInterval, props.autoplay, swipeNext]
  );

  if (count === 0 || !validChildren) {
    console.warn('传入的元素必须是SwiperItem');
    return null;
  }

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
      style: props.style,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-track'),
        onTouchStart: onTouchStart,
        ref: trackRef,
      },
      renderSwiperItem()
    ),
    props.showIndicator &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(classPrefix, '-indicator'),
        },
        /*#__PURE__*/ React.createElement(SwiperPageIndicator, {
          total: count,
          current: slideRatioRef.current > 0 ? Math.floor(currentIndex) : Math.ceil(currentIndex),
          indicatorClassName: props.indicatorClassName,
        })
      )
  );
};

export default Swiper;
Swiper.defaultProps = {
  autoplay: false,
  defaultIndex: 0,
  showIndicator: true,
  loop: false,
  autoplayInterval: 3000,
};
Swiper.displayName = 'Swiper';
