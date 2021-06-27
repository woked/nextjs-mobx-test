import {ItemsType} from 'features/catalog/types/products';
import {http, HttpType} from 'libs/http';

export class Api {
  constructor(private readonly http: HttpType) {}

  fetchItems = async () => {
    const {data} = await this.http.get<ItemsType>('/api/items');

    return data;
  };
}

export const api = new Api(http);
