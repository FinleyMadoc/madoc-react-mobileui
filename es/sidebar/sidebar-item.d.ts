import React from 'react';
export interface SidebarItemProps {
  key: string;
  title: React.ReactNode;
  children: React.ReactNode;
}
declare const SidebarItem: React.FC<SidebarItemProps>;
export default SidebarItem;
