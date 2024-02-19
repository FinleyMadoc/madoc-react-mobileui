import React from 'react';
import ErrorImage from './errorImage';
import './styles/index.scss';
var classPrefix = 'ygm-error-block';

var ErrorBlock = function ErrorBlock(props) {
  var imageNode = ErrorImage;

  if (props.image) {
    imageNode = props.image;
  }

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-image'),
      },
      imageNode
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-description'),
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(classPrefix, '-description-title'),
        },
        props.title
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(classPrefix, '-description-subtitle'),
        },
        props.description
      )
    )
  );
};

ErrorBlock.defaultProps = {
  title: '页面遇到一些小问题',
  description: '请稍后重试',
};
export default ErrorBlock;
