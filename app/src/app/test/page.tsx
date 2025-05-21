import React from 'react';

import Bar from '@/components/Bar';

import TestSpeech from '@/components/test/TestSpeech';

const Test = () => {
  return (
    <>
      <Bar icon="TestTube" title="Test" color=""/>

      <div className='view'>
        <div className='thread'>
          <span className="sm-text">
            Zone d'expérimentation de fonctionnalités.
          </span>






            <TestSpeech/>








            

        </div>
      </div>
    </>
  );
};

export default Test;