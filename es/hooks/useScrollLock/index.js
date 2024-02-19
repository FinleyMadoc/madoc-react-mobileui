import useIsomorphicLayoutEffect from '../useIsomorphicLayoutEffect';

var useScrollLock = function useScrollLock(visible) {
  useIsomorphicLayoutEffect(
    function () {
      if (!visible) return;
      var el = document.getElementsByTagName('html')[0];
      el.style.overflow = 'hidden';
      return function () {
        el.style.overflow = '';
      };
    },
    [visible]
  );
};

export default useScrollLock;
