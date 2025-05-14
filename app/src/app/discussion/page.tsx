'use client';

import { useState } from 'react';
import { MessageCircleQuestion } from 'lucide-react';
import Bar from '@/components/Bar';
import View from '@/components/View';
import Bubble from '@/components/bubble/Bubble';
import ActionModal from '@/components/modal/ActionModal';

import React from 'react';

type Message = {
  prompt: string;
  response: string;
};

const Discussion = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState('');
  
  const sendPrompt = async () => {
  if (!currentPrompt.trim()) return;

  const newPrompt = currentPrompt;
  setCurrentPrompt('');

  // Ajouter un nouveau message avec prompt vide
  setMessages((prev) => [...prev, { prompt: newPrompt, response: '' }]);

  const systemPrompt = "Réponds de manière concise et précise à la question suivante, en évitant les détails superflus :\n\n";

  const res = await fetch('http://localhost:8000/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt: systemPrompt + newPrompt,
    }),
  });

  if (!res.ok || !res.body) {
    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1].response = 'Erreur lors de la requête';
      return updated;
    });
    return;
  }

  const reader = res.body.getReader();
  const decoder = new TextDecoder('utf-8');
  let responseSoFar = '';

  while (true) {

    const element = document.querySelector('.view');
    if (element) {
      element.scrollTop = element.scrollHeight;
    }

    const { done, value } = await reader.read();
    if (done) break;

    const chunk = decoder.decode(value, { stream: true });
    responseSoFar += chunk;

    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1] = {
        ...updated[updated.length - 1],
        response: responseSoFar,
      };
      return updated;
    });
  }
};

  return (
    <>
      <Bar>
        <div className="bar-title">
          <MessageCircleQuestion className="icon" size={32} strokeWidth={2} />
          <span className="lg-text">Questions</span>
        </div>
      </Bar>

      <View>
        <span className="sm-text">
          Écrire à l’intelligence artificielle. Une demande précise permet d’avoir une réponse concise.
        </span>

        {messages.map((msg, i) => (
          <React.Fragment key={i}>
            <Bubble>{msg.prompt}</Bubble>
            <span className="sm-text">{msg.response}</span>
          </React.Fragment>
        ))}

        <div className='mb-[150px]'></div>


      </View>

      <div className="modal">
        <ActionModal
          prompt={currentPrompt}
          setPrompt={setCurrentPrompt}
          onSend={sendPrompt}
          />
      </div>
    </>
  );
};

export default Discussion;
