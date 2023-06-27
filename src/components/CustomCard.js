import { Card, Col, Row } from 'antd';
const CustomCard = () => (
  <Row gutter={24} style={{ marginTop: '100px' }} justify={'center'}>
    <Col xs={12} lg={6} md={6}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col xs={12} lg={6} md={6}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
);
export default CustomCard;
