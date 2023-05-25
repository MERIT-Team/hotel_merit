'use client';

import Fade from '../components/Fade';
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";


const Intro: React.FC = () => {
  return (
    <ClientOnly>
        <Container>
            <div className='flex flex-col justify-center items-center py-20'>
              <div className='text-custom-red text-6xl'>
                About us page coming soon...
              </div>
            </div>
        </Container>
    </ClientOnly>
    
  );
};

export default Intro;
