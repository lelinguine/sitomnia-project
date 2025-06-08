"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import ToggleButton from '@/components/button/ToggleButton';
import TextField from '@/components/text/TextField';
import ActionButton from '@/components/button/ActionButton';
import DeleteModale from '@/components/modal/DeleteModal';

import { useUser } from '@/context/UserContext';

const Reglages = () => {
  const router = useRouter();

  const { settings, user, toggleTextToSpeech, toggleSharePersonalData } = useUser();

  return (
    <>
      <Bar icon="Cog" title="Réglages" color="#F9F7F7" />

      <div className="view">
        <div className="thread">
          <span className="sm-text">
            Gérer la paramétrage de vos informations afin de personnaliser l'expérience.
          </span>

          <div className='content'>
            <TextField
              isDisable
              title="Adresse email"
              subtitle="Votre email sert d'identifiant. Il est utilisé pour synchroniser vos données."
              value={user.email}
              placeholder="Tapez votre adresse mail"
              type="email"
            />
          </div>

          <div className='content'>
            <TextField
              isDisable
              title="Prénom"
              subtitle="Votre prénom sert à personnaliser l'expérience et les réponses de l'intelligence artificielle."
              value={user.name}
              placeholder="Tapez votre prénom"
              type="name"
            />
          </div>

          <div className='content'>
            <span className="md-text mb-[-10px]">
              Questionnaire
            </span>

            <span className="sm-text">
              Le questionnaire permet à l’intelligence artificielle de mieux vous connaître.
            </span>

            <ActionButton
              icon="RotateCcw"
              text="Relancer"
              onClick={() => router.push('/questionnaire')}
            />

          </div>

          <div className='content'>
            <div>
              <div className='flex items-center gap-[10px]'>
                <ToggleButton isChecked={settings.sharePersonalData} onClick={toggleSharePersonalData} />
                <span className="md-text">Partage des informations</span>
              </div>
              <span className="sm-text">
                Activer le partage des informations personnelles pour améliorer les réponses de l’intelligence artificielle.
              </span>
            </div>
          </div>

          <div className='content'>
            <div>
              <div className='flex items-center gap-[10px]'>
                <ToggleButton isChecked={settings.textToSpeechEnabled} onClick={toggleTextToSpeech} />
                <span className="md-text">Synthèse vocale</span>
              </div>
              <span className="sm-text">
                Activer la synthèse vocale pour écouter les réponses de l’intelligence artificielle.
              </span>
            </div>
          </div>

        </div>
      </div>

      <DeleteModale
        icon="Unplug"
        title="Quitter"
        subtitle="Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible."
        onDelete={() => {
          localStorage.clear();
          router.replace('/demarrage');
        }}
      />

    </>
  );
};

export default Reglages;
