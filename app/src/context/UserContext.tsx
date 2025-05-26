// context/UserContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type UserSettings = {
  textToSpeechEnabled: boolean;
  sharePersonalData: boolean;
};

type UserContextType = {
  settings: UserSettings;
  toggleTextToSpeech: () => void;
  toggleSharePersonalData: () => void;
};

const defaultSettings: UserSettings = {
  textToSpeechEnabled: false,
  sharePersonalData: false,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [initialized, setInitialized] = useState(false);

  // Chargement initial depuis localStorage
  useEffect(() => {
    const saved = localStorage.getItem('userSettings');
    if (saved) {
      try {
        const parsed: UserSettings = JSON.parse(saved);
        setSettings(parsed);
      } catch (e) {
        console.error("Erreur de parsing des paramètres utilisateur", e);
      }
    }
    setInitialized(true);
  }, []);

  // Sauvegarde automatique dans localStorage
  useEffect(() => {
    if (initialized) {
      localStorage.setItem('userSettings', JSON.stringify(settings));
    }
  }, [settings, initialized]);

  const toggleTextToSpeech = () => {
    setSettings(prev => ({
      ...prev,
      textToSpeechEnabled: !prev.textToSpeechEnabled,
    }));
  };

  const toggleSharePersonalData = () => {
    setSettings(prev => ({
      ...prev,
      sharePersonalData: !prev.sharePersonalData,
    }));
  };

  return (
    <UserContext.Provider
      value={{
        settings,
        toggleTextToSpeech,
        toggleSharePersonalData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};