import {ItemsType, ItemType} from 'features/catalog/types/products';
import {Maybe} from 'types/utils';
import {action, makeObservable, observable} from 'mobx';
import {IItemsStore} from 'features/catalog/interfaces';

export class ItemsStore implements IItemsStore {
  items: ItemsType = [];
  selected: Maybe<ItemType['id']> = null;

  constructor() {
    makeObservable(this, {
      items: observable,
      selected: observable,
      setItems: action,
      setSelected: action,
    });
  }

  isSelectedItem = (id: ItemType['id']): boolean => {
    return this.selected === id;
  };

  setItems = (items: ItemsType) => {
    this.items = items;
  };

  setSelected = (id: ItemType['id']): void => {
    this.selected = id;
  };
}
