import React from 'react';
import Button from '../button';
var classPrefix = 'ygm-dialog-button';

var DialogActionButton = function DialogActionButton(props) {
  return /*#__PURE__*/ React.createElement(
    Button,
    {
      key: props.action.key,
      className: classPrefix,
      onClick: props.onAction,
      color: props.action.color,
      disabled: props.action.disable,
      block: true,
      shape: 'rectangular',
      fill: 'none',
      loading: 'auto',
    },
    props.action.text
  );
};

DialogActionButton.displayName = 'DialogActionButton';
export default DialogActionButton;
