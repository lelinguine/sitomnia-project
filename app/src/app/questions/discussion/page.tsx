"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import Bar from '@/components/Bar';
import Bubble from '@/components/text/Bubble';
import DiscussionModal from '@/components/modal/DiscussionModal';

import { useDiscussion } from '@/context/DiscussionContext';

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

const systemPrompt: Message = {
  role: 'system',
  content: "Ne te présente pas. Ne parle pas de toi. Réponds à la question de manière synthétique, en évitant les détails superflus. Ne fais pas d'introduction, parle directement du sujet de la question. Ne fais pas de liste. Un maximum de 100 mots pour répondre. Si tu ne sais pas répondre à la question, dis que tu ne sais pas. Réponds en français."
};

const Discussion = () => {
  const searchParams = useSearchParams();
  const discussionId = searchParams.get('id');

  const { discussions, createDiscussionId, addMessage } = useDiscussion();

  const [activeDiscussionId, setActiveDiscussionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // À l'initialisation, créer une discussion si aucune n'est active
  const router = useRouter();

  useEffect(() => {
    let id = discussionId;

    if (!id) {
      id = createDiscussionId();
      setActiveDiscussionId(id);
      router.replace(`/questions/discussion?id=${id}`); // 🔁 rediriger proprement
      return; // 🛑 éviter d'exécuter la suite avec l'ancien id
    }

    setActiveDiscussionId(id);

    const activeDisc = discussions.find(d => d.id === id);
    if (activeDisc) {
      setMessages(activeDisc.messages);
    } else {
      setMessages([]);
    }

    const element = document.querySelector('.view');
    if (element) element.scrollTop = element.scrollHeight;

  }, [discussionId, discussions, createDiscussionId, router]);

  useEffect(() => {
    const element = document.querySelector('.view');
    if (element) {
      // Utilise setTimeout pour attendre la fin du rendu
      setTimeout(() => {
        element.scrollTop = element.scrollHeight;
      }, 0);
    }
  }, [messages]);


  const sendPrompt = async () => {
    if (isLoading || !currentPrompt.trim() || !activeDiscussionId) return;

    setIsLoading(true);
    const newPrompt = currentPrompt;
    setCurrentPrompt('');

    const element = document.querySelector('.view');
    if (element) element.scrollTop = element.scrollHeight;

    const userMessage: Message = { role: 'user', content: newPrompt };
    const fullMessages = [systemPrompt, ...messages, userMessage];

    // Mise à jour locale immédiate + contexte
    setMessages(prev => [...prev, userMessage]);
    addMessage(activeDiscussionId, userMessage);

    const res = await fetch('http://localhost:8000/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: fullMessages }),
    });

    if (!res.ok || !res.body) {
      setIsLoading(false);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let responseSoFar = '';

    // Ajout placeholder assistant localement (pour afficher la bulle vide)
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    while (true) {
      const element = document.querySelector('.view');
      if (element) element.scrollTop = element.scrollHeight;

      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      responseSoFar += chunk;

      // Mise à jour locale seulement
      setMessages(prev => {
        const last = prev[prev.length - 1];
        if (last?.role === 'assistant') {
          return [...prev.slice(0, -1), { ...last, content: responseSoFar }];
        }
        return prev;
      });
    }

    // À la fin du streaming, mise à jour unique du contexte
    addMessage(activeDiscussionId, { role: 'assistant', content: responseSoFar });

    setIsLoading(false);
  };

  return (
    <>
      <Bar icon="MessageCircleQuestion" title="Questions" color="#BBDED6" />

      <div className="view">
        <div className="thread">
          <span className="sm-text">
            Poser des questions à l’intelligence artificielle.
          </span>
          {messages
            .filter(msg => msg.role !== 'system')
            .map((msg, i) => (
              <React.Fragment key={i}>
                {msg.role === 'user' && <Bubble icon="MessageCircleQuestion" title="Vous">{msg.content}</Bubble>}
                {msg.role === 'assistant' && <span className="sm-text">{msg.content}</span>}
              </React.Fragment>
            ))}
        </div>
      </div>

      <DiscussionModal
        prompt={currentPrompt}
        setPrompt={setCurrentPrompt}
        onSend={sendPrompt}
        isLoading={isLoading}
      />
    </>
  );
};

export default Discussion;
