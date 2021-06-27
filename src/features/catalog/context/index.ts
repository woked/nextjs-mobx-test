import {createContext} from 'react';
import {IStateType} from 'features/catalog/interfaces';
import {Maybe} from 'types/utils';

export const Context = createContext<Maybe<IStateType>>(null);
