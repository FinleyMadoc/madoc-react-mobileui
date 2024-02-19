import React from 'react';
import cx from 'classnames';
import './styles/index.module.scss';
var classPrefix = 'ygm-card';

var Card = function Card(props) {
  var renderHeader = function renderHeader() {
    if (!(props.title || props.extra)) return null; // console.log('props', props);

    return /*#__PURE__*/ React.createElement(
      'div',
      {
        className: cx('ygm-card-header', props.headerClassName),
        onClick: props.onHeaderClick,
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: cx('ygm-card-header-title', props.titleClassName),
        },
        props.title
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: cx('ygm-card-header-extra', props.extraClassName),
        },
        props.extra
      )
    ); //   <div style={{ display: 'flex', justifyContent: 'space-between' }} onClick={props.onHeaderClick}>
    //     <div >{props.title}</div>
    //     <div >{props.extra}</div>
    //   </div>
  };

  var renderBody = function renderBody() {
    if (!props.children) return null;
    return /*#__PURE__*/ React.createElement(
      'div',
      {
        className: cx(''.concat(classPrefix, '-body'), props.bodyClassNmae),
        onClick: props.onBodyClick,
        style: {
          paddingTop: props.title || props.extra ? 0 : 13,
        },
      },
      props.children
    );
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
    },
    renderHeader(),
    renderBody()
  );
};

export default Card;
