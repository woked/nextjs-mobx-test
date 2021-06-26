import {ItemsType, ItemType} from 'features/catalog/types/products';
import {Maybe} from 'types/utils';

export interface IItemsStore {
  items: ItemsType;
  selected: Maybe<ItemType['id']>;

  isSelectedItem(id: ItemType['id']): boolean;
  setItems(items: ItemsType): void;
  setSelected(items: ItemType['id']): void;
  fetchItems(): Promise<void>;
}

export interface IUIStore {
  columns: number;

  setColumns(columns: number): void;
}
