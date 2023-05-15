'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();
    return (
        <Image onClick={() => router.push('/')} alt='Logo' className='hidden md:block cursor-pointer' priority={true} height='100' width='200' src='/images/secondlogo.svg'/>
    )
}
export default Logo;