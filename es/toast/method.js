import _extends from '@babel/runtime-corejs3/helpers/extends';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { default as Toast } from './toast';
export var show = function show(p) {
  var props =
    typeof p === 'string'
      ? {
          content: p,
        }
      : p;
  var container = document.createElement('div');
  document.body.appendChild(container);
  var root = ReactDOM.createRoot(container);

  var unmount = function unmount() {
    document.body.removeChild(container);
    root.unmount();
  };

  root.render(
    /*#__PURE__*/ React.createElement(
      Toast,
      _extends({}, props, {
        unmount: unmount,
      })
    )
  );
};
