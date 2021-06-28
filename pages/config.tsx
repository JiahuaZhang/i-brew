import Head from 'next/head';
import React from 'react';
import { LoadingScreen } from '../components/common/LoadingScreen';
import ConfigTable from '../components/config/ConfigTable';
import { InfoHeader } from '../components/InfoHeader';
import { useAmplifyUser } from '../utils/state/amplifyUser';

interface Props {}

const config = (props: Props) => {
  const { userAttributes } = useAmplifyUser({ redirect: '/login' });

  if (userAttributes.status !== 'done') {
    return <LoadingScreen />;
  }

  return (
    <div>
      <Head>
        <title>⚙️ config</title>
      </Head>

      <InfoHeader user={userAttributes} />

      <ConfigTable style={{ width: '80%', fontSize: '1.5rem', margin: 'auto' }} />
    </div>
  );
};

export default config;
