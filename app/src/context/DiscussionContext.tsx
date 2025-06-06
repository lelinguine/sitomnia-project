"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Message = { role: 'user' | 'assistant' | 'system'; content: string };

type Discussion = {
  id: string;
  messages: Message[];
};

type DiscussionContextType = {
  discussions: Discussion[];
  createDiscussionId: () => string;
  addMessage: (discussionId: string, message: Message) => void;
  updateDiscussions: (newDiscussions: Discussion[]) => void;
};

const DiscussionContext = createContext<DiscussionContextType | undefined>(undefined);

export const DiscussionProvider = ({ children }: { children: React.ReactNode }) => {
  const [discussions, setDiscussions] = useState<Discussion[]>([]);

  const createDiscussionId = (): string => {
    return uuidv4();
  };

  const addMessage = (discussionId: string, message: Message) => {
    if (!discussionId) return;

    setDiscussions(prev => {
      const idx = prev.findIndex(d => d.id === discussionId);

      if (idx === -1) {
        // Discussion inexistante, création avec le premier message
        return [...prev, { id: discussionId, messages: [message] }];
      } else {
        // Discussion existante, ajout du message
        const updated = [...prev];
        updated[idx] = {
          ...updated[idx],
          messages: [...updated[idx].messages, message],
        };
        return updated;
      }
    });
  };

  // Sauvegarde automatique
  useEffect(() => {





  }, [discussions]);

  const updateDiscussions = (newDiscussions: Discussion[]) => {
    setDiscussions(newDiscussions);
  }

  return (
    <DiscussionContext.Provider
      value={{
        discussions,
        createDiscussionId,
        addMessage,
        updateDiscussions,
      }}
    >
      {children}
    </DiscussionContext.Provider>
  );
};

export const useDiscussion = () => {
  const context = useContext(DiscussionContext);
  if (!context) throw new Error('useDiscussion must be used within a DiscussionProvider');
  return context;
};
