import '../styles/globals.css';
import NProgress from 'nprogress';
import Router from 'next/router';

import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { StoreProvider } from '../utils/Store';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    //remove default server side injected css to allow MUI SSR CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp

MyApp.getInitialProps = async () => {
  return {
    pageProps: {
      commercePublicKey: process.env.COMMERCE_PUBLIC_KEY,
    },
  };
};