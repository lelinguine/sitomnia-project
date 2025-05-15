'use client';

import { useState } from 'react';



import Bar from '@/components/Bar';



import Bubble from '@/components/text/Bubble';
import DiscussionModal from '@/components/modal/DiscussionModal';

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
      prompt: newPrompt,
    }),
  });

  if (!res.ok || !res.body) {
    setMessages((prev) => {
      const updated = [...prev];
      updated[updated.length - 1].response = "L'intelligence artificielle ne répond pas pour le moment. Réessayer plus tard.";
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
      <Bar icon="MessageCircleQuestion" title="Questions" color="#BBDED6"/>

      <div className='view'>
        <div className='thread'>
          <span className="sm-text">
            Écrire à l’intelligence artificielle. Une demande précise permet d’avoir une réponse concise.
          </span>
          {messages.map((msg, i) => (
            <React.Fragment key={i}>
              <Bubble>{msg.prompt}</Bubble>
              <span className="sm-text">{msg.response}</span>
            </React.Fragment>
          ))}
        </div>
      </div>




      

     
        <DiscussionModal
          prompt={currentPrompt}
          setPrompt={setCurrentPrompt}
          onSend={sendPrompt}
        />
   
    </>
  );
};

export default Discussion;
