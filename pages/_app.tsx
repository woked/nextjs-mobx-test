import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {enableStaticRendering} from 'mobx-react-lite';
import {RootStoreProvider} from 'store/context';
import {RootStoreHydrationType} from 'store/root';

if (!process.browser) {
  enableStaticRendering(true);
}

export type PagePropsType = {state: RootStoreHydrationType};

function MyApp({
  Component,
  pageProps,
}: Omit<AppProps<PagePropsType>, 'pageProps'> & {
  pageProps: PagePropsType;
}) {
  return (
    <RootStoreProvider hydrationData={pageProps.state}>
      <Component {...pageProps} />
    </RootStoreProvider>
  );
}

export default MyApp;
