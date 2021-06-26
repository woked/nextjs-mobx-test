import {useContext} from 'react';
import {Context} from 'features/catalog/context';
import {IUIStore} from 'features/catalog/interfaces';

export const useUI = () => {
  const {ui} = useContext(Context);

  return ui as IUIStore;
};
