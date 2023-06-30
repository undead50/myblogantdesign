import { Avatar, List, Space } from 'antd';
import React from 'react';
import { Row, Col } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import './customlist.css';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import { useEffect, useState } from 'react';
import { useApi } from '../../hooks/CustomHooks';
import { useDispatch } from 'react-redux';
import { setvideoId } from '../../store/slices/videoSlice';

const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const CustomList = () => {
  const [listData, setlistData] = useState([]);
  const dispatch = useDispatch();

  const handlevideIdChange =(videoId)=>{
    dispatch(setvideoId(videoId))
  }

  const params = {
    part: 'snippet',
    maxResults: 5,
    key: apiKey,
  };
  const { data, loading, error } = useApi(apiUrl + `/search`, params);

  useEffect(() => {
    if (data !== null) {
      dispatch(setvideoId(data.items[0].id.videoId))
      setlistData(data.items);
    }
  }, [data]);

  useEffect(() => {
    console.log(listData);
  }, [listData]);

  const dataa = listData.map((list) => ({
    href: 'https://ant.design',
    title: list.snippet.title,
    avatar: list.snippet.thumbnails.default.url,
    description: list.snippet.description,
    image: list.snippet.thumbnails.high.url,
    videoId: list.id.videoId
  }));
  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

  return (
    <Row
      gutter={{
        xs: 16,
        sm: 16,
        md: 24,
        lg: 32,
      }}
      className="list_row"
    >
      <Col md={{ span: 12 }}>
        <VideoPlayer />
      </Col>

      <Col md={{ span: 12 }} sm={{ span: 8 }} xs={{ span: 6 }}>
        <List
          itemLayout="vertical"
          size="small"
          pagination={{
            onChange: (page) => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={dataa}
          footer={
            <div>
              <b>ant design</b> footer part
            </div>
          }
          renderItem={(item) => (
            <List.Item
              key={item.title}
              actions={[
                <IconText
                  icon={StarOutlined}
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  icon={LikeOutlined}
                  text="156"
                  key="list-vertical-like-o"
                />,
                <IconText
                  icon={MessageOutlined}
                  text="2"
                  key="list-vertical-message"
                />,
              ]}
              extra={<img alt="logo" src={item.image} onClick={()=>handlevideIdChange(item.videoId)
              } className="list_img" />}
              className="custom_list"
            >
              <List.Item.Meta
                avatar={<Avatar src={item.avatar} />}
                title={<a href={item.href}>{item.title}</a>}
                description={item.description}
              />
              {item.content}
            </List.Item>
          )}
          style={{ marginTop: 20, marginBottom: 20 }}
        />
      </Col>
    </Row>
  );
};

export default CustomList;
