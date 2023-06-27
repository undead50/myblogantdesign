import AppHeader from '../components/AppHeader';
import Slider from '../components/Slider';
import CustomCard from '../components/CustomCard';
import { CustomFooter } from '../components/CustomFooter';
import ProgressInfo from '../container/ProgressInfo';

function Home() {
  return (
    <>
      <AppHeader />
      <Slider />
      <CustomCard />
      <ProgressInfo />
      <CustomFooter />
    </>
  );
}

export default Home;
