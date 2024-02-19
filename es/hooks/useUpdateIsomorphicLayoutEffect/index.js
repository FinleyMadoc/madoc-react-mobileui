import React from 'react';
import useIsomorphicLayoutEffect from '../useIsomorphicLayoutEffect';

var useUpdateIsomorphicLayoutEffect = function useUpdateIsomorphicLayoutEffect(callback, deep) {
  var isMounted = React.useRef(false);
  useIsomorphicLayoutEffect(function () {
    return function () {
      isMounted.current = false;
    };
  }, []);
  useIsomorphicLayoutEffect(function () {
    if (!isMounted.current) {
      isMounted.current = true;
    } else {
      callback();
    }
  }, deep);
};

export default useUpdateIsomorphicLayoutEffect;
