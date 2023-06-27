import { Col, Row } from 'antd';
import ProgressBar from '../components/ProgressBar';
import CustomCard from '../components/CustomCard';
const App = () => (
  <>
    <Row style={{ marginTop: '40px' }} gutter={24}>
      {/* <Col span={6} lg={8} xs={6}>
        <ProgressBar />
      </Col> */}
      <Col span={6} offset={6} lg={12} xs={6}>
        <ProgressBar />
      </Col>
      <Col span={8}>
        <CustomCard />
      </Col>
      <Col span={8} offset={8}>
        <CustomCard />
      </Col>
    </Row>
  </>
);
export default App;
