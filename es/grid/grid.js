import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _Array$isArray from '@babel/runtime-corejs3/core-js-stable/array/is-array';
import React from 'react';
import './styles/grid.scss';

var formatGap = function formatGap(gap) {
  return typeof gap === 'number' ? ''.concat(gap, 'px') : gap;
};

var classPrefix = 'ygm-grid';

var Grid = function Grid(props) {
  var style = React.useMemo(
    function () {
      // console.log("prop1111111111111111111s", props);
      if (props.gap !== undefined) {
        if (_Array$isArray(props.gap)) {
          var _props$gap = _slicedToArray(props.gap, 2),
            gapH = _props$gap[0],
            gapV = _props$gap[1];

          return {
            '--gap-horizontal': formatGap(gapH),
            '--gap-vertical': formatGap(gapV),
            '--columns': props.columns,
          };
        } else {
          return {
            '--gap': formatGap(props.gap),
            '--columns': props.columns,
          };
        }
      }

      return {
        '--columns': props.columns,
      };
    },
    [props.columns, props.gap]
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
      style: style,
    },
    props.children
  );
};

Grid.displayName = 'Grid';
export default Grid;
