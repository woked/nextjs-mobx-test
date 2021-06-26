import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {enableStaticRendering} from 'mobx-react-lite';

if (!process.browser) {
  enableStaticRendering(true);
}

function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
