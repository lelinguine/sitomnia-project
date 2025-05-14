import React from "react";
import { MessageCircleQuestion } from 'lucide-react';
import ActionButton from "../button/ActionButton";
import TextInput from "../input/TextInput";

import "./modal.css";

const ActionModal = ({ prompt, setPrompt, onSend }: {
  prompt: string,
  setPrompt: (value: string) => void,
  onSend: () => void
}) => {
  return (
    <>
      <TextInput value={prompt} onChange={setPrompt} />
      <div className="modal-action">
        <ActionButton isSecondary icon="X" text="Annuler" onClick={null} />
        <ActionButton icon="CornerUpRight" text="Demander" onClick={onSend} />
      </div>
    </>
  );
};

export default ActionModal;