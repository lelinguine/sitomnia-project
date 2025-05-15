'use client';

import React, { useState } from 'react';

import Bar from '@/components/Bar';
import Bubble from '@/components/text/Bubble';
import DiscussionModal from '@/components/modal/DiscussionModal';

type Message = {
  prompt: string;
  response: string;
};

const Discussion = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendPrompt = async () => {
    if (isLoading || !currentPrompt.trim()) return;

    setIsLoading(true);
    const newPrompt = currentPrompt;
    setCurrentPrompt('');

    const systemPrompt = "Ne te pésente pas. Ne parle pas de toi. Réponds à la question de manière synthétique, en évitant les détails superflus. Ne fais pas d'introduction parle directement du sujet de la question. Ne fais pas de liste. Un maximun de 100 mots pour répondre. Si tu ne sais pas répondre àa la question dis que tu ne sais pas. Réponds en français.\n\n";

    setMessages((prev) => [...prev, { prompt: newPrompt, response: '' }]);

    const res = await fetch('http://localhost:8000/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content: systemPrompt
          },
          {
            role: "user",
            content: newPrompt
          }
        ]
      }),
    });

    if (!res.ok || !res.body) {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].response =
          "L'intelligence artificielle ne répond pas pour le moment. Réessayer plus tard.";
        return updated;
      });
      setIsLoading(false);
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let responseSoFar = '';

    while (true) {
      const element = document.querySelector('.view');
      if (element) element.scrollTop = element.scrollHeight;

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
    setIsLoading(false);
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
        isLoading={isLoading}
      />
    </>
  );
};

export default Discussion;
