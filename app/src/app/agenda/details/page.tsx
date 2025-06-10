"use client";

import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import DeleteModale from '@/components/modal/DeleteModal';
import TextField from '@/components/text/TextField';

import { useAgenda } from '@/context/AgendaContext';

import { v4 as uuidv4 } from 'uuid';

const Details = () => {
  const searchParams = useSearchParams();
  const eventId = searchParams.get('id');
  const router = useRouter();

  const { getAgenda, addOrUpdateAgenda } = useAgenda();
  const [event, setEvent] = useState('');

  
  useEffect(() => {
    if (!eventId) {
      const id = uuidv4();
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
            TODO

            { event }


            {/* <TextField
              title="Adresse email"
              subtitle="Votre email sert d'identifiant. Il est utilisé pour synchroniser vos données."
              value="{email}"
              placeholder="Tapez votre adresse mail"
              type="email"
              handleChange="{handleEmailChange}"
              onKeyDown="{connectUser}"
              inputRef="{inputRef}"
            /> */}


            {/* {error && <span className='sm-text error'>{error}</span>} */}




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
