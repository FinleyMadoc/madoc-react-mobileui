export var moduls = function moduls(value, division) {
  var remainder = value % division;
  return remainder < 0 ? remainder + division : remainder;
};
