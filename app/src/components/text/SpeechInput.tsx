'use client';

import React, { useRef, useEffect } from "react";
import { MicVocal } from 'lucide-react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import "./text.css";

const SpeechInput = ({
  value,
  onChange,
  handleKeyDown
}: {
  value: string,
  onChange: (v: string) => void,
  handleKeyDown?: () => void
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const {
    transcript,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // Lancer la dictée automatiquement au montage
  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      return;
    }

    resetTranscript();
    SpeechRecognition.startListening({ language: 'fr-FR', continuous: true });

    return () => {
      SpeechRecognition.stopListening();
    };
  }, []);

  // Mettre à jour le texte dicté
  useEffect(() => {
    onChange(transcript);
  }, [transcript]);

  // Ajuster la hauteur dynamiquement
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      textareaRef.current.focus();
    }
  }, [value]);

  return (
    <div className='bubble'>
      <div className='bubble-title'>
        <MicVocal className="icon" size={20} strokeWidth={2} />
        <span className="sm-text">Dicter</span>
      </div>
      <textarea
        ref={textareaRef}
        className="md-text auto-textarea"
        value={value}
        readOnly
        onKeyDown={handleKeyDown}
        rows={1}
      />
    </div>
  );
};

export default SpeechInput;