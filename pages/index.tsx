import { useRouter } from 'next/router';
import { Spin } from 'antd';
import { useEffect } from 'react';
import { Global } from '../components/global/Global';
import { useAmplifyUser } from '../utils/state/amplifyUser';
import { InfoHeader } from '../components/InfoHeader';
import { MainPanel } from '../components/MainPanel';

export default function Home() {
  const [amplifyUser, userAttirbutes] = useAmplifyUser();
  const router = useRouter();

  useEffect(() => {
    if (userAttirbutes.status !== 'loading' && !amplifyUser) {
      router.push('login');
    }
  }, [amplifyUser, userAttirbutes]);

  return (
    <div>
      {amplifyUser && <Global />}

      {userAttirbutes.status === 'loading' && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Spin size='large' />
        </div>
      )}

      {amplifyUser && <InfoHeader user={userAttirbutes} />}

      {userAttirbutes && <MainPanel />}
    </div>
  );
}
