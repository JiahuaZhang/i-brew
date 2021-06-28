import { Spin } from 'antd';

export const LoadingScreen = () => (
  <div style={{ textAlign: 'center', marginTop: '2rem' }}>
    <Spin size='large' />
  </div>
);
