import {FC} from 'react';
import classNames from 'classnames';

import s from './tile.module.scss';

export type PropsType = {
  id: number;
  title: string;
  isActive: boolean;
  onClick(id: number): void;
};

export const Tile: FC<PropsType> = ({id, title, isActive, onClick}) => {
  return (
    <div
      className={classNames(s.wrap, {[s.active]: isActive})}
      onClick={() => onClick(id)}>
      <div className={s.content}>
        <span>{title}</span>
      </div>
      <div className={s.background} />
    </div>
  );
};
