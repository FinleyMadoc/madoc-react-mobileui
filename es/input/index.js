import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import React from 'react';
import cx from 'classnames';
import { CloseCircleFill } from 'antd-mobile-icons';
import './styles/index.scss';
var classPrefix = 'ygm-input';
var Input = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var _React$useState = React.useState(props.value),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    value = _React$useState2[0],
    _setValue = _React$useState2[1];

  var nativeInputRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return {
      clear: function clear() {
        _setValue('');
      },
      focus: function focus() {
        var _nativeInputRef$curre;

        (_nativeInputRef$curre = nativeInputRef.current) === null || _nativeInputRef$curre === void 0
          ? void 0
          : _nativeInputRef$curre.focus();
      },
      blur: function blur() {
        var _nativeInputRef$curre2;

        (_nativeInputRef$curre2 = nativeInputRef.current) === null || _nativeInputRef$curre2 === void 0
          ? void 0
          : _nativeInputRef$curre2.blur();
      },
      setValue: function setValue(val) {
        _setValue(val);
      },
    };
  });
  var handleKeydown = React.useCallback(
    function (e) {
      var _props$onKeyDown;

      if (props.onEnterPress && e.code === 'Enter') {
        props.onEnterPress(e);
      }

      (_props$onKeyDown = props.onKeyDown) === null || _props$onKeyDown === void 0
        ? void 0
        : _props$onKeyDown.call(props, e);
    },
    [props]
  );
  var showClearable = React.useMemo(
    function () {
      if (!props.clearable || !value || props.readOnly) return false;
      return true;
    },
    [props.clearable, props.readOnly, value]
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: cx(classPrefix, _defineProperty({}, ''.concat(classPrefix, '-disabled'), props.disabled)),
    },
    /*#__PURE__*/ React.createElement('input', {
      ref: nativeInputRef,
      id: props.id,
      style: props.style,
      className: cx(''.concat(classPrefix, '-element'), props.className),
      placeholder: props.placeholder,
      autoFocus: props.autoFocus,
      value: value,
      disabled: props.disabled,
      readOnly: props.readOnly,
      maxLength: props.maxLength,
      minLength: props.minLength,
      autoComplete: props.autoComplete,
      inputMode: props.inputMode,
      type: props.type,
      name: props.name,
      autoCapitalize: props.autoCapitalize,
      autoCorrect: props.autoCorrect,
      onKeyDown: handleKeydown,
      onKeyUp: props.onKeyUp,
      onCompositionStart: props.onCompositionStart,
      onCompositionEnd: props.onCompositionEnd,
      onClick: props.onClick,
      onChange: function onChange(e) {
        var _props$onChange;

        _setValue(e.target.value);

        (_props$onChange = props.onChange) === null || _props$onChange === void 0
          ? void 0
          : _props$onChange.call(props, e.target.value);
      },
      onFocus: props.onFocus,
      onBlur: props.onBlur,
    }),
    showClearable &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(classPrefix, '-clear'),
          onMouseDown: function onMouseDown(e) {
            e.preventDefault();
          },
          onClick: function onClick() {
            var _props$onClear;

            _setValue('');

            (_props$onClear = props.onClear) === null || _props$onClear === void 0
              ? void 0
              : _props$onClear.call(props);
          },
        },
        /*#__PURE__*/ React.createElement(CloseCircleFill, null)
      )
  );
});
Input.defaultProps = {
  autoComplete: 'off',
  autoCapitalize: 'off',
  autoCorrect: 'off',
  value: '',
  id: 'ygm-input',
  type: 'text',
};
Input.displayName = 'Input';
export default Input;
