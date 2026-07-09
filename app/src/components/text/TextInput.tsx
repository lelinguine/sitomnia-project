import React, { useRef, useEffect } from "react";

import Icon from "../Icon";
import "./text.css";

const TextInput = ({
  value,
  onChange,
  handleKeyDown
}: {
  value: string,
  onChange: (v: string) => void,
  handleKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>
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
        <Icon icon="PenLine" size={20} />
        <span className="sm-text">Écrire</span>
      </div>
      <textarea
        ref={textareaRef}
        className="md-text auto-textarea"
        value={value}
        placeholder="Tapez votre question..."
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
      />
    </div>
  );
};

export default TextInput;