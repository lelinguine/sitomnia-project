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

const ActionButton = ({ isSecondary, icon, text, onClick }) => {
  const IconComponent = icons[icon];
  const className = isSecondary ? "secondary-button" : "";

  return (
    <button className={`button default-button ${className}`} onClick={onClick}>
      {IconComponent && <IconComponent className="icon" size={24} strokeWidth={2} />}
      <span className="sm-text">{text}</span>
    </button>
  );
};

export default ActionButton;