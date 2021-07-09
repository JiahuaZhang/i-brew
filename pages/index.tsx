import { Global } from '../components/global/Global';
import { useAmplifyUser } from '../src/utils/state/amplifyUser';
import { InfoHeader } from '../components/InfoHeader';
import { MainPanel } from '../components/MainPanel';
import { LoadingScreen } from '../components/common/LoadingScreen';

export default function Home() {
  const { userSession, userAttributes } = useAmplifyUser({ redirect: '/login' });

  return (
    <div>
      {userSession && <Global />}

      {userAttributes.status !== 'done' && <LoadingScreen />}

      {userSession && <InfoHeader user={userAttributes} />}

      {userAttributes && <MainPanel />}
    </div>
  );
}
