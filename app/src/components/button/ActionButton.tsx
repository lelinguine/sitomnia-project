"use client"; // important si le composant est dans /app

import { MicVocal, PenLine, CornerUpRight, X } from "lucide-react";
import "./button.css";

const icons = {
    MicVocal,
    PenLine,
    CornerUpRight,
    X
};

const ActionButton = ({ isSecondary, icon, text, onClick }) => {
  const IconComponent = icons[icon];
  const className = isSecondary ? "secondary-action-button" : "action-button";

  return (
    <button className={`button ${className}`} onClick={onClick}>
      {IconComponent && <IconComponent className="icon" size={24} strokeWidth={2} />}
      <span className="sm-text">{text}</span>
    </button>
  );
};

export default ActionButton;