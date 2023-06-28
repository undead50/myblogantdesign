import { Layout } from 'antd';

const { Footer } = Layout;

export const CustomFooter = () => {
  return (
    <Layout>
      {/* Your content here */}

      <Footer style={{ textAlign: 'center' }}>This is the footer.</Footer>
    </Layout>
  );
};
