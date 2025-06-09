"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import DeleteModale from '@/components/modal/DeleteModal';

import { useAgenda } from '@/context/AgendaContext';

const Details = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('id');
  const router = useRouter();

  const { getAgenda, addOrUpdateAgenda } = useAgenda();
  const [event, setEvent] = useState('');

  
  useEffect(() => {
    if (!eventId) {
      const id = crypto.randomUUID();
      router.replace(`/agenda/details?id=${id}`);
      return;
    }

    const existingEvent = getAgenda(eventId);
    if (existingEvent) {
      setEvent(existingEvent.title);
    }
  }, [eventId, getAgenda, router]);






//   const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setContent(e.target.value);
//     if (noteId) {
//       addOrUpdateNote(noteId, e.target.value);
//     }
//   };

  return (
    <>
      <Bar icon="ChartNoAxesGantt" title="Agenda" color="#A0C3D2" />

      <div className="view">
        <div className="thread">
          <span className="sm-text">
            Modifier les informations de l’événement.
          </span>

          <div className="content">

            { event }






          </div>
        </div>
      </div>

      {/* <DeleteModale
        icon="Unplug"
        title="Quitter"
        subtitle="Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible."
        onDelete={() => {
          localStorage.clear();
          router.replace('/demarrage');
        }}
      /> */}

    </>
  );
};

export default Details;
