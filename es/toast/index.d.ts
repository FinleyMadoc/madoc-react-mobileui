export type { ToastShowProps } from './method';
import { show } from './method';
export interface ToastProps {
  show: typeof show;
}
declare const Toast: {
  show: (p: string | import('./toast').ToastProps) => void;
};
export default Toast;
