"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type UserSettings = {
  textToSpeechEnabled: boolean;
  sharePersonalData: boolean;
};

type UserInfo = {
  name: string;
  email: string;
};

type UserContextType = {
  settings: UserSettings;
  user: UserInfo;
  toggleTextToSpeech: () => void;
  toggleSharePersonalData: () => void;
  updateUser: (newUser: Partial<UserInfo>) => void;
};

const defaultSettings: UserSettings = {
  textToSpeechEnabled: true,
  sharePersonalData: true,
};

const defaultUser: UserInfo = {
  name: '',
  email: '',
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [settings, setSettings] = useState<UserSettings>(defaultSettings);
  const [user, setUser] = useState<UserInfo>(defaultUser);
  const [initialized, setInitialized] = useState(false);

  // Chargement initial depuis localStorage
  useEffect(() => {
    const savedSettings = localStorage.getItem('reglages');
    const savedUser = localStorage.getItem('utilisateur');

    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (e) {
        console.error("Erreur de parsing des réglages utilisateur", e);
      }
    }

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Erreur de parsing des infos utilisateur", e);
      }
    }

    setInitialized(true);
  }, []);

  // Sauvegarde des réglages
  useEffect(() => {
    if (initialized) {
      localStorage.setItem('reglages', JSON.stringify(settings));
    }
  }, [settings, initialized]);

  // Sauvegarde des infos utilisateur
  useEffect(() => {
    if (initialized) {
      localStorage.setItem('utilisateur', JSON.stringify(user));
    }
  }, [user, initialized]);

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

  const updateUser = (newUser: Partial<UserInfo>) => {
    setUser(prev => ({ ...prev, ...newUser }));
  };

  return (
    <UserContext.Provider
      value={{
        settings,
        user,
        toggleTextToSpeech,
        toggleSharePersonalData,
        updateUser,
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
