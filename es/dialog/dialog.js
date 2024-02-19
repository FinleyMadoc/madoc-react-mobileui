import _asyncToGenerator from '@babel/runtime-corejs3/helpers/asyncToGenerator';
import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _regeneratorRuntime from '@babel/runtime-corejs3/regenerator';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import _Promise from '@babel/runtime-corejs3/core-js-stable/promise';
import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import Mask from '../mask';
import DialogActionButton from './dialog-action-button';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import './styles/index.scss';
var classPrefix = 'ygm-dialog';

var Dialog = function Dialog(props) {
  var _React$useState = React.useState(props.visible),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    active = _React$useState2[0],
    setActive = _React$useState2[1];

  var style = useSpring({
    scale: props.visible ? 1 : 0.8,
    opacity: props.visible ? 1 : 0,
    config: {
      mass: 2.2,
      tension: 200,
      friction: 25,
      clamp: true,
    },
    onRest: function onRest() {
      if (props.visible) {
        var _props$afterShow;

        (_props$afterShow = props.afterShow) === null || _props$afterShow === void 0
          ? void 0
          : _props$afterShow.call(props);
      } else {
        var _props$afterClose;

        (_props$afterClose = props.afterClose) === null || _props$afterClose === void 0
          ? void 0
          : _props$afterClose.call(props);
      }
    },
  });

  var renderTitle = function renderTitle() {
    if (props.title) {
      return /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(classPrefix, '-header'),
        },
        props.title
      );
    }

    return null;
  };

  var renderContent = function renderContent() {
    if (props.content) {
      return /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(classPrefix, '-content'),
        },
        /*#__PURE__*/ React.createElement('div', null, props.content)
      );
    }

    return null;
  };

  var renderFooter = function renderFooter() {
    var _context;

    return /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-footer'),
      },
      _mapInstanceProperty((_context = props.actions)).call(_context, function (action, index) {
        return /*#__PURE__*/ React.createElement(DialogActionButton, {
          key: action.key,
          action: action,
          onAction: /*#__PURE__*/ _asyncToGenerator(
            /*#__PURE__*/ _regeneratorRuntime.mark(function _callee() {
              var _action$onClick, _props$onAction;

              var _props$onClose;

              return _regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      _context2.next = 2;
                      return _Promise.all([
                        (_action$onClick = action.onClick) === null || _action$onClick === void 0
                          ? void 0
                          : _action$onClick.call(action),
                        (_props$onAction = props.onAction) === null || _props$onAction === void 0
                          ? void 0
                          : _props$onAction.call(props, action, index),
                      ]);

                    case 2:
                      if (props.closeOnAction) {
                        (_props$onClose = props.onClose) === null || _props$onClose === void 0
                          ? void 0
                          : _props$onClose.call(props);
                      }

                    case 3:
                    case 'end':
                      return _context2.stop();
                  }
                }
              }, _callee);
            })
          ),
        });
      })
    );
  };

  useIsomorphicLayoutEffect(
    function () {
      if (props.visible) {
        setActive(true);
      }
    },
    [props.visible]
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
      style: {
        display: active ? undefined : 'none',
      },
    },
    /*#__PURE__*/ React.createElement(Mask, {
      visible: props.visible,
      style: props.maskStyle,
      onMaskClick: props.onClose,
    }),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-wrap'),
      },
      /*#__PURE__*/ React.createElement(
        animated.div,
        {
          style: style,
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: ''.concat(classPrefix, '-body'),
          },
          renderTitle(),
          renderContent(),
          renderFooter()
        )
      )
    )
  );
};

Dialog.defaultProps = {
  visible: false,
  actions: [],
};
Dialog.displayName = 'Dialog';
export default Dialog;
