"use client"; // important si le composant est dans /app

import { MicVocal, PenLine, CornerUpRight, X, MessageCirclePlus, TestTube } from "lucide-react";
import "./button.css";

const icons = {
    MicVocal,
    PenLine,
    CornerUpRight,
    X,
    MessageCirclePlus, 
    TestTube
};

const ActionButton = ({ isSecondary, isDisable, icon, text, onClick }) => {
  const IconComponent = icons[icon];
  const classNameIsSecondary = isSecondary ? "secondary-button" : "";
  const classNameIsDisable = isDisable ? "disable-button" : "";

  return (
    <button className={`button default-button ${classNameIsSecondary} ${classNameIsDisable}`} onClick={isDisable ? undefined : onClick}>
      {IconComponent && <IconComponent className="icon" size={24} strokeWidth={2} />}
      <span className="sm-text">{text}</span>
    </button>
  );
};

export default ActionButton;