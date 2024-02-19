import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _sliceInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/slice';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _concatInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/concat';
import React from 'react';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import useResizeObserver from '../hooks/useResizeObserver';
import { pxToNumber } from './utils';
import './styles/index.scss';
var classPrefix = 'ygm-ellipsis';
var ellipsisTailing = '......';

var Ellipsis = function Ellipsis(props) {
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    exceeded = _React$useState2[0],
    setExceeded = _React$useState2[1];

  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    expanded = _React$useState4[0],
    setExpanded = _React$useState4[1];

  var _React$useState5 = React.useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    ellipsis = _React$useState6[0],
    setEllipsis = _React$useState6[1];

  var containerRef = React.useRef(null);
  var calcEllipsised = React.useCallback(
    function () {
      var element = containerRef.current;
      if (!element) return;
      var orginStyle = window.getComputedStyle(element);
      var container = document.createElement('div');

      var styleNames = _sliceInstanceProperty(Array.prototype).apply(orginStyle);

      _forEachInstanceProperty(styleNames).call(styleNames, function (name) {
        container.style.setProperty(name, orginStyle.getPropertyValue(name));
      });

      container.innerText = props.text;
      container.style.height = 'auto';
      container.style.position = 'fixed';
      container.style.visibility = 'hidden';
      document.body.appendChild(container);
      var lineHeight = pxToNumber(orginStyle.lineHeight); // 期望想要的显示最大高度

      var maxHeight = lineHeight * props.rows;
      var height = container.getBoundingClientRect().height;

      var check = function check(left, right) {
        var l = left;
        var r = right;
        var text = '';

        while (l < r) {
          var _context, _context2, _context3, _context4;

          var m = Math.floor((l + r) / 2);

          if (l === m) {
            break;
          }

          var tempText = _sliceInstanceProperty((_context = props.text)).call(_context, l, m);

          container.innerText = _concatInstanceProperty(
            (_context2 = _concatInstanceProperty(
              (_context3 = _concatInstanceProperty((_context4 = ''.concat(text))).call(_context4, tempText))
            ).call(_context3, ellipsisTailing))
          ).call(_context2, props.expand);
          var _height = container.getBoundingClientRect().height;

          if (_height > maxHeight) {
            r = m;
          } else {
            text += tempText;
            l = m;
          }
        }

        return text;
      };

      if (maxHeight >= height) {
        setExceeded(false);
      } else {
        setExceeded(true);
        var ellipsisedValue = check(0, props.text.length);
        setEllipsis(ellipsisedValue);
      }

      document.body.removeChild(container);
    },
    [props.text, props.expand, props.rows]
  );
  useIsomorphicLayoutEffect(
    function () {
      calcEllipsised();
    },
    [calcEllipsised]
  ); // 适应尺寸变化，重新计算

  useResizeObserver(calcEllipsised, containerRef);

  var renderContent = function renderContent() {
    if (!exceeded) {
      return props.text;
    }

    if (expanded) {
      return /*#__PURE__*/ React.createElement(
        React.Fragment,
        null,
        props.text,
        props.collapse && /*#__PURE__*/ React.createElement('a', null, props.collapse)
      );
    } else {
      return /*#__PURE__*/ React.createElement(
        React.Fragment,
        null,
        ellipsis,
        ellipsisTailing,
        props.expand && /*#__PURE__*/ React.createElement('a', null, props.expand)
      );
    }
  };

  var onContent = function onContent(e) {
    e.stopPropagation;
    if (!props.expand && !props.collapse) return;

    if (props.expand && !props.collapse) {
      setExpanded(true);
      return;
    }

    setExpanded(!expanded);
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
      ref: containerRef,
      onClick: onContent,
    },
    renderContent()
  );
};

Ellipsis.defaultProps = {
  text: '',
  rows: 1,
  collapse: '',
  expand: '',
};
Ellipsis.displayName = 'Ellipsis';
export default Ellipsis;
