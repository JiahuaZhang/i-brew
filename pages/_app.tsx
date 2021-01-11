import { Provider } from 'next-auth/client';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { RecoilRoot } from 'recoil';
import 'antd/dist/antd.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Provider>
  );
}

export default MyApp;
