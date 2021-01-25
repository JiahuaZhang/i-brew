import { Avatar, Button, Popover } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { User } from 'next-auth';
import { signout } from 'next-auth/client';

export const Header = ({ user }: { user: User }) => {
  let avatar = <Avatar size='large' icon={<UserOutlined />} />;

  if (user.image) {
    avatar = <Avatar size='large' src={user.image} />;
  } else if (user.name) {
    const abbreviation = user.name.split(/\W+/).map((s) => s[0].toUpperCase());
    avatar = <Avatar size='large'>{abbreviation}</Avatar>;
  }

  return (
    <header style={{ display: 'grid', justifyContent: 'end' }}>
      <Popover
        content={
          <section>
            {user.name && <p>{user.name}</p>}
            <Button onClick={() => signout()}>Sign out</Button>
          </section>
        }>
        {avatar}
      </Popover>
    </header>
  );
};
