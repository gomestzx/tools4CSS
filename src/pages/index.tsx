import type { NextPage } from 'next';
import About from '../components/About';
import VideoComponent from '../components/VideoComponent';
import Contact from '../components/Contact';
import HeaderApp from '../components/HeaderApp';
import Main from '../components/Main';

import { SEO } from '../components/SEO';

const Home: NextPage = () => {
  return (
    <>
      <SEO
        shouldExcludeTitleSuffix
        title='Tools4CSS'
      />
      <HeaderApp />
      <Main />
      <VideoComponent />
      <About />
      <Contact />
    </>
  );
};

export default Home;
