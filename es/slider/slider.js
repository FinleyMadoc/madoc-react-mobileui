import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import React from 'react';
import cx from 'classnames';
import Thumb from './thumb';
import { getValueByScope } from '../utils/utils';
import './styles/slider.scss';
var classPrefix = 'ygm-slider';
var Slider = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var trackRef = React.useRef(null);
  console.log('props.value', props.value);

  var _React$useState = React.useState(getValueByScope(props.value, props.min, props.max)),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    sliderValue = _React$useState2[0],
    setSliderValue = _React$useState2[1];

  React.useImperativeHandle(ref, function () {
    return {
      setValue: function setValue(val) {
        setSliderValue(getValueByScope(val, props.min, props.max));
      },
    };
  });
  var scope = props.max - props.min;
  var fillSize = ''.concat(((sliderValue - props.min) * 100) / scope, '%');

  var getValueByPosition = function getValueByPosition(position) {
    var newPosition = getValueByScope(position, props.min, props.max);
    var value = Math.round(newPosition / props.step) * props.step;
    return value;
  };

  var onDrag = function onDrag(position) {
    var _props$onChange;

    var targetValue = getValueByPosition(position);
    console.log('targetValue', targetValue);
    setSliderValue(targetValue);
    (_props$onChange = props.onChange) === null || _props$onChange === void 0
      ? void 0
      : _props$onChange.call(props, targetValue);
  };

  var onEnd = function onEnd(position) {
    var _props$onChangeAfter;

    var targetValue = getValueByPosition(position);
    (_props$onChangeAfter = props.onChangeAfter) === null || _props$onChangeAfter === void 0
      ? void 0
      : _props$onChangeAfter.call(props, targetValue);
  };

  var onTrack = function onTrack(e) {
    var _props$onChangeAfter2;

    e.stopPropagation();
    var track = trackRef.current;
    if (props.disabled || !track) return;
    var rect = track.getBoundingClientRect();
    var sliderWidth = rect.width;
    var sliderOffsetLeft = rect.left;
    var delta = e.clientX - sliderOffsetLeft;
    var position = (delta / sliderWidth) * scope + props.min;
    var targetValue = getValueByPosition(position);
    setSliderValue(targetValue);
    (_props$onChangeAfter2 = props.onChangeAfter) === null || _props$onChangeAfter2 === void 0
      ? void 0
      : _props$onChangeAfter2.call(props, targetValue);
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: cx(classPrefix, _defineProperty({}, ''.concat(classPrefix, '-disable'), props.disabled)),
      style: props.style,
      ref: trackRef,
      onClick: onTrack,
    },
    /*#__PURE__*/ React.createElement('div', {
      className: ''.concat(classPrefix, '-fill'),
      style: {
        width: fillSize,
      },
    }),
    /*#__PURE__*/ React.createElement(Thumb, {
      value: sliderValue,
      min: props.min,
      max: props.max,
      disabled: props.disabled,
      trackRef: trackRef,
      onDrag: onDrag,
      onChangeAfter: onEnd,
    })
  );
});
Slider.defaultProps = {
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  value: 0,
};
Slider.displayName = 'Slider';
export default Slider;
