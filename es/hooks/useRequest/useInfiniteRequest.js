import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _Object$getOwnPropertySymbols from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _Object$getOwnPropertyDescriptor from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _Object$getOwnPropertyDescriptors from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors';
import _Object$defineProperties from '@babel/runtime-corejs3/core-js-stable/object/define-properties';
import _Object$defineProperty from '@babel/runtime-corejs3/core-js-stable/object/define-property';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime-corejs3/helpers/objectWithoutProperties';
var _excluded = ['fallbackData'];

function ownKeys(object, enumerableOnly) {
  var keys = _Object$keys(object);
  if (_Object$getOwnPropertySymbols) {
    var symbols = _Object$getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) {
        return _Object$getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var _context2, _context3;
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? _forEachInstanceProperty((_context2 = ownKeys(Object(source), !0))).call(_context2, function (key) {
          _defineProperty(target, key, source[key]);
        })
      : _Object$getOwnPropertyDescriptors
      ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source))
      : _forEachInstanceProperty((_context3 = ownKeys(Object(source)))).call(_context3, function (key) {
          _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

import _concatInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/concat';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import AxiosInstance from './axiosInstance';
import useSWRInfinite from 'swr/infinite';

function getKey(pageIndex, url) {
  var _context;

  return _concatInstanceProperty((_context = ''.concat(url, '?pageIndex='))).call(_context, pageIndex + 1);
}

function useRequestInfinite(request) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    fallbackData = _ref.fallbackData,
    config = _objectWithoutProperties(_ref, _excluded);

  var _useSWRInfinite = useSWRInfinite(
      function (pageIndex) {
        return getKey(pageIndex, request.url);
      },
      function (url) {
        return AxiosInstance.request({
          url: url,
        });
      },
      _objectSpread(
        _objectSpread({}, config),
        {},
        {
          revalidateFirstPage: false,
        }
      )
    ),
    response = _useSWRInfinite.data,
    error = _useSWRInfinite.error,
    isValidating = _useSWRInfinite.isValidating,
    mutate = _useSWRInfinite.mutate,
    size = _useSWRInfinite.size,
    setSize = _useSWRInfinite.setSize;

  return {
    data:
      response === null || response === void 0
        ? void 0
        : _mapInstanceProperty(response).call(response, function (item) {
            return item.data;
          }),
    response: response,
    mutate: mutate,
    error: error,
    isValidating: isValidating,
    size: size,
    setSize: setSize,
  };
}

export default useRequestInfinite;
