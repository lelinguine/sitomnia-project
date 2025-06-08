'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Bar from '@/components/Bar';

const Parametrage = () => {

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            localStorage.clear();
            router.replace('/demarrage');
            return;
        }
    
    }, []);

  return (
    <>
        <Bar icon="" title="" color="#F9F7F7" noBack/>
        <div className="view">
            <div className="thread">
                <span className="sm-text">
                    Réponder aux questions pour personnaliser votre expérience dans l'application.
                </span>

                <div className='content'>
                    TODO
                </div>
            </div>
        </div>
    </>
  );
};

export default Parametrage;