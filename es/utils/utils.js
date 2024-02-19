export var getValueByScope = function getValueByScope(value, min, max) {
  var newValue = Math.max(value, min);
  newValue = Math.min(newValue, max);
  return newValue;
};
