import { Avatar, Button, Popover } from 'antd';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';
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
    <header
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, max-content)',
        alignItems: 'center',
        cursor: 'pointer',
        justifyContent: 'space-between',
      }}>
      <SettingOutlined style={{ fontSize: '1.5rem', margin: 8 }} />
      <Popover
        style={{ justifySelf: 'end' }}
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
