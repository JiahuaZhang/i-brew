import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { CSSProperties } from 'react';

const buttonCSS: CSSProperties = {
  minHeight: '70px',
  minWidth: '380px',
  color: 'white',
  border: 'none',
  display: 'grid',
  alignItems: 'center',
  borderRadius: '5px',
  position: 'relative',
  cursor: 'pointer',
  fontSize: '1.5rem',
  paddingLeft: 40,
};

const Login = () => {
  const router = useRouter();

  const { from } = router.query;

  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
      }}>
      <div
        style={{
          display: 'grid',
          gap: '5vh',
          minWidth: 380,
          marginTop: '25vh',
          placeItems: 'center',
        }}>
        <button
          style={{
            ...buttonCSS,
            fontFamily: 'Roboto',
            background: '#4285f4',
          }}
          onClick={() =>
            Auth.federatedSignIn({
              provider: CognitoHostedUIIdentityProvider.Google,
              customState: from as string,
            })
          }>
          <img src='/svg/google.svg' style={{ position: 'absolute', top: -5, left: -5 }} />
          Sign in with Google
        </button>

        <button
          style={{
            ...buttonCSS,
            background: '#4267b2',
          }}
          onClick={() =>
            Auth.federatedSignIn({
              provider: CognitoHostedUIIdentityProvider.Facebook,
              customState: from as string,
            })
          }>
          <img src='/svg/facebook.svg' style={{ position: 'absolute' }} />
          Sign in with Facebook
        </button>

        <Link href='/'>Home</Link>
      </div>
    </main>
  );
};

export default Login;
