import useIsomorphicLayoutEffect from '../useIsomorphicLayoutEffect';

var useResizeObserver = function useResizeObserver(callback, targetRef) {
  useIsomorphicLayoutEffect(function () {
    var element = targetRef.current;
    if (!element) return;

    if (window.ResizeObserver) {
      var observer = new ResizeObserver(function () {
        callback(element);
      });
      observer.observe(element);
      return function () {
        observer.disconnect();
      };
    }

    callback(element);
    return function () {
      return null;
    };
  }, []);
};

export default useResizeObserver;
