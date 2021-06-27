import {IItemsStore, IUIStore} from 'features/catalog/interfaces';

export type RootStoreHydrationType = {
  itemsStore?: Pick<IItemsStore, 'items'>;
  uiSettingsStore?: Pick<IUIStore, 'columns'>;
};

export class RootStore {
  constructor(
    public readonly itemsStore: IItemsStore,
    public readonly uiSettingsStore: IUIStore,
  ) {}

  public hydrate(data: RootStoreHydrationType) {
    if (data.itemsStore) {
      this.itemsStore.setItems(data.itemsStore.items);
    }

    if (data.uiSettingsStore) {
      this.uiSettingsStore.setColumns(data.uiSettingsStore.columns);
    }
  }
}
