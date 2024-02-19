import React from 'react';
import cx from 'classnames';

import './styles/index.module.scss';

export interface CardProps {
  // 左边
  title?: React.ReactNode;
  // 右边
  extra?: React.ReactNode;
  // 自定义类名
  headerClassName?: string;
  // 左边标题的自定义类名
  titleClassName?: string;
  // 右边更多内容的自定义类名
  extraClassName?: string;
  bodyClassNmae?: string;
  children?: React.ReactNode;
  onHeaderClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onBodyClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const classPrefix = 'ygm-card';

const Card: React.FC<CardProps> = (props) => {
  const renderHeader = () => {
    if (!(props.title || props.extra)) return null;
    // console.log('props', props);

    return (
      <div className={cx(`ygm-card-header`, props.headerClassName)} onClick={props.onHeaderClick}>
        <div className={cx(`ygm-card-header-title`, props.titleClassName)}>{props.title}</div>
        <div className={cx(`ygm-card-header-extra`, props.extraClassName)}>{props.extra}</div>
      </div>
      //   <div style={{ display: 'flex', justifyContent: 'space-between' }} onClick={props.onHeaderClick}>
      //     <div >{props.title}</div>
      //     <div >{props.extra}</div>
      //   </div>
    );
  };

  const renderBody = () => {
    if (!props.children) return null;

    return (
      <div
        className={cx(`${classPrefix}-body`, props.bodyClassNmae)}
        onClick={props.onBodyClick}
        style={{ paddingTop: props.title || props.extra ? 0 : 13 }}
      >
        {props.children}
      </div>
    );
  };

  return (
    <div className={classPrefix}>
      {renderHeader()}
      {renderBody()}
    </div>
  );
};

export default Card;
