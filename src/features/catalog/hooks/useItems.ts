import {useContext} from 'react';
import {Context} from 'features/catalog/context';
import {IItemsStore} from 'features/catalog/interfaces';

export const useItems = () => {
  const context = useContext(Context);

  return context.items as IItemsStore;
};
