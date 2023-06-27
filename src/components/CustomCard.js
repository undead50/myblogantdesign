import { Card, Col, Row } from 'antd';
const CustomCard = () => (

  <Row gutter={12} style={{ marginTop: '100px'}} justify={'center'}>
    <Col span={6}>
    <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={6}>
    <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
);
export default CustomCard;