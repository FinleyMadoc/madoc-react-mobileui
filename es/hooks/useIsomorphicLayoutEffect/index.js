import React from 'react';
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
export default useIsomorphicLayoutEffect;
