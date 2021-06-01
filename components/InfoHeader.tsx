import { Avatar, Button, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { UserAttributes } from '../utils/state/amplifyUser';
import Auth from '@aws-amplify/auth';

export const InfoHeader = ({ user }: { user: UserAttributes }) => {
  let avatar = <Avatar size='large' icon={<UserOutlined />} />;

  if (user.picture) {
    avatar = <Avatar size='large' src={user.picture} />;
  } else if (user.name) {
    const abbreviation = user.name.split(/\W+/).map((s) => s[0].toUpperCase());
    avatar = <Avatar size='large'>{abbreviation}</Avatar>;
  }

  return (
    <header style={{ display: 'grid', justifyContent: 'end', cursor: 'pointer' }}>
      <Popover
        content={
          <section>
            {user.name && <p>{user.name}</p>}
            <Button onClick={() => Auth.signOut()}>Sign out</Button>
          </section>
        }>
        {avatar}
      </Popover>
    </header>
  );
};
