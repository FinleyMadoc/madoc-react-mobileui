import { useRequest, useInfiniteRequest } from './useRequest';
declare const _default: {
  useIntersectionObserver: (
    targetRef: import('react').RefObject<Element>,
    { threshold, root, rootMargin, freezeOnceVisible }: import('./useIntersectionObserver').Options
  ) => IntersectionObserverEntry;
  useIsomorphicLayoutEffect: typeof import('react').useEffect;
  useLockFn: <P extends any[] = any[], V = any>(fn: (...args: P) => Promise<V>) => (...args: P) => Promise<V>;
  useReadLocalStorage: <T>(key: string) => T;
  useRequest: typeof useRequest;
  useInfiniteRequest: typeof useInfiniteRequest;
  useResizeObserver: <T_1 extends HTMLElement>(
    callback: (target: T_1) => void,
    targetRef: import('react').RefObject<T_1>
  ) => void;
  useScrollLock: (visible: boolean) => void;
  useUpdateIsomorphicLayoutEffect: (
    callback: import('react').EffectCallback,
    deep?: import('react').DependencyList
  ) => void;
};
export default _default;
