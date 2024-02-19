import React from 'react';
import './styles/grid-item.scss';
var classPrefix = 'ygm-grid-item';
var GridItem = /*#__PURE__*/ React.memo(function (props) {
  var style = React.useMemo(
    function () {
      return {
        '--item-span': props.span,
      };
    },
    [props.span]
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
      style: style,
      onClick: props.onClick,
    },
    props.children
  );
});
export default GridItem;
