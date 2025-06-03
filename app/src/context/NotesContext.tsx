"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Note = {
  id: string;
  content: string;
};

type NoteContextType = {
  notes: Note[];
  getNote: (id: string) => Note | undefined;
  addOrUpdateNote: (id: string, content: string) => void;
};

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('notes');
    if (stored) {
      setNotes(JSON.parse(stored));
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [notes, initialized]);

  useEffect(() => {
    const filtered = notes.filter(note => note.content.trim() !== "");
    if (filtered.length !== notes.length) {
      setNotes(filtered);
    }
  }, [notes]);

  const getNote = (id: string) => notes.find(n => n.id === id);

  const addOrUpdateNote = (id: string, content: string) => {
    setNotes(prev => {
      const existing = prev.find(n => n.id === id);
      if (existing) {
        return prev.map(n => (n.id === id ? { ...n, content } : n));
      }
      return [...prev, { id, content }];
    });
  };

  return (
    <NoteContext.Provider value={{ notes, getNote, addOrUpdateNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNote = () => {
  const context = useContext(NoteContext);
  if (!context) throw new Error('useNote must be used within NoteProvider');
  return context;
};
