import _typeof from '@babel/runtime-corejs3/helpers/typeof';
export function isPromise(obj) {
  return !!obj && _typeof(obj) === 'object' && typeof obj.then === 'function';
}
