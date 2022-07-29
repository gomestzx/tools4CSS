import type { NextPage } from 'next';
import BackgroundGradient from '../../../components/BackgroundGradient';
import HeaderApp from '../../../components/HeaderApp';
import Sidebar from '../../../components/Sidebar';

const BackgroundGradientPage: NextPage = () => {
  return (
    <div>
      <div className='grid'>
        <Sidebar />
        <BackgroundGradient />
      </div>
    </div>
  );
};

export default BackgroundGradientPage;
