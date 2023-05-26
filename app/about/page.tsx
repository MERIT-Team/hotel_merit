'use client';

import Fade from '../components/Fade';
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import Image from 'next/image';


const Intro: React.FC = () => {
  return (
    <ClientOnly>
        <Container>
             
            <div className='flex flex-col justify-center items-center py-20'>
            <div className="w-64 h-64 bg-center bg-no-repeat bg-cover mb-7 rounded-full " style={{ backgroundImage: `url(${'https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?resize=476%2C280&ssl=1'})` }}>
               {/* Other content */}
              </div>
              <div className='text-custom-red text-6xl'>
                About us page coming soon...
              </div>
              
            </div>
        </Container>
    </ClientOnly>
    
  );
};

export default Intro;
