import {action, makeObservable, observable} from 'mobx';
import {IUIStore} from 'features/catalog/interfaces';

export class UiStore implements IUIStore {
  columns: number = 0;

  constructor() {
    makeObservable(this, {
      columns: observable,
      setColumns: action,
    });
  }

  setColumns = (columns: number, persist = false) => {
    this.columns = columns;
    if (process.browser && persist) {
      document.cookie = `columns=${columns}`;
    }
  };
}
