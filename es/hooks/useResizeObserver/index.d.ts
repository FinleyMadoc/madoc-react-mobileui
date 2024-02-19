import React from 'react';
declare const useResizeObserver: <T extends HTMLElement>(
  callback: (target: T) => void,
  targetRef: React.RefObject<T>
) => void;
export default useResizeObserver;
