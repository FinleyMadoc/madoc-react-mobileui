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
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';

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
import { traverseReactNode } from '../utils/traverse-react-node';
import './styles/index.scss';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import useUpdateIsomorphicLayoutEffect from '../hooks/useUpdateIsomorphicLayoutEffect';
var classPrefix = 'ygm-tabs';

var Tabs = function Tabs(props) {
  var _React$useState = React.useState(props.activeKey),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    activeKey = _React$useState2[0],
    setActiveKey = _React$useState2[1];

  var _React$useState3 = React.useState({
      width: 0,
      transform: 'transalte3d(0,0,0)',
      transitionDuration: '0',
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    activeLineStyle = _React$useState4[0],
    setActiveLineStyle = _React$useState4[1];

  var tabListRef = React.useRef(null);
  var panes = [];
  var keyToIndexRecord = React.useMemo(function () {
    return {};
  }, []);
  traverseReactNode(props.children, function (child) {
    if (!(/*#__PURE__*/ React.isValidElement(child))) return;
    if (!child.key) return;
    var length = panes.push(child);
    keyToIndexRecord[child.key] = length - 1;
  });

  var onTab = function onTab(e) {
    var _props$onChange;

    var key = e.target.dataset.key;
    setActiveKey(key);
    props === null || props === void 0
      ? void 0
      : (_props$onChange = props.onChange) === null || _props$onChange === void 0
      ? void 0
      : _props$onChange.call(props, key);
  };

  var calculateLineWidth = React.useCallback(
    function () {
      var immediate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!props.showTabLine) return;
      var tabListEle = tabListRef.current;
      if (!tabListEle) return;
      var activeIndex = keyToIndexRecord[activeKey];
      var activeTabWrapper = tabListEle.children.item(activeIndex + 1);
      var activeTab = activeTabWrapper.children.item(0);
      var activeTabWidth = activeTab.offsetWidth;
      var activeTabLeft = activeTab.offsetLeft;
      setActiveLineStyle({
        width: activeTabWidth,
        transform: 'translate3d('.concat(activeTabLeft, 'px,0,0)'),
        transitionDuration: immediate ? '0ms' : '300ms',
      });
    },
    [activeKey, keyToIndexRecord, props.showTabLine]
  );
  useIsomorphicLayoutEffect(function () {
    calculateLineWidth(true);
  }, []);
  useUpdateIsomorphicLayoutEffect(
    function () {
      calculateLineWidth();
    },
    [calculateLineWidth]
  );
  React.useEffect(
    function () {
      window.addEventListener('resize', function () {
        return calculateLineWidth(true);
      });
      return function () {
        return window.removeEventListener('resize', function () {
          return calculateLineWidth(true);
        });
      };
    },
    [calculateLineWidth]
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
          ''.concat(classPrefix, '-tab-list'),
          props.tabListClassName,
          _defineProperty({}, ''.concat(classPrefix, '-tab-list-').concat(props.type), true)
        ),
        ref: tabListRef,
      },
      props.showTabLine &&
        /*#__PURE__*/ React.createElement('div', {
          className: ''.concat(classPrefix, '-tab-line'),
          style: _objectSpread({}, activeLineStyle),
        }),
      _mapInstanceProperty(panes).call(panes, function (item) {
        return /*#__PURE__*/ React.createElement(
          'div',
          {
            key: item.key,
            className: cx(
              ''.concat(classPrefix, '-tab'),
              props.tabActiveClassName,
              _defineProperty({}, ''.concat(classPrefix, '-tab-active'), activeKey === item.key)
            ),
            onClick: onTab,
            'data-key': item.key,
          },
          /*#__PURE__*/ React.createElement(
            'div',
            {
              className: ''.concat(classPrefix, '-tab-title'),
              'data-key': item.key,
            },
            item.props.title
          )
        );
      })
    ),
    _mapInstanceProperty(panes).call(panes, function (child) {
      return (
        child.props.children &&
        /*#__PURE__*/ React.createElement(
          'div',
          {
            key: child.key,
            className: cx(''.concat(classPrefix, '-content'), props.tabContentClassName),
            style: {
              display: activeKey === child.key ? 'block' : 'none',
            },
          },
          child
        )
      );
    })
  );
};

Tabs.defaultProps = {
  showTabLine: true,
  type: 'line',
};
Tabs.displayName = 'Tabs';
export default Tabs;
