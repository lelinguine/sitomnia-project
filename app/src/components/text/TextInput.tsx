import React, { useState, useRef, useEffect } from "react";
import { PenLine } from 'lucide-react';

import "./text.css";

const TextInput = ({
  value,
  onChange,
  handleKeyDown
}: {
  value: string,
  onChange: (v: string) => void,
  handleKeyDown?: () => void
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      textareaRef.current.focus();
    }
  }, [value]);

  return (
    <div className='bubble'>
      <div className='bubble-title'>
        <PenLine className="icon" size={20} strokeWidth={2} />
        <span className="sm-text">Écrire</span>
      </div>
      <textarea
        ref={textareaRef}
        className="md-text auto-textarea"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
      />
    </div>
  );
};

export default TextInput;