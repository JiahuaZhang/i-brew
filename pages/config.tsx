import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import React from 'react';
import { LoadingScreen } from '../components/common/LoadingScreen';
import { ConfigTable } from '../components/config/ConfigTable';
import { InfoHeader } from '../components/InfoHeader';
import { useAmplifyUser } from '../src/utils/state/amplifyUser';
export { getStaticProps } from '../src/utils/i18n/staticProps';

interface Props {}

const Config = (props: Props) => {
  const { userAttributes } = useAmplifyUser({ redirect: '/login' });
  const { t } = useTranslation();

  if (userAttributes.status !== 'done') {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Head>
        <title>{t('⚙️ config')}</title>
      </Head>

      <InfoHeader user={userAttributes} />

      <ConfigTable style={{ width: '80%', fontSize: '1.5rem', margin: 'auto' }} />
    </div>
  );
};

export default Config;
