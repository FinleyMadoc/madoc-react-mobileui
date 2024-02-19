import React from 'react';
export interface TabProps {
  key: string;
  title: string;
  children?: React.ReactNode;
}
declare const Tab: React.FC<TabProps>;
export default Tab;
