'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import Icon from '@assets/icon.png';

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
      <div className='flex flex-col items-center gap-[10px]'>
          <Image
            src={Icon}
            alt="Loading icon"
            width={80}
            height={80}
          />
          <span className='md-text'>Sitomnia</span>
      </div>

      <div className='modal'>
        <span className='sm-text'>v0.2-a</span>
      </div>
    </>
  );
};

export default Loading;