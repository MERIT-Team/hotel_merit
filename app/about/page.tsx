'use client';

import Fade from '../components/Fade';
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";


const Intro: React.FC = () => {
  return (
    <ClientOnly>
        <Container>
            {/* About page */}
        </Container>
    </ClientOnly>
    
  );
};

export default Intro;
