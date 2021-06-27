import Head from 'next/head';
import Catalog from 'features/catalog';
import {useRootStore} from 'store/hooks';
import {randomRange} from 'libs/utils';
import {GetServerSideProps} from 'next';
import cookies from 'next-cookies';
import {PagePropsType} from './_app';
import {api} from 'api/index';

import s from 'styles/home.module.scss';

const MIN_COLUMNS = 1;
const MAX_COLUMNS = 7;

export default function Home() {
  const store = useRootStore();

  return (
    <div className={s.container}>
      <Head>
        <title>Just Porn Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.content}>
        <Catalog
          minColumns={MIN_COLUMNS}
          maxColumns={MAX_COLUMNS}
          itemsStore={store.itemsStore}
          uiSettingsStore={store.uiSettingsStore}
        />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<PagePropsType> = async (
  ctx,
) => {
  const items = await api.fetchItems();

  return {
    props: {
      state: {
        itemsStore: {
          items: items,
        },
        uiSettingsStore: {
          columns: cookies(ctx).columns
            ? Number(cookies(ctx).columns)
            : randomRange(MIN_COLUMNS, MAX_COLUMNS),
        },
      },
    },
  };
};
