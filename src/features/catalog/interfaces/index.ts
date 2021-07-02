import {ItemsType, ItemType} from 'features/catalog/types/products';

export interface IItemsStore {
  items: ItemsType;

  isSelectedItem(id: ItemType['id']): boolean;
  setItems(items: ItemsType): void;
  setSelected(items: ItemType['id']): void;
}

export interface IUIStore {
  columns: number;

  setColumns(columns: number, persist?: boolean): void;
}

export interface IStateType {
  uiSettingsStore: IUIStore;
  itemsStore: IItemsStore;
}
