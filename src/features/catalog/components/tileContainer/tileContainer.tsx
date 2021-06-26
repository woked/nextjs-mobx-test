import {observer} from 'mobx-react-lite';
import {computed} from 'mobx';

import {Tile} from '../tile/tile';
import {useItems} from 'features/catalog/hooks/useItems';

type PropsType = {
  id: number;
  title: string;
};

export const TileContainer = observer<PropsType>(({title, id}) => {
  const {isSelectedItem, setSelected} = useItems();
  const isSelected = computed(() => isSelectedItem(id)).get();

  return (
    <Tile onClick={setSelected} title={title} id={id} isActive={isSelected} />
  );
});
