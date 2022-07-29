import type { NextPage } from 'next';
import Glassmorphism from '../../../components/Glassmorphism';
import { SEO } from '../../../components/SEO';

import Sidebar from '../../../components/Sidebar';

const glassmorphism: NextPage = () => {
  return (
    <div>
      <SEO title='Glassmorphism' />
      <div className='grid'>
        <Sidebar />
        <Glassmorphism />
      </div>
    </div>
  );
};

export default glassmorphism;
