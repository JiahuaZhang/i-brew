import Auth, { CognitoUser } from '@aws-amplify/auth';
import { CognitoUserSession } from 'amazon-cognito-identity-js'
import { Hub } from '@aws-amplify/core';
import { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { useRouter } from 'next/router';

export interface UserAttributes {
  id: string,
  name: string;
  email: string;
  picture: string;
  status: 'init' | 'synced' | 'done';
}

const amplifyUserState = atom<CognitoUserSession | null>({
  key: 'amplifyUser',
  default: null
});

const extractAttributes = (session: CognitoUserSession) => {
  const id = session.getIdToken();
  const { email, name, picture, 'cognito:username': username } = id.payload;

  let pic = '';
  if (/^facebook/.test(username)) {
    pic = JSON.parse(picture).data.url;
  } else if (/^google/.test(username)) {
    pic = picture;
  }

  return { id: username, name, email, picture: pic, status: 'done' } as UserAttributes;
};

export const useAmplifyUser = ({ redirect } = ({ redirect: '' })) => {
  const [currentUser, setCurrentUser] = useRecoilState(amplifyUserState);
  const [userAttributes, setUserAttributes] = useState({ status: 'init' } as UserAttributes);
  const router = useRouter();

  if (userAttributes.status === 'init') {
    Auth.currentAuthenticatedUser().then((user: CognitoUser) => {
      setCurrentUser(user.getSignInUserSession());
      setUserAttributes(extractAttributes(user.getSignInUserSession()));
    }).catch(err => {
      console.warn('No authenticated user currently', err);
      setUserAttributes(attributes => ({ ...attributes, status: 'synced' }));
    });
  } else if (currentUser && !currentUser.isValid()) {
    console.warn('Invalidating amplify user');
    setCurrentUser(null);
    setUserAttributes(attributes => ({ ...attributes, status: 'synced' }));
  }

  useEffect(() => {
    Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          setCurrentUser(data.getSignInUserSession());
          setUserAttributes(extractAttributes(data.getSignInUserSession()));
          return;
        case 'signOut':
          setCurrentUser(null);
          setUserAttributes(attributes => ({ ...attributes, status: 'done' }));
          return;
        case 'customOAuthState':
          router.push(data);
        default:
          break;
      }
    })
  }, []);

  if (typeof window !== 'undefined' && userAttributes.status === 'synced' && !currentUser && redirect) {
    router.push({
      pathname: redirect,
      query: { from: router.pathname }
    });
  } else if (userAttributes.status === 'synced') {
    setUserAttributes(values => ({ ...values, status: 'done' }))
  }

  return { userSession: currentUser, userAttributes };
};