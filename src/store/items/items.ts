import {ItemsType, ItemType} from 'features/catalog/types/products';
import {action, makeObservable, observable} from 'mobx';
import {IItemsStore} from 'features/catalog/interfaces';

export class ItemsStore implements IItemsStore {
  items: ItemsType = [];
  private selected = observable.map<ItemType['id'], ItemType['id']>();

  constructor() {
    makeObservable(this, {
      items: observable,
      setItems: action,
      setSelected: action,
    });
  }

  isSelectedItem = (id: ItemType['id']): boolean => {
    return this.selected.has(id);
  };

  setItems = (items: ItemsType) => {
    this.items = items;
  };

  setSelected = (id: ItemType['id']): void => {
    this.selected.clear();
    this.selected.set(id, id);
  };
}
