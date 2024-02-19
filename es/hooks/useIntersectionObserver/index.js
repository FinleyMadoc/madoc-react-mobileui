import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import React from 'react';

var useIntersectionObserver = function useIntersectionObserver(targetRef, _ref) {
  var _ref$threshold = _ref.threshold,
    threshold = _ref$threshold === void 0 ? 0 : _ref$threshold,
    _ref$root = _ref.root,
    root = _ref$root === void 0 ? null : _ref$root,
    _ref$rootMargin = _ref.rootMargin,
    rootMargin = _ref$rootMargin === void 0 ? '0%' : _ref$rootMargin,
    _ref$freezeOnceVisibl = _ref.freezeOnceVisible,
    freezeOnceVisible = _ref$freezeOnceVisibl === void 0 ? false : _ref$freezeOnceVisibl;

  var _React$useState = React.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    entry = _React$useState2[0],
    setEntry = _React$useState2[1];

  var frozen = (entry === null || entry === void 0 ? void 0 : entry.isIntersecting) && freezeOnceVisible; // console.log("entry?.isIntersecting", entry?.isIntersecting);

  React.useEffect(
    function () {
      var element = targetRef.current;
      if (!element || frozen) return;
      var observerParams = {
        threshold: threshold,
        root: root,
        rootMargin: rootMargin,
      };
      var ob = new IntersectionObserver(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 1),
          entry = _ref3[0];

        setEntry(entry);
      }, observerParams);
      ob.observe(element);
      return function () {
        ob.disconnect();
      };
    },
    [threshold, root, rootMargin, targetRef, frozen]
  );
  return entry;
};

export default useIntersectionObserver;
