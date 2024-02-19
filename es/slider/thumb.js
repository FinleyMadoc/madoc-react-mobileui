import React from 'react';
import './styles/thumb.scss';
var classPrefix = 'ygm-slider-thumb';

var Thumb = function Thumb(props) {
  var startX = React.useRef(0);
  var endX = React.useRef(0);
  var prevValue = React.useRef(0);
  var currentPosition = ''.concat(((props.value - props.min) / (props.max - props.min)) * 100, '%');

  var onTouchStart = function onTouchStart(e) {
    if (props.disabled) return;
    prevValue.current = props.value; // X轴上取值

    startX.current = e.touches[0].clientX;
  };

  var onTouchMove = function onTouchMove(e) {
    var trckElement = props.trackRef.current;
    if (!trckElement || props.disabled) return;
    var deltaX = e.touches[0].clientX - startX.current;
    var total = trckElement.offsetWidth;
    var position = (deltaX / total) * (props.max - props.min);
    var finalPosition = position + prevValue.current;
    endX.current = finalPosition;
    props.onDrag(finalPosition);
  };

  var onTouchEnd = function onTouchEnd(e) {
    props === null || props === void 0 ? void 0 : props.onChangeAfter(endX.current);
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
      style: {
        left: currentPosition,
      },
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd,
    },
    /*#__PURE__*/ React.createElement('div', {
      className: ''.concat(classPrefix, '-button'),
    })
  );
};

Thumb.displayName = 'Thumb';
export default Thumb;
