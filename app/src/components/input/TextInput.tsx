import React, { useState, useRef, useEffect } from "react";
import { MessageCircleQuestion } from 'lucide-react';
import ActionButton from "../button/ActionButton";

import "./input.css";

const TextInput = ({ value, onChange }: { value: string, onChange: (v: string) => void }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className='bubble'>
      <div className='bubble-title'>
        <MessageCircleQuestion className="icon" size={20} strokeWidth={2} />
        <span className="sm-text">Vous</span>
      </div>
      <textarea
        ref={textareaRef}
        className="md-text auto-textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={1}
      />
    </div>
  );
};

export default TextInput;
