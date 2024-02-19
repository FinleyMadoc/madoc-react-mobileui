import React from 'react';
export interface Options extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}
declare const useIntersectionObserver: (
  targetRef: React.RefObject<Element | null>,
  { threshold, root, rootMargin, freezeOnceVisible }: Options
) => IntersectionObserverEntry;
export default useIntersectionObserver;
