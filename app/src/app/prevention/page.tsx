"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import Bubble from '@/components/text/Bubble';
import { useDiscussion } from '@/context/DiscussionContext';

const Prevention = () => {
  const { discussions } = useDiscussion();
  const router = useRouter();

  return (
    <>
      <Bar icon="Megaphone" title="Prévention" color="#EEE9DA" />

      <div className="view">
        <div className="thread">
          <span className="sm-text">
            Découvrir et appréhender les risques liés à l’âge.
          </span>
          
          <Bubble isDescription
                icon="Heart"
                title="Lieu de vie"
                onClick={() => router.push(`/prevention`)}
              >
                <div className="bubble-title">Aménager les espaces pour la vie quotidienne.</div>
          </Bubble>

          <Bubble isDescription
                icon="Activity"
                title="Activités physiques"
                onClick={() => router.push(`/prevention`)}
              >
                <div className="bubble-title">Adapter l’activité pour progresser en sécurité.</div>
          </Bubble>

        </div>
      </div>
    </>
  );
};

export default Prevention;
