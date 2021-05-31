import Auth, { CognitoUser } from '@aws-amplify/auth';
import { CognitoUserSession } from 'amazon-cognito-identity-js'
import { Hub } from '@aws-amplify/core';
import { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';

export interface UserAttributes {
  id: string,
  name: string;
  email: string;
  picture: string;
  status: 'loading' | 'done';
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

export const useAmplifyUser = (): [CognitoUserSession, UserAttributes] => {
  const [currentUser, setCurrentUser] = useRecoilState(amplifyUserState);
  const [userAttributes, setUserAttributes] = useState({ status: 'loading' } as UserAttributes)

  if (userAttributes.status === 'loading') {
    Auth.currentAuthenticatedUser().then((user: CognitoUser) => {
      console.log('initing with current authenticated user', user);
      setCurrentUser(user.getSignInUserSession());
      setUserAttributes(extractAttributes(user.getSignInUserSession()));
    }).catch(err => {
      console.warn('No authenticated user currently', err);
      setUserAttributes(attributes => ({ ...attributes, status: 'done' }));
    });
  } else if (currentUser && !currentUser.isValid()) {
    console.warn('Invalidating amplify user');
    setCurrentUser(null);
    setUserAttributes(attributes => ({ ...attributes, status: 'done' }));
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
        default:
          break;
      }
    })
  }, []);

  return [currentUser, userAttributes];
};