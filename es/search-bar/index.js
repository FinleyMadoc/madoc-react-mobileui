import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import React from 'react';
import Input from '../input';
import { SearchOutline } from 'antd-mobile-icons';
import './styles/index.scss';
var classPrefix = 'ygm-search-bar';
var SearchBar = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var _props$style, _props$style2;

  var _React$useState = React.useState(props.value),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];

  var composingRef = React.useRef(false);
  var inputRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return {
      clear: function clear() {
        var _inputRef$current;

        return (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0
          ? void 0
          : _inputRef$current.clear();
      },
      focus: function focus() {
        var _inputRef$current2;

        return (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0
          ? void 0
          : _inputRef$current2.focus();
      },
      blur: function blur() {
        var _inputRef$current3;

        return (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0
          ? void 0
          : _inputRef$current3.blur();
      },
      setValue: function setValue(val) {
        var _inputRef$current4;

        return (_inputRef$current4 = inputRef.current) === null || _inputRef$current4 === void 0
          ? void 0
          : _inputRef$current4.setValue(val);
      },
    };
  });

  var onChange = function onChange(value) {
    var _props$onChange;

    setValue(value);
    (_props$onChange = props.onChange) === null || _props$onChange === void 0
      ? void 0
      : _props$onChange.call(props, value);
  };

  var onEnterPress = function onEnterPress() {
    // 在拼音输入法输入汉字时，避免enter键的搜索触发
    if (!composingRef.current) {
      var _inputRef$current5, _props$onSearch;

      (_inputRef$current5 = inputRef.current) === null || _inputRef$current5 === void 0
        ? void 0
        : _inputRef$current5.blur();
      (_props$onSearch = props.onSearch) === null || _props$onSearch === void 0
        ? void 0
        : _props$onSearch.call(props, value);
    }
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
      style: props.style,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-content'),
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(classPrefix, '-content-icon'),
        },
        props.icon
      ),
      /*#__PURE__*/ React.createElement(Input, {
        ref: inputRef,
        className: ''.concat(classPrefix, '-content-input'),
        style: {
          '--placeholder-color':
            (_props$style = props.style) === null || _props$style === void 0
              ? void 0
              : _props$style['--placeholder-color'],
          '--color':
            (_props$style2 = props.style) === null || _props$style2 === void 0 ? void 0 : _props$style2['--color'],
        },
        placeholder: props.placeholder,
        value: value,
        disabled: props.disabled,
        maxLength: props.maxLength,
        clearable: props.clearable,
        type: 'search',
        onChange: onChange,
        onClear: props.onClear,
        onEnterPress: onEnterPress, // 当用户使用拼音输入法开始输入汉字时，这个事件就会被触发。
        onCompositionStart: function onCompositionStart() {
          composingRef.current = true;
        },
        onCompositionEnd: function onCompositionEnd() {
          composingRef.current = false;
        },
      })
    ),
    props.showCancel &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(classPrefix, '-content-cancel'),
          role: 'button',
          onClick: props.onCancel,
        },
        props.cancelText
      )
  );
});
SearchBar.defaultProps = {
  value: '',
  icon: /*#__PURE__*/ React.createElement(SearchOutline, null),
  clearable: true,
  cancelText: '取消',
};
SearchBar.displayName = 'SearchBar';
export default SearchBar;
