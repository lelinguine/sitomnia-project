import React, { useState } from "react";

import ActionButton from "../button/ActionButton";
import TextInput from "../text/TextInput";

const DiscussionModal = ({ prompt, setPrompt, onSend }: {
  prompt: string,
  setPrompt: (value: string) => void,
  onSend: () => void
}) => {

  const [isWriting, setIsWriting] = useState(false);
  const [isDictating, setIsDictating] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      setIsWriting(false);
      onSend?.();
    }
  };

  return (
    <>
    <div className="modal">

      {!isWriting && !isDictating && (
        <div className="modal-container">
          <div className="modal-item">
            <ActionButton icon="PenLine" text="Écrire" onClick={() => setIsWriting(true)}/>
            {/* <ActionButton icon="MicVocal" text="Dicter" onClick={() => setIsDictating(true)}/> */}
          </div>
        </div>
      )}

      {isWriting && (
        <div className="modal-container">
          <TextInput value={prompt} onChange={setPrompt} handleKeyDown={handleKeyDown}/>

          <div className="modal-item">
            <ActionButton isSecondary icon="X" text="Annuler" onClick={() => setIsWriting(false)}/>
            <ActionButton icon="CornerUpRight" text="Demander" onClick={onSend}/>
          </div>
        </div>
      )}


      {isDictating && (
        <div className="modal-container">
          {/* <TextInput value={prompt} onChange={setPrompt} /> */}

          <div className="modal-item">
            <ActionButton isSecondary icon="X" text="Annuler" onClick={() => setIsDictating(false)}/>
            <ActionButton icon="CornerUpRight" text="Demander" onClick={null}/>
          </div>
        </div>
      )}




      





    </div>



      
    </>
  );
};

export default DiscussionModal;