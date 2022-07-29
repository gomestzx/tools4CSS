import type { NextPage } from 'next';
import HeaderApp from '../components/HeaderApp';
import Main from '../components/Main';
import { SEO } from '../components/SEO';



const Home: NextPage = () => {
  return (
    <>
    <SEO title='Home'/>
      <HeaderApp />
      <Main />
    </>
  );
};

export default Home;
