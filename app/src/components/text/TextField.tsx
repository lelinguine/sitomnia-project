import React from "react";

import "./text.css";

type TextFieldProps = {
  title: string;
  subtitle: string;
  value: string;
  placeholder: string;
  type?: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  inputRef?: React.Ref<HTMLInputElement>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isDisable?: boolean;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
};

const TextField = ({ title, subtitle, value, placeholder, type, handleChange, inputRef, onKeyDown, isDisable, onFocus }: TextFieldProps) => {
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <>
      <span className="md-text mb-[-10px]">{title}</span>
      <span className="sm-text">{subtitle}</span>

      <input
        disabled={isDisable}
        ref={inputRef}
        className="md-text field"
        type={type || "text"}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
      />
    </>
  );
};

export default TextField;