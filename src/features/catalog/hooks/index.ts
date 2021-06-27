import {useContext} from 'react';
import {Context} from 'features/catalog/context';
import {isExist} from 'types/utils';
import {IItemsStore, IUIStore, IStateType} from 'features/catalog/interfaces';

export const useRootStore = (): IStateType => {
  const store = useContext(Context);

  if (isExist(store)) return store;

  throw new Error('store is missing');
};

export const useItemsStore = (): IItemsStore => {
  const store = useRootStore();

  return store.itemsStore;
};

export const useUiSettingsStore = (): IUIStore => {
  const store = useRootStore();

  return store.uiSettingsStore;
};
