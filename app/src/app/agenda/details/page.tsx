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
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [heure, setHeure] = useState('');

  
  useEffect(() => {
    if (!eventId) {
      const id = uuidv4();
      router.replace(`/agenda/details?id=${id}`);
      return;
    }

    const existingEvent = getAgenda(eventId);
    if (existingEvent) {
      setTitle(existingEvent.title || '');
      setDate(existingEvent.date || '');
      setHeure(existingEvent.heure || '');
    }
  }, [eventId, getAgenda, router]);


  const handleChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
    if (eventId) {
      addOrUpdateAgenda(eventId, e.target.value, date, heure);
    }
  };


  const handleChangeDate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDate(e.target.value);
    if (eventId) {
      addOrUpdateAgenda(eventId, title, e.target.value, heure);
    }
  };


  const handleChangeHeure = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Heure:', e.target.value);
    setHeure(e.target.value);
    if (eventId) {
      addOrUpdateAgenda(eventId, title, date, e.target.value);
    }
  };

  return (
    <>
      <Bar icon="ChartNoAxesGantt" title="Agenda" color="#A0C3D2" />

      <div className="view">
        <div className="thread">
          <span className="sm-text">
            Modifier les informations de l’événement.
          </span>

          <div className="content">
            <TextField
              title="Titre de l’événement"
              subtitle="Nom d’affichage de l’événement."
              value={ title }
              placeholder="Tapez le titre"
              type="text"
              handleChange={handleChangeTitle}
            />
          </div>


          <div className="content">
            <TextField
              title="Date de l’événement"
              subtitle="Sélectionnez la date de l’événement."
              value={ date }
              placeholder="Sélectionnez la date"
              type="date"
              handleChange={handleChangeDate}
            />
          </div>


          <div className="content">
            <TextField
              title="Heure de l’événement"
              subtitle="Sélectionnez l'heure de l’événement."
              value={ heure }
              placeholder="Sélectionnez l'heure"
              type="time"
              handleChange={handleChangeHeure}
            />
          </div>



          {/* <textarea
            className="md-text auto-textarea"
            autoFocus
            ref={textareaRef}
            value={content}
            onChange={handleChange}
            onInput={adjustHeight}
            placeholder={listening ? "Dictez votre note..." : "Tapez votre note..."}
            rows={1}
            style={{ overflow: 'hidden', resize: 'none' }}
            readOnly={listening}
          />
 */}



          {/* {error && <span className='sm-text error'>{error}</span>} */}
        </div>
      </div>

      <DeleteModale
        icon="Eraser"
        title="Supprimer"
        text="Êtes-vous sûr de vouloir supprimer l'événement ? Cette action est irréversible."
        onDelete={() => {
          addOrUpdateAgenda(eventId, '');
          router.back();
        }}
      />

    </>
  );
};

export default Details;
