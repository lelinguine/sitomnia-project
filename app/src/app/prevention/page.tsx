"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import Bubble from '@/components/text/Bubble';
import { useDiscussion } from '@/context/DiscussionContext';

import risks from '@/assets/data/risks';

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

          {risks.map((risk) => (
            <Bubble
              key={risk.slug}
              isDescription
              icon={risk.icon}
              title={risk.title}
              onClick={() => router.push(`/prevention/${risk.slug}`)}
            >
              {risk.resume}
            </Bubble>
          ))}
        </div>
      </div>
    </>
  );
};

export default Prevention;
