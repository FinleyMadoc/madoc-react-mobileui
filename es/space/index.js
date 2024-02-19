import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _Array$isArray from '@babel/runtime-corejs3/core-js-stable/array/is-array';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import React from 'react';
import cx from 'classnames';
import './styles/index.scss';
var classPrefix = 'ygm-space';

var formatGap = function formatGap(gap) {
  return typeof gap === 'number' ? ''.concat(gap, 'px') : gap;
};

var Space = function Space(props) {
  var _cx, _context;

  var style = React.useMemo(
    function () {
      if (props.gap) {
        if (_Array$isArray(props.gap)) {
          var _props$gap = _slicedToArray(props.gap, 2),
            gapH = _props$gap[0],
            gapV = _props$gap[1];

          return {
            '--gap-vertical': formatGap(gapV),
            '--gap-horizontal': formatGap(gapH),
          };
        }

        return {
          '--gap': formatGap(props.gap),
        };
      }

      return {};
    },
    [props.gap]
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: cx(
        classPrefix,
        ((_cx = {}),
        _defineProperty(_cx, ''.concat(classPrefix, '-wrap'), props.wrap),
        _defineProperty(_cx, ''.concat(classPrefix, '-block'), props.block),
        _defineProperty(_cx, ''.concat(classPrefix, '-').concat(props.direction), true),
        _defineProperty(_cx, ''.concat(classPrefix, '-aline-').concat(props.align), !!props.align),
        _defineProperty(_cx, ''.concat(classPrefix, '-').concat(props.justify), !!props.justify),
        _cx)
      ),
      onClick: props.onClick,
      style: style,
    },
    _mapInstanceProperty((_context = React.Children)).call(_context, props.children, function (child) {
      return (
        child != null &&
        child !== undefined &&
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: ''.concat(classPrefix, '-item'),
          },
          child
        )
      );
    })
  );
};

Space.defaultProps = {
  direction: 'horizontal',
  block: true,
};
Space.displayName = 'Space';
export default Space;
