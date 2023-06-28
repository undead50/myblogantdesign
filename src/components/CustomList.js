
import { Avatar, List, Space } from 'antd';
import React from 'react';
import {Row,Col} from 'antd';
import { StarOutlined,LikeOutlined,MessageOutlined } from '@ant-design/icons';
import './customlist.css'

const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const CustomList = () => (
    
  <Row gutter={{
    xs: 16,
    sm: 16,
    md: 24,
    lg: 32,
  }}  className='list_row'> 
  <Col md = {{span:12,offset:6}} sm={{span:8}} xs={{span:6}}>
  <List
    itemLayout="vertical"
    size="small"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            className='list_img'
          />
        }
        className='custom_list'
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
      
    )}
    style={{marginTop:20,marginBottom:20}}
  />
  </Col>
  </Row> 
);
export default CustomList;