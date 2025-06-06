"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import ToggleButton from '@/components/button/ToggleButton';
import TextField from '@/components/text/TextField';

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
            Gérer la paramétrage de l’application et de l’intelligence artificielle.
          </span>

          <div className='content'>
            <TextField
              isDisable
              title="Adresse email"
              subtitle="Votre email sert d'identifiant."
              value={user.email}
              placeholder="Tapez votre adresse mail"
              type="email"
            />
          </div>

          <div className='content'>
            <TextField
              isDisable
              title="Prénom"
              subtitle="Votre prénom personnalise l'expérience."
              value={user.name}
              placeholder="Tapez votre prénom"
              type="name"
            />
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

          <div className='content'>
            <div>
              <div className='flex items-center gap-[10px]'>
                <ToggleButton isChecked={settings.sharePersonalData} onClick={toggleSharePersonalData} />
                <span className="md-text">Partage des informations</span>
              </div>
              <span className="sm-text">
                Activer le partage des informations personnelles pour améliorer l’expérience de l’intelligence artificielle.
              </span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Reglages;
