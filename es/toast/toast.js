import _setTimeout from '@babel/runtime-corejs3/core-js-stable/set-timeout';
import React from 'react';
import cx from 'classnames';
import { CheckOutline, CloseOutline } from 'antd-mobile-icons';
import SpinnerLoading from '../spinner-loading';
import './styles/index.scss';
var classPrefix = 'ygm-toast';

var Toast = function Toast(props) {
  var iconElement = React.useMemo(
    function () {
      if (props.icon === null || props.icon === undefined) return null;

      switch (props.icon) {
        case 'success':
          return /*#__PURE__*/ React.createElement(CheckOutline, null);

        case 'fail':
          return /*#__PURE__*/ React.createElement(CloseOutline, null);

        case 'loading':
          return /*#__PURE__*/ React.createElement(SpinnerLoading, {
            color: 'white',
          });

        default:
          return props.icon;
      }
    },
    [props.icon]
  );
  React.useEffect(
    function () {
      var timer = _setTimeout(function () {
        var _props$unmount;

        (_props$unmount = props.unmount) === null || _props$unmount === void 0 ? void 0 : _props$unmount.call(props);
      }, props.duration);

      return function () {
        return clearTimeout(timer);
      };
    },
    [props.unmount, props.duration]
  );
  React.useEffect(
    function () {
      return function () {
        var _props$afterClose;

        (_props$afterClose = props.afterClose) === null || _props$afterClose === void 0
          ? void 0
          : _props$afterClose.call(props);
      };
    },
    [props.afterClose]
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: cx(
          ''.concat(classPrefix, '-main'),
          props.icon ? ''.concat(classPrefix, '-marin-icon') : ''.concat(classPrefix, '-main-text')
        ),
      },
      iconElement &&
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: ''.concat(classPrefix, '-icon'),
          },
          iconElement
        ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(classPrefix, '-text'),
        },
        props.content
      )
    )
  );
};

Toast.defaultProps = {
  duration: 2000,
};
Toast.displayName = 'Toast';
export default Toast;
