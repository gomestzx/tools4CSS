import type { NextPage } from 'next';
import BackgroundGradient from '../../../components/BackgroundGradient';
import HeaderMobile from '../../../components/HeaderMobile';
import Sidebar from '../../../components/Sidebar';

const BackgroundGradientPage: NextPage = () => {
  return (
    <div>
      <HeaderMobile />
      <div className='grid'>
        <Sidebar />
        <BackgroundGradient />
      </div>
    </div>
  );
};

export default BackgroundGradientPage;
