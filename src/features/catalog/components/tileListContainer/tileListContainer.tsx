import {observer} from 'mobx-react-lite';
import {TileList} from 'features/catalog/components/tileList/tileList';
import {isNonEmptyArray} from 'types/utils';
import {ReactElement, useEffect} from 'react';
import {useUI} from 'features/catalog/hooks/useUI';
import {useItems} from 'features/catalog/hooks/useItems';

type PropsType = {
  emptyElement: ReactElement;
};

export const TileListContainer = observer<PropsType>(({emptyElement}) => {
  const {columns} = useUI();
  const {items} = useItems();

  return isNonEmptyArray(items) ? (
    <TileList items={items} columns={columns} />
  ) : (
    emptyElement
  );
});
