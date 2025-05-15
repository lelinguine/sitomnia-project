"use client";

import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceInput = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  return (
    <>
      <p>Micro: {listening ? '🎤 On' : '🔇 Off'}</p>
      <button onClick={() => SpeechRecognition.startListening({ language: 'fr-FR', continuous: true })}>
        Démarrer
      </button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Réinitialiser</button>
      <p>Texte : {transcript}</p>
    </>
  );
};

export default VoiceInput;