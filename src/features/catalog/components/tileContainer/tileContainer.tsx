import {observer} from 'mobx-react-lite';

import {Tile} from '../tile/tile';
import {useItemsStore} from 'features/catalog/hooks';

type PropsType = {
  id: number;
  title: string;
};

export const TileContainer = observer<PropsType>(({title, id}) => {
  const {isSelectedItem, setSelected} = useItemsStore();

  return (
    <Tile
      onClick={setSelected}
      title={title}
      id={id}
      isActive={isSelectedItem(id)}
    />
  );
});
