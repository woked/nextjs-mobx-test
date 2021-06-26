import {Settings} from 'features/catalog/components/settings/settings';
import {useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import {TileListContainer} from 'features/catalog/components/tileListContainer/tileListContainer';
import {useUI} from 'features/catalog/hooks/useUI';
import {Context} from 'features/catalog/context';
import {IItemsStore, IUIStore} from 'features/catalog/interfaces';

const MIN_COLUMNS = 1;
const MAX_COLUMNS = 7;

type PropsType = {
  ui: IUIStore;
  items: IItemsStore;
};

const Catalog = observer(() => {
  const {columns, setColumns} = useUI();

  const emptyElement = useMemo(() => <span>List of items is empty</span>, []);

  return (
    <>
      <Settings
        minColumns={MIN_COLUMNS}
        maxColumns={MAX_COLUMNS}
        currentColumns={columns}
        onChange={setColumns}
      />
      <TileListContainer emptyElement={emptyElement} />
    </>
  );
});

export const CatalogContainer = observer<PropsType>((state) => {
  return (
    <Context.Provider value={state}>
      <Catalog />
    </Context.Provider>
  );
});

export default CatalogContainer;
