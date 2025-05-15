import React from 'react';

import Bar from '@/components/Bar';

import LinkModal from '@/components/modal/LinkModal';


import TestSpeech from '@/components/test/TestSpeech';

const Questions = () => {
  return (
    <>
      <Bar icon="MessageCircleQuestion" title="Questions" color="#BBDED6"/>

      <div className='view'>
        <div className='thread'>
          <span className="sm-text">
            Historique de vos demandes à l’intelligence artificielle.
          </span>
        </div>
      </div>

      <LinkModal icon="MessageCirclePlus" title="Nouveau" link="/questions/discussion"/>
    </>
  );
};

export default Questions;