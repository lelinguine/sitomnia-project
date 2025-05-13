'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Icon from '@assets/icon.png';


import { DotPulse } from 'ldrs/react'
import 'ldrs/react/DotPulse.css'

const Loading = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/acceuil');
    }, 800);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <>
      <div className='flex flex-col items-center justify-center gap-[10px]'>
        <Image
          src={Icon}
          alt="Loading icon"
          width={80}
          height={80}
        />
        <span className='lg-text'>Sitomnia</span>
        <DotPulse
          size="43"
          speed="1.3"
          color="black" 
        />
      </div>

      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 sm-text">
        v0.1-a
      </span>
    </>
  );
};

export default Loading;