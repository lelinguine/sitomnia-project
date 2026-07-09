"use client";

import React from "react";
import Icon from "../Icon";
import "./button.css";

type ActionButtonProps = {
  isExample?: boolean;
  isSecondary?: boolean;
  isDelete?: boolean;
  isDisable?: boolean;
  icon?: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const ActionButton = ({ isExample, isSecondary, isDelete, isDisable, icon, text, onClick }: ActionButtonProps) => {
  const classNameIsSecondary = isSecondary ? "secondary-button" : "";
  const classNameIsDisable = isDisable ? "disable-button" : "";
  const classNameIsDelete = isDelete ? "delete-button" : "";
  const classNameIsExample = isExample ? "example-button" : "";

  return (
    <button className={`button default-button ${classNameIsSecondary} ${classNameIsDisable} ${classNameIsDelete} ${classNameIsExample}`} onClick={isDisable ? undefined : onClick}>
      {icon && <Icon icon={icon} size={20} />}
      <span className="sm-text">{text}</span>
    </button>
  );
};

export default ActionButton;