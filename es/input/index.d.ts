import React from 'react';
import './styles/index.scss';
declare type TStyle = Partial<Record<'--color' | '--placeholder-color', string>>;
export interface InputRef {
  clear: () => void;
  focus: () => void;
  blur: () => void;
  setValue: (val: string) => void;
}
export interface InputProps {
  id?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  /** 是否显示清除icon */
  clearable?: boolean;
  style?: React.CSSProperties & TStyle;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  maxLength?: number;
  minLength?: number;
  max?: number;
  min?: number;
  pattern?: string;
  name?: string;
  autoComplete?: 'on' | 'off';
  autoCapitalize?: 'on' | 'off';
  autoCorrect?: 'on' | 'off';
  inputMode?: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
  type?: React.HTMLInputTypeAttribute;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  onCompositionStart?: React.CompositionEventHandler<HTMLInputElement>;
  onCompositionEnd?: React.CompositionEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (val: string) => void;
  onClear?: () => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<InputRef>>;
export default Input;
