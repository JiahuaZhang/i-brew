import { SettingOutlined, UserOutlined } from '@ant-design/icons';
import Auth from '@aws-amplify/auth';
import { Avatar, Button, Popover, Modal } from 'antd';
import { useState } from 'react';
import { ConfigTable } from '../components/config/ConfigTable';
import { UserAttributes } from '../src/utils/state/amplifyUser';

export const InfoHeader = ({ user }: { user: UserAttributes }) => {
  const [isConfigModalVisible, setIsConfigModalVisible] = useState(false);

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
      <SettingOutlined
        style={{ fontSize: '1.5rem', margin: 8 }}
        onClick={() => setIsConfigModalVisible(true)}
      />
      <Modal
        title='⚙️ config'
        footer={null}
        visible={isConfigModalVisible}
        onCancel={() => setIsConfigModalVisible(false)}>
        <ConfigTable style={{ margin: 'auto', width: '100%' }} />
      </Modal>
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
