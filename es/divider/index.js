import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import React from 'react';
import cx from 'classnames';
import './styles/index.scss';
var classPrefix = 'ygm-divider';

var Divider = function Divider(props) {
  var _cx;

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: props.style,
      className: cx(
        classPrefix,
        ''.concat(classPrefix, '-').concat(props.direction),
        ''.concat(classPrefix, '-').concat(props.contentPosition),
        ((_cx = {}),
        _defineProperty(_cx, ''.concat(classPrefix, '-hairline'), props.hairline),
        _defineProperty(_cx, ''.concat(classPrefix, '-dashed'), props.dashed),
        _cx)
      ),
    },
    props.children &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(classPrefix, '-content'),
        },
        props.children
      )
  );
};

export default Divider;
Divider.defaultProps = {
  contentPosition: 'center',
  direction: 'horizontal',
  hairline: true,
};
