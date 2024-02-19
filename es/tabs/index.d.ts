import InternalTabs from './tabs';
import Tab from './tab';
export type { TabsProps } from './tabs';
export type { TabProps } from './tab';
declare type InternalTabsType = typeof InternalTabs;
export interface TabsInterface extends InternalTabsType {
  Tab: typeof Tab;
}
declare const Tabs: TabsInterface;
export default Tabs;
