"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import { Mirage } from 'ldrs/react'
import 'ldrs/react/Mirage.css'

import Bar from '@/components/Bar';
import Bubble from '@/components/text/Bubble';
import DiscussionModal from '@/components/modal/DiscussionModal';
import ActionButton from '@/components/button/ActionButton';

import { useDiscussion } from '@/context/DiscussionContext';
import { useUser } from '@/context/UserContext';
import { useNote  } from '@/context/NotesContext';
import { useAgenda } from '@/context/AgendaContext';

type Message = {
  role: 'user' | 'assistant' | 'system';
  content: string;
};

const speak = (text: string) => {
  if (typeof window !== 'undefined' && window.speechSynthesis) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'fr-FR';
    window.speechSynthesis.speak(utterance);
  }
};

const Discussion = () => {
  const searchParams = useSearchParams();
  const discussionId = searchParams.get('id');

  const { discussions, createDiscussionId, addMessage } = useDiscussion();

  const [activeDiscussionId, setActiveDiscussionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { settings, user, questionnaire } = useUser();
  const { notes } = useNote();
  const { agenda } = useAgenda();

  const systemPrompt: Message = {
    role: 'system',
    content: "Réponds en français. Ne te présente pas. Réponds à la question de manière synthétique, en évitant les détails superflus. Ne fais pas d'introduction, parle directement du sujet de la question. Un maximum de 150 mots pour répondre."
  };

  const now = new Date();
  const dateHeure = now.toLocaleString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  systemPrompt.content += `\n- Date et heure actuelles (Aujourd'hui) : ${dateHeure}`;

  if (settings.sharePersonalData) {
    systemPrompt.content += `\n\nVoici quelques informations me concernant :\n- Nom : ${user.name}`;
    systemPrompt.content += `\n- Questionnaire : ${JSON.stringify(questionnaire, null, 2)}`;
    systemPrompt.content += `\n- Notes : ${JSON.stringify(notes, null, 2)}`;
    systemPrompt.content += `\n- Agenda : ${JSON.stringify(agenda, null, 2)}\n Les événements sans date mais avec un horaire sont considérés comme des événements récurrents qui reviennet chaque jour.`;
    systemPrompt.content += `\n- Utilise ces informations pour personnaliser tes réponses : appelle-moi par mon nom, utilise les informations de mon questionnaire, et adapte tes réponses en fonction de mes notes et agenda.`;
  }

  console.log("System Prompt:", systemPrompt.content);

  const currentController = useRef<AbortController | null>(null);

  // À l'initialisation, créer une discussion si aucune n'est active
  const router = useRouter();

  useEffect(() => {
    let id = discussionId;

    if (!id) {
      id = createDiscussionId();
      setActiveDiscussionId(id);
      router.replace(`/questions/discussion?id=${id}`);
      return;
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

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }

      if (currentController.current) {
        currentController.current.abort();
      }
    };
  }, []);

  const sendPrompt = async (prompt?: string) => {
    const promptToSend = prompt ?? currentPrompt;
    if (isLoading || !promptToSend.trim() || !activeDiscussionId) return;

    const view = document.querySelector(".view") as HTMLElement;
    view.style.opacity = "1";

    setIsLoading(true);
    const newPrompt = promptToSend;
    setCurrentPrompt('');

    const element = document.querySelector('.view');
    if (element) element.scrollTop = element.scrollHeight;

    const userMessage: Message = { role: 'user', content: newPrompt };
    const fullMessages = [systemPrompt, ...messages, userMessage];

    setMessages(prev => [...prev, userMessage]);
    addMessage(activeDiscussionId, userMessage);

    const controller = new AbortController();
    const signal = controller.signal;

    // Enregistre le controller pour l’abandon sur unmount
    currentController.current = controller;

    try {
      const res = await fetch('http://localhost:8000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: fullMessages }),
        signal,
      });

      if (!res.ok || !res.body) {
        throw new Error("Fetch failed");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder('utf-8');
      let responseSoFar = '';

      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        responseSoFar += chunk;

        setMessages(prev => {
          const last = prev[prev.length - 1];
          if (last?.role === 'assistant') {
            return [...prev.slice(0, -1), { ...last, content: responseSoFar }];
          }
          return prev;
        });
      }

      addMessage(activeDiscussionId, { role: 'assistant', content: responseSoFar });

      if (settings.textToSpeechEnabled) {
        speak(responseSoFar);
      }

    } catch (error) {
      if (error.name !== 'AbortError') {
        console.error("Erreur dans le stream :", error);
      }
    } finally {
      setIsLoading(false);
      currentController.current = null;
    }
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
              <div className='content'>
                {msg.role === 'user' && <Bubble icon="MessageCircleQuestion" title="Vous">{msg.content}</Bubble>}
                {msg.role === 'assistant' && <span className="md-text">{msg.content}</span>}
              </div>
            </React.Fragment>
          ))}


          
          {!isLoading && (
            <div className='w-full flex flex-col items-end gap-[10px]'>

              <span className="sm-text">
                Quelques idées de sujets de discussion
              </span>

              {settings.sharePersonalData ? (
                <>
                  <ActionButton
                    isSecondary
                    isExample
                    text="Résumé des événements du jour"
                    onClick={() => {
                      sendPrompt("Quels-sont les événements programmés pour aujourd'hui ?");
                    }}
                  />

                  <ActionButton
                    isSecondary
                    isExample
                    text="La prévention dans mon domicile"
                    onClick={() => {
                      sendPrompt("Quels-sont les éléments de prévention importants à considérer dans les pièces de mon domicile ?");
                    }}
                  />

                  <ActionButton
                    isSecondary
                    isExample
                    text="Idées d’activités pour rester actif"
                    onClick={() => {
                      sendPrompt(	"Quelles activités peuvent m'aider à rester actif au quotidien ?");
                    }}
                  />

                  <ActionButton
                    isSecondary
                    isExample
                    text="Créer une routine du matin"
                    onClick={() => {
                      sendPrompt("Peux-tu me proposer une routine du matin adaptée aux seniors ?");
                    }}
                  />

                  <ActionButton
                    isSecondary
                    isExample
                    text="Prévenir les chutes à la maison"
                    onClick={() => {
                      sendPrompt("Quels conseils pour éviter les chutes à la maison ?");
                    }}
                  />

                </>
              ) : (
                <>
                  <ActionButton
                    isSecondary
                    isExample
                    text="Idées d’activités pour rester actif"
                    onClick={() => {
                      sendPrompt(	"Quelles activités peuvent m'aider à rester actif au quotidien ?");
                    }}
                  />

                  <ActionButton
                    isSecondary
                    isExample
                    text="Créer une routine du matin"
                    onClick={() => {
                      sendPrompt("Peux-tu me proposer une routine du matin adaptée aux seniors ?");
                    }}
                  />

                  <ActionButton
                    isSecondary
                    isExample
                    text="Prévenir les chutes à la maison"
                    onClick={() => {
                      sendPrompt("Quels conseils pour éviter les chutes à la maison ?");
                    }}
                  />
                </>
              )}
            </div>
          )}


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