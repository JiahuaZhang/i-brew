import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { Spin } from 'antd';
import { Header } from '../components/Header';
import { MainPanel } from '../components/MainPanel';
import { Global } from '../components/global/Global';

export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  if (!loading && !session) router.push(`/api/auth/signin?callbackUrl=${window.location.origin}`);

  return (
    <div>
      {session && <Global />}

      {loading && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Spin size='large' />
        </div>
      )}

      {session && <Header user={session.user} />}

      {session && <MainPanel />}
    </div>
  );
}
