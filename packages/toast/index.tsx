export type { ToastShowProps } from '@/toast/method';

import { show } from '@/toast/method';

export interface ToastProps {
  show: typeof show;
}

const Toast = {
  show,
};

export default Toast;
