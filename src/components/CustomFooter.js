import { Layout, Row } from 'antd';

const { Footer } = Layout;

export const CustomFooter = () => {
  return (
    <Layout style={{ marginTop: '500px' }}>
      {/* Your content here */}

      <Footer style={{ textAlign: 'center' }}>This is the footer.</Footer>
    </Layout>
  );
};
