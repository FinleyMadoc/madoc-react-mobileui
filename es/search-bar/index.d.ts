import React from 'react';
import { InputRef } from '../input';
import './styles/index.scss';
declare type TStyle = Partial<
  Record<'--color' | '--background' | '--search-background' | '--border-radius' | '--placeholder-color', string>
>;
export declare type SearchBarRef = InputRef;
export interface SearchBarProps {
  /** 输入内容 */
  value?: string;
  /** 提示文本 */
  placeholder?: string;
  /** 搜索框前缀图标 */
  icon?: React.ReactNode;
  /** 输入的最大字符数 */
  maxLength?: number;
  /** 是否显示清除图标，可点击清除文本框 */
  clearable?: boolean;
  /** 禁止输入 */
  disabled?: boolean;
  style?: React.CSSProperties & TStyle;
  /** 取消按钮文案 */
  cancelText?: string;
  /** 是否显示取消按钮 */
  showCancel?: boolean;
  /** 点击取消按钮时触发事件 */
  onCancel?: () => void;
  /** 输入框回车键触发事件 */
  onSearch?: (val: string) => void;
  /** 输入框内容变化时触发事件 */
  onChange?: (val: string) => void;
  /** 点击清除图标时触发事件 */
  onClear?: () => void;
}
declare const SearchBar: React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<InputRef>>;
export default SearchBar;
