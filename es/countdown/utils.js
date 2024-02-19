import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import _indexOfInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/index-of';
//一天的毫秒数
var DAY_MILLISECONDS = 24 * 60 * 60 * 1000; // 一小时

var HOURS_MILLISECONDS = 60 * 60 * 1000; // 一分钟

var MIN_MILLISECONDS = 60 * 1000;

var formatTime = function formatTime(val) {
  if (val <= 0) return '00';
  return val < 10 ? '0'.concat(val) : ''.concat(val);
};

var getTime = function getTime(format, timeLeft) {
  var _context;

  var d = timeLeft;

  var _map = _mapInstanceProperty((_context = [1000, 60, 60, 24])).call(_context, function (unit) {
      var num = d % unit;
      d = Math.floor(d / unit);
      return num;
    }),
    _map2 = _slicedToArray(_map, 4),
    _ = _map2[0],
    s = _map2[1],
    m = _map2[2],
    h = _map2[3];

  if (timeLeft > DAY_MILLISECONDS && _indexOfInstanceProperty(format).call(format, 'd') === -1) {
    h += d * 24;
  }

  if (timeLeft > HOURS_MILLISECONDS && _indexOfInstanceProperty(format).call(format, 'h') === -1) {
    m += d * 24 * 60;
  }

  if (timeLeft > MIN_MILLISECONDS && _indexOfInstanceProperty(format).call(format, 'm') === -1) {
    s += d * 24 * 60 * 60;
  }

  return {
    dd: formatTime(d),
    hh: formatTime(h),
    mm: formatTime(m),
    ss: formatTime(s),
    d: d,
    h: h,
    m: m,
    s: s,
  };
};

export var getTimeItems = function getTimeItems(format, timeLeft) {
  // console.log("123456789");
  // 匹配format
  var timeArr = format.match(/[a-zA-Z]{1,3}/g) || []; // 匹配字符

  var symbolArr = format.match(/[\u4e00-\u9fa5]+|[^a-zA-Z]/g) || []; // console.log("timeArr",timeArr);
  // console.log("symbolArr",symbolArr);

  var time = getTime(format, timeLeft);
  return _mapInstanceProperty(timeArr).call(timeArr, function (item, i) {
    return {
      num: time[item.toLowerCase()],
      symbol: symbolArr[i],
    };
  });
};
