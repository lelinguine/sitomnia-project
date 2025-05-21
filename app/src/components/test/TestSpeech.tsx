"use client";

import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceInput = () => {
  const {
    transcript,
    listening,
    resetTranscript,
  } = useSpeechRecognition();

  return (
    <>
      <p>Micro : {listening ? 'On' : 'Off'}</p>
      <p>Texte : {transcript}</p>
      <div className='flex gap-2'>
        <button onClick={() => SpeechRecognition.startListening({ language: 'fr-FR', continuous: true })}>
          Démarrer
        </button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Réinitialiser</button>
      </div>
    </>
  );
};

export default VoiceInput;