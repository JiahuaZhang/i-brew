import 'antd/dist/antd.min.css';
import { Provider } from 'next-auth/client';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { RecoilRoot } from 'recoil';
import '../src/config/amplifyConfig';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
