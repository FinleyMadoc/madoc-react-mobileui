import _asyncToGenerator from '@babel/runtime-corejs3/helpers/asyncToGenerator';
import _regeneratorRuntime from '@babel/runtime-corejs3/regenerator';
import React from 'react';

var useLockFn = function useLockFn(fn) {
  var lockRef = React.useRef(false);
  return React.useCallback(
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime.mark(function _callee() {
        var ret,
          _args = arguments;
        return _regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  if (!lockRef.current) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt('return');

                case 2:
                  lockRef.current = true;
                  _context.prev = 3;
                  _context.next = 6;
                  return fn.apply(void 0, _args);

                case 6:
                  ret = _context.sent;
                  lockRef.current = false;
                  return _context.abrupt('return', ret);

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context['catch'](3);
                  lockRef.current = false;
                  throw _context.t0;

                case 15:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[3, 11]]
        );
      })
    ),
    [fn]
  );
};

export default useLockFn;
