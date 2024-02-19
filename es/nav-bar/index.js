import React from 'react';
import './styles/index.scss';
var classPrefix = 'ygm-nav-bar';

var NavBar = function NavBar(props) {
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
      style: props.style,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-left'),
        onClick: props.onBack,
      },
      props.leftArrow &&
        /*#__PURE__*/ React.createElement(
          'div',
          {
            className: ''.concat(classPrefix, '-left-icon'),
          },
          /*#__PURE__*/ React.createElement('i', {
            className: 'icon-arrow-left2',
          })
        ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(classPrefix, '-left-text'),
        },
        props.leftText
      )
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-title'),
      },
      props.children
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-right'),
      },
      props.right
    )
  );
};

NavBar.defaultProps = {
  leftText: '',
  leftArrow: true,
};
NavBar.displayName = 'NavBar';
export default NavBar;
