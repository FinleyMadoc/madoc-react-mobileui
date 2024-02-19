import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import React from 'react';
import cx from 'classnames';
import { traverseReactNode } from '../utils/traverse-react-node';
import './styles/index.scss';
var classPrefix = 'ygm-sidebar';
var Sidebar = /*#__PURE__*/ React.memo(function (props) {
  var _React$useState = React.useState(props.activeKey),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeKey = _React$useState2[0],
    setActiveKey = _React$useState2[1];

  var items = [];
  traverseReactNode(props.children, function (child) {
    if (!(/*#__PURE__*/ React.isValidElement(child))) return;
    if (!child.key) return;
    items.push(child);
  });

  var onSetActive = function onSetActive(e) {
    var _props$onChange;

    var key = e.target.dataset['key'];
    setActiveKey(key);
    (_props$onChange = props.onChange) === null || _props$onChange === void 0
      ? void 0
      : _props$onChange.call(props, key);
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-items'),
        style: props.style,
      },
      _mapInstanceProperty(items).call(items, function (item) {
        var active = item.key === activeKey;
        return /*#__PURE__*/ React.createElement(
          'div',
          {
            className: cx(
              ''.concat(classPrefix, '-item'),
              _defineProperty({}, ''.concat(classPrefix, '-item-active'), active)
            ),
            key: item.key,
            'data-key': item.key,
            onClick: onSetActive,
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: ''.concat(classPrefix, '-item-title'),
              'data-key': item.key,
            },
            item.props.title
          )
        );
      })
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-content'),
      },
      _mapInstanceProperty(items).call(items, function (item) {
        return /*#__PURE__*/ React.createElement(
          'div',
          {
            className: ''.concat(classPrefix, '-content-item'),
            key: item.key,
            style: {
              display: activeKey === item.key ? 'block' : 'none',
            },
          },
          item.props.children
        );
      })
    )
  );
});
Sidebar.displayName = 'Sidebar';
export default Sidebar;
