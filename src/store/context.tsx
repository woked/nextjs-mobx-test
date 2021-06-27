import {createContext, ReactNode} from 'react';
import {RootStore, RootStoreHydrationType} from './root';
import {Maybe} from 'types/utils';
import {ItemsStore} from './items/items';
import {UiStore} from './uiSettings/ui';

export const RootStoreContext = createContext<Maybe<RootStore>>(null);

export const RootStoreProvider = ({
  children,
  hydrationData,
}: {
  children: ReactNode;
  hydrationData?: RootStoreHydrationType;
}) => {
  const store = initializeStore(hydrationData);

  return (
    <RootStoreContext.Provider value={store}>
      {children}
    </RootStoreContext.Provider>
  );
};

let store: Maybe<RootStore> = null;

const initializeStore = (initialData?: RootStoreHydrationType): RootStore => {
  const _store = store ?? new RootStore(new ItemsStore(), new UiStore());

  if (initialData) {
    _store.hydrate(initialData);
  }

  if (process.browser) {
    if (!store) store = _store;
  }

  return _store;
};
