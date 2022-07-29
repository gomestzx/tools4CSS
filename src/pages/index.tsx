import type { NextPage } from 'next';
import HeaderApp from '../components/HeaderApp';
import Main from '../components/Main';


const Home: NextPage = () => {
  return (
    <>
      <HeaderApp />
      <Main />
    </>
  );
};

export default Home;
