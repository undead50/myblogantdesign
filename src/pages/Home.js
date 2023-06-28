import AppHeader from '../components/AppHeader';
import Slider from '../components/Slider';
import CustomCard from '../components/CustomCard';
import { CustomFooter } from '../components/CustomFooter';
import CustomList from '../components/CustomList';

function Home() {
  return (
    <>
      <AppHeader />
      <Slider />
      <CustomCard />
      <CustomList/>
      <CustomFooter />
    </>
  );
}

export default Home;
