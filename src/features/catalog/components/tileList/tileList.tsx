import {FC} from 'react';
import {ItemType} from 'features/catalog/types/products';
import classNames from 'classnames';
import {NonEmptyArray} from 'types/utils';
import {TileContainer} from 'features/catalog/components/tileContainer/tileContainer';

import s from './tileList.module.scss';

type PropsType = {
  items: NonEmptyArray<ItemType>;
  columns: number;
  className?: string;
};

export const TileList: FC<PropsType> = ({className, items, columns}) => {
  const style = {width: `calc(100% / ${columns})`};

  return (
    <div className={classNames(s.wrap, className)}>
      {items.map((item) => {
        return (
          <div key={item.id} className={s.tile} style={style}>
            <TileContainer id={item.id} title={item.title} />
          </div>
        );
      })}
    </div>
  );
};
