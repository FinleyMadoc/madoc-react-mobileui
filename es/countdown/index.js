import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _Date$now from '@babel/runtime-corejs3/core-js-stable/date/now';
import _setTimeout from '@babel/runtime-corejs3/core-js-stable/set-timeout';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import React from 'react';
import cx from 'classnames';
import './styles/index.scss';
import { getTimeItems } from './utils';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
var classPrefix = 'ygm-countdown'; // 30小时 ===> 108000000
// format: hh:mm:ss
// [{num: '29', symbol: ':'},{num:'59',symbol: ":"},{num:'59',symbol: ":"}]
// 遍历 ===》 29:59:59
// 定时器 ==》更新时间 ===》重新渲染

var Countdown = function Countdown(props) {
  var _React$useState = React.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    timeItems = _React$useState2[0],
    setTimeItems = _React$useState2[1];

  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    timeEnd = _React$useState4[0],
    setTimeEnd = _React$useState4[1];

  var computerTimeRef = React.useRef(props.time);
  var timeRef = React.useRef(0);
  var endTimeMs = React.useMemo(function () {
    return _Date$now() + computerTimeRef.current;
  }, []);
  var setCountdownTimeItems = React.useCallback(
    function () {
      if (computerTimeRef.current <= 0) {
        setTimeEnd(true);
        clearTimeout(timeRef.current);
      }

      var timeItems = getTimeItems(props.format, computerTimeRef.current);
      setTimeItems(timeItems);
    },
    [props.format]
  );
  var initCountdown = React.useCallback(
    function () {
      clearTimeout(timeRef.current); // 获取当前时间

      var now = _Date$now(); // 获取剩余毫秒数

      computerTimeRef.current = endTimeMs - now;
      timeRef.current = _setTimeout(function () {
        initCountdown();
      });
      setCountdownTimeItems();
    },
    [endTimeMs, setCountdownTimeItems]
  ); // useEffect 是异步的，useLayoutEffect 是同步的
  // useEffect 的执行时机是浏览器完成渲染之后，而 useLayoutEffect 的执行时机是浏览器把内容真正渲染到界面之前
  // useLayoutEffect 和 componentDidMount和 componentDidUpdate 应该是一致的

  useIsomorphicLayoutEffect(
    function () {
      initCountdown();
      return function () {
        clearTimeout(timeRef.current);
      };
    },
    [initCountdown]
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
    },
    timeItems
      ? timeEnd && props.endText
        ? /*#__PURE__*/ React.createElement(
            'div',
            {
              className: props.endTextClassName,
            },
            props.endText
          )
        : _mapInstanceProperty(timeItems).call(timeItems, function (item, index) {
            return /*#__PURE__*/ React.createElement(
              'div',
              {
                className: ''.concat(classPrefix, '-item'),
                key: index,
              },
              /*#__PURE__*/ React.createElement(
                'div',
                {
                  className: cx(''.concat(classPrefix, '-item-num'), props.numberClassName),
                },
                item.num
              ),
              /*#__PURE__*/ React.createElement(
                'div',
                {
                  className: cx(''.concat(classPrefix, '-symbol'), props.symbolClassName),
                },
                item.symbol
              )
            );
          })
      : null
  );
};

Countdown.displayName = 'Countdown';
Countdown.defaultProps = {
  format: 'hh:mm:ss',
};
export default Countdown;
