import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _asyncToGenerator from '@babel/runtime-corejs3/helpers/asyncToGenerator';
import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _fillInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/fill';
import _regeneratorRuntime from '@babel/runtime-corejs3/regenerator';
import React from 'react';
import cx from 'classnames';
import SpinnerLoading from '../spinner-loading';
import { isPromise } from '../utils/validate';
import './styles/index.scss';
var classPrefix = 'ygm-button';

var Button = function Button(props) {
  var _cx;

  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    innerLoading = _React$useState2[0],
    setInnerLoading = _React$useState2[1];

  var loading = props.loading === 'auto' ? innerLoading : props.loading;

  var onButtonClick = /*#__PURE__*/ (function () {
    var _ref = _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime.mark(function _callee(e) {
        var promise;
        return _regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  if (props.onClick) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt('return');

                case 2:
                  promise = props.onClick(e);

                  if (!isPromise(promise)) {
                    _context.next = 15;
                    break;
                  }

                  _context.prev = 4;
                  setInnerLoading(true);
                  _context.next = 8;
                  return promise;

                case 8:
                  setInnerLoading(false);
                  _context.next = 15;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context['catch'](4);
                  setInnerLoading(false);
                  throw _context.t0;

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[4, 11]]
        );
      })
    );

    return function onButtonClick(_x) {
      return _ref.apply(this, arguments);
    };
  })();

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: cx(
        classPrefix,
        props.className,
        ''.concat(classPrefix, '-').concat(props.color),
        ''.concat(classPrefix, '-').concat(props.size),
        ''.concat(classPrefix, '-fill-').concat(_fillInstanceProperty(props)),
        ''.concat(classPrefix, '-shape-').concat(props.shape),
        ((_cx = {}),
        _defineProperty(_cx, ''.concat(classPrefix, '-block'), props.block),
        _defineProperty(_cx, ''.concat(classPrefix, '-disabled'), props.disabled),
        _cx)
      ),
      onClick: onButtonClick,
    },
    loading
      ? /*#__PURE__*/ React.createElement(
          'div',
          {
            className: ''.concat(classPrefix, '-loading-wrap'),
          },
          props.loadingIcon
        )
      : props.children
  );
};

Button.defaultProps = {
  color: 'default',
  size: 'middle',
  shape: 'default',
  fill: 'solid',
  loading: false,
  loadingIcon: /*#__PURE__*/ React.createElement(SpinnerLoading, {
    size: 16,
  }),
};
Button.displayName = 'Button';
export default Button;
