import {useContext} from 'react';
import {RootStoreContext} from '../context';
import {isExist} from 'types/utils';
import {RootStore} from 'store/root';

export const useRootStore = (): RootStore => {
  const store = useContext(RootStoreContext);

  if (isExist(store)) return store;

  throw new Error('root store is missing');
};
