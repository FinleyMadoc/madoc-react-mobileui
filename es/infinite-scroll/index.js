import _asyncToGenerator from '@babel/runtime-corejs3/helpers/asyncToGenerator';
import _regeneratorRuntime from '@babel/runtime-corejs3/regenerator';
import React from 'react';
import SpinnerLoading from '../spinner-loading';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import useLockFn from '../hooks/useLockFn';
var classPrefix = 'ygm-infinite-scroll';

var InfiniteScroll = function InfiniteScroll(props) {
  var intersectionEleRef = React.useRef(null);
  var doLoadMore = useLockFn(function () {
    return props.loadMore();
  });
  var observerEntry = useIntersectionObserver(intersectionEleRef, {});
  var check = React.useCallback(
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ _regeneratorRuntime.mark(function _callee() {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                if (observerEntry !== null && observerEntry !== void 0 && observerEntry.isIntersecting) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                if (props.hasMore) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt('return');

              case 4:
                doLoadMore();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    ),
    [doLoadMore, observerEntry === null || observerEntry === void 0 ? void 0 : observerEntry.isIntersecting, props]
  );
  React.useEffect(
    function () {
      check();
    },
    [check]
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
    },
    props.children,
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-load'),
      },
      props.footer && props.footer,
      props.footer && props.hasMore
        ? /*#__PURE__*/ React.createElement(SpinnerLoading, {
            size: 16,
          })
        : ''
    )
  );
};

InfiniteScroll.displayName = 'InfiniteScroll';
export default InfiniteScroll;
