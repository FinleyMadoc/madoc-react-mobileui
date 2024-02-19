import React from 'react';
import { MaskProps } from '../mask';
import { Action } from './dialog-action-button';
import './styles/index.scss';
export interface DialogProps {
  title?: React.ReactNode;
  content?: React.ReactNode;
  visible?: boolean;
  actions?: Action[];
  maskStyle?: MaskProps['style'];
  closeOnAction?: boolean;
  onClose?: () => void;
  afterShow?: () => void;
  afterClose?: () => void;
  onAction?: (action: Action, index: number) => void | Promise<void>;
}
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
