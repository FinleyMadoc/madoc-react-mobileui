import InternalSidebar from './sidebar';
import SidebarItem from './sidebar-item';
export type { SidebarProps } from './sidebar';
export type { SidebarItemProps } from './sidebar-item';
declare type InternalSidebarType = typeof InternalSidebar;
export interface SidebarInterface extends InternalSidebarType {
  Item: typeof SidebarItem;
}
declare const Sidebar: SidebarInterface;
export default Sidebar;
