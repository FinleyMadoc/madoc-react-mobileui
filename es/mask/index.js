import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _Object$getOwnPropertySymbols from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _Object$getOwnPropertyDescriptor from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _Object$getOwnPropertyDescriptors from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors';
import _Object$defineProperties from '@babel/runtime-corejs3/core-js-stable/object/define-properties';
import _Object$defineProperty from '@babel/runtime-corejs3/core-js-stable/object/define-property';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';

function ownKeys(object, enumerableOnly) {
  var keys = _Object$keys(object);
  if (_Object$getOwnPropertySymbols) {
    var symbols = _Object$getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) {
        return _Object$getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var _context, _context2;
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? _forEachInstanceProperty((_context = ownKeys(Object(source), !0))).call(_context, function (key) {
          _defineProperty(target, key, source[key]);
        })
      : _Object$getOwnPropertyDescriptors
      ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source))
      : _forEachInstanceProperty((_context2 = ownKeys(Object(source)))).call(_context2, function (key) {
          _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import useScrollLock from '../hooks/useScrollLock';
import './styles/index.scss';
var classPrefix = 'ygm-mask';

var Mask = function Mask(props) {
  var _React$useState = React.useState(props.visible),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    active = _React$useState2[0],
    setActive = _React$useState2[1];

  useScrollLock(props.visible);

  var _useSpring = useSpring({
      opacity: props.visible ? 1 : 0,
      config: {
        tension: 250,
        friction: 30,
        clamp: true,
      },
      onRest: function onRest() {
        setActive(props.visible);
      },
    }),
    opacity = _useSpring.opacity;

  var onMask = function onMask(e) {
    var _props$onMaskClick;

    e.stopPropagation();
    (_props$onMaskClick = props.onMaskClick) === null || _props$onMaskClick === void 0
      ? void 0
      : _props$onMaskClick.call(props, e);
  };

  useIsomorphicLayoutEffect(
    function () {
      if (props.visible) {
        setActive(true);
      }
    },
    [props.visible]
  );
  return /*#__PURE__*/ React.createElement(animated.div, {
    className: classPrefix,
    style: _objectSpread(
      _objectSpread({}, props.style),
      {},
      {
        opacity: opacity,
        display: active ? undefined : 'none',
      }
    ),
    onClick: onMask,
  });
};

export default Mask;
Mask.displayName = 'Mask';
