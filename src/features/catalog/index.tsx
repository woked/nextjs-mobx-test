import {Settings} from 'features/catalog/components/settings/settings';
import {useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import {TileListContainer} from 'features/catalog/components/tileListContainer/tileListContainer';
import {Context} from 'features/catalog/context';
import {useUiSettingsStore} from 'features/catalog/hooks';
import {IStateType} from 'features/catalog/interfaces';

import s from './index.module.scss';

const MIN_COLUMNS = 1;
const MAX_COLUMNS = 7;

const Catalog = observer(() => {
  const {columns, setColumns} = useUiSettingsStore();

  const emptyElement = useMemo(() => <span>List of items is empty</span>, []);

  return (
    <>
      <div className={s.settings}>
        <Settings
          minColumns={MIN_COLUMNS}
          maxColumns={MAX_COLUMNS}
          currentColumns={columns}
          onChange={setColumns}
        />
      </div>
      <TileListContainer emptyElement={emptyElement} />
    </>
  );
});

type PropsType = IStateType;

export const CatalogContainer = observer<PropsType>((state) => {
  return (
    <Context.Provider value={state}>
      <Catalog />
    </Context.Provider>
  );
});

export default CatalogContainer;
