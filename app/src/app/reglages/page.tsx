"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import ToggleButton from '@/components/button/ToggleButton';

const Reglages = () => {
  const router = useRouter();

  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(true);

  return (
    <>
      <Bar icon="Cog" title="Réglages" color="#F9F7F7" />

      <div className="view">
        <div className="thread">
          <span className="sm-text">
            Gérer la paramétrage de l’application et de l’intelligence artificielle.
          </span>

          <div className='content'>
            <span className='md-text'>TODO</span>

            <ToggleButton
              isChecked={isFirstChecked}
              onClick={() => setIsFirstChecked(prev => !prev)}
            />
            <ToggleButton
              isChecked={isSecondChecked}
              onClick={() => setIsSecondChecked(prev => !prev)}
            />

            {/* <Bubble
              icon="Search"
              title="Aperçu"
              onClick={() => router.push('/notes/details')}
            >
              <span className='md-text'>Ceci est une note</span>
            </Bubble> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reglages;
