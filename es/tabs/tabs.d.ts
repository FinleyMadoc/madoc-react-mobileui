import React from 'react';
import './styles/index.scss';
export interface TabsProps {
  activeKey: string;
  children?: React.ReactNode;
  showTabLine?: boolean;
  type?: 'line' | 'card';
  onChange?: (key: string) => void;
  tabActiveClassName?: string;
  tabListClassName?: string;
  tabContentClassName?: string;
}
declare const Tabs: React.FC<TabsProps>;
export default Tabs;
