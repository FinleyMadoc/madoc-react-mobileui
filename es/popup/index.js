import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _Object$getOwnPropertySymbols from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _Object$getOwnPropertyDescriptor from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _Object$getOwnPropertyDescriptors from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors';
import _Object$defineProperties from '@babel/runtime-corejs3/core-js-stable/object/define-properties';
import _Object$defineProperty from '@babel/runtime-corejs3/core-js-stable/object/define-property';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';

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
import cx from 'classnames';
import { useSpring, animated } from '@react-spring/web'; // import { Mask } from "@taoyage/react-mobile-ui";

import Mask from '../mask';
import useScrollLock from '../hooks/useScrollLock';
import './styles/index.scss';
var classPrefix = 'ygm-popup';

var Popup = function Popup(props) {
  useScrollLock(props.visible);

  var _useSpring = useSpring({
      percent: props.visible ? 0 : 100,
      config: {
        precision: 0.1,
        mass: 0.4,
        tension: 300,
        friction: 30,
      },
      onRest: function onRest() {
        if (props.visible) {
          var _props$afterShow;

          (_props$afterShow = props.afterShow) === null || _props$afterShow === void 0
            ? void 0
            : _props$afterShow.call(props);
        }
      },
    }),
    percent = _useSpring.percent;

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
    },
    props.mask &&
      /*#__PURE__*/ React.createElement(Mask, {
        visible: props.visible,
        onMaskClick: props.onMaskClick,
      }),
    /*#__PURE__*/ React.createElement(
      animated.div,
      {
        className: cx(
          ''.concat(classPrefix, '-body'),
          ''.concat(classPrefix, '-').concat(props.position),
          props.className
        ),
        style: _objectSpread(
          _objectSpread({}, props.style),
          {},
          {
            transform: percent.to(function (v) {
              if (props.position === 'left') {
                return 'translate(-'.concat(v, '%, 0)');
              } else if (props.position === 'bottom') {
                return 'translate(0, '.concat(v, '%)');
              } else if (props.position === 'right') {
                return 'translate('.concat(v, '%, 0)');
              } else if (props.position === 'top') {
                return 'translate(0, -'.concat(v, '%)');
              }

              return 'none';
            }),
          }
        ),
      },
      props.children
    )
  );
};

Popup.defaultProps = {
  visible: false,
  position: 'left',
  mask: true,
};
Popup.displayName = 'Popup';
export default Popup;
