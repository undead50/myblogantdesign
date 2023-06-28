import { Carousel } from 'antd';
import './Slider.css';
const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage:
    'url("https://images.pexels.com/photos/9122851/pexels-photo-9122851.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};
const Slider = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default Slider;
