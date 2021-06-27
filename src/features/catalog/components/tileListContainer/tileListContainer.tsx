import {observer} from 'mobx-react-lite';
import {TileList} from 'features/catalog/components/tileList/tileList';
import {isNonEmptyArray} from 'types/utils';
import {ReactElement} from 'react';
import {useItemsStore, useUiSettingsStore} from 'features/catalog/hooks';

type PropsType = {
  emptyElement: ReactElement;
};

export const TileListContainer = observer<PropsType>(({emptyElement}) => {
  const {columns} = useUiSettingsStore();
  const {items} = useItemsStore();

  return isNonEmptyArray(items) ? (
    <TileList items={items} columns={columns} />
  ) : (
    emptyElement
  );
});
