"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import LinkModal from '@/components/modal/LinkModal';
import Bubble from '@/components/text/Bubble';

import { useAgenda } from '@/context/AgendaContext';

const Agenda = () => {
  const router = useRouter();
  const { agenda } = useAgenda();

  return (
    <>
      <Bar icon="ChartNoAxesGantt" title="Agenda" color="#A0C3D2" />

      <div className="view">
        <div className="thread">
          <span className="sm-text">
            Planifier les évènements particuliers ou récurrents de votre journée.
          </span>

          <div className='content'>
            {agenda.length === 0 ? (
              <span className="md-text">Aucun événement n'a été planifié.</span>
            ) : (
              agenda.slice().reverse().map((agenda) => (
                <Bubble isDescription
                  icon=""
                  title=""
                  onClick={() => router.push(`/agenda/details?id=${agenda.id}`)}
                  key={agenda.id}>
                  {agenda.title
                    ? agenda.title.slice(0, 47) + (agenda.title.length > 47 ? '...' : '')
                    : 'Aucun contenu'}
                </Bubble>
              ))
            )}
          </div>

        </div>
      </div>

      <LinkModal icon="BellPlus" title="Planifier" link="/agenda/details" />
    </>
  );
};

export default Agenda;
