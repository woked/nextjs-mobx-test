import {createContext} from 'react';
import {IItemsStore, IUIStore} from 'features/catalog/interfaces';
import {Maybe} from 'types/utils';

type StateType = {
  ui: Maybe<IUIStore>;
  items: Maybe<IItemsStore>;
};

export const Context = createContext<StateType>({
  ui: null,
  items: null,
});
