'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
    const router = useRouter();
    return (
        <Image alt='Logo' className='hidden lg:block cursor-pointer' height='100' width='250' src='/images/secondlogo.svg'/>
    )
}
export default Logo;