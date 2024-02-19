import React from 'react';
export interface InfiniteScrollProps {
  hasMore: boolean;
  loadMore: () => Promise<void>;
  footer?: React.ReactNode;
  children: React.ReactNode;
}
declare const InfiniteScroll: React.FC<InfiniteScrollProps>;
export default InfiniteScroll;
