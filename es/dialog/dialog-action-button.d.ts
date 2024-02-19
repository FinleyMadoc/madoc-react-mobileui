import React from 'react';
export interface Action {
  key: string;
  text: React.ReactNode;
  color?: 'danger' | 'primary' | 'default';
  disable?: boolean;
  onClick?: () => void | Promise<void>;
}
interface DialogActionButtonProps {
  action: Action;
  onAction: () => void | Promise<void>;
}
declare const DialogActionButton: React.FC<DialogActionButtonProps>;
export default DialogActionButton;
