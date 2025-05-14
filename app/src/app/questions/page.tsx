import React from 'react';

import Bar from '@/components/Bar';

import LinkModal from '@/components/modal/LinkModal';

const Questions = () => {
  return (
    <>
      <Bar icon="MessageCircleQuestion" title="Questions"/>

      <div className='view'>
        <div className='thread'>
          <span className="sm-text">
            Historique de vos demandes à l’intelligence artificielle.
          </span>

        </div>
      </div>

      <LinkModal link="/questions/discussion"/>
    </>
  );
};

export default Questions;