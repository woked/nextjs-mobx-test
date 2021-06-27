import {NextApiRequest, NextApiResponse} from 'next';
import {ItemsType} from 'features/catalog/types/products';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItemsType>,
) {
  res.status(200).json([
    {
      id: 1,
      title: 'lorem lorem',
    },
    {
      id: 2,
      title: 'lorem lorem',
    },
    {
      id: 3,
      title: 'lorem lorem',
    },
    {
      id: 4,
      title: 'lorem lorem',
    },
    {
      id: 5,
      title: 'lorem lorem',
    },
    {
      id: 6,
      title: 'lorem lorem',
    },
    {
      id: 7,
      title: 'lorem lorem',
    },
    {
      id: 8,
      title: 'lorem lorem',
    },
    {
      id: 9,
      title: 'lorem lorem',
    },
    {
      id: 10,
      title: 'lorem lorem',
    },
    {
      id: 11,
      title: 'lorem lorem',
    },
    {
      id: 12,
      title: 'lorem lorem',
    },
    {
      id: 13,
      title: 'lorem lorem',
    },
    {
      id: 14,
      title: 'lorem lorem',
    },
    {
      id: 15,
      title: 'lorem lorem',
    },
  ]);
}
