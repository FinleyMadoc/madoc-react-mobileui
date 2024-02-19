import _parseFloat from '@babel/runtime-corejs3/core-js-stable/parse-float';
export var pxToNumber = function pxToNumber(value) {
  var num = _parseFloat(value);

  return isNaN(num) ? 0 : num;
};
