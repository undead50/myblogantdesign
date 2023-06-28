import { Card, Col, Row,Image } from 'antd';
const CustomCard = () => (
  <Row gutter={{xs: 8,
    sm: 16,
    md: 24,
    lg: 32}} style={{ marginTop: '100px' }} justify={'center'}>
    <Col xs={12} lg={6} md={6}>
      <Card title="Card title" bordered={false}>
      <Image
        
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        style={{ width: '100%', maxWidth: '100%' }}
      />
      </Card>
    </Col>
    <Col xs={12} lg={6} md={6}>
      <Card title="Card title" bordered={false}>
      <Image
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        style={{ width: '100%', maxWidth: '100%' }}
      />
      </Card>
    </Col>
  </Row>
);
export default CustomCard;
