import {Settings} from 'features/catalog/components/settings/settings';
import {useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import {TileListContainer} from 'features/catalog/components/tileListContainer/tileListContainer';
import {Context} from 'features/catalog/context';
import {useUiSettingsStore} from 'features/catalog/hooks';
import {IStateType} from 'features/catalog/interfaces';

import s from './index.module.scss';

type CatalogPropsType = {
  minColumns: number;
  maxColumns: number;
};

const Catalog = observer<CatalogPropsType>(({minColumns, maxColumns}) => {
  const {columns, setColumns} = useUiSettingsStore();

  const emptyElement = useMemo(() => <span>List of items is empty</span>, []);

  return (
    <>
      <div className={s.settings}>
        <Settings
          minColumns={minColumns}
          maxColumns={maxColumns}
          currentColumns={columns}
          onChange={setColumns}
        />
      </div>
      <TileListContainer emptyElement={emptyElement} />
    </>
  );
});

type PropsType = IStateType & CatalogPropsType;

export const CatalogContainer = observer<PropsType>(
  ({itemsStore, uiSettingsStore, ...props}) => {
    const state = useMemo(
      () => ({itemsStore, uiSettingsStore}),
      [itemsStore, uiSettingsStore],
    );

    return (
      <Context.Provider value={state}>
        <Catalog {...props} />
      </Context.Provider>
    );
  },
);

export default CatalogContainer;
