"use client"

import React from "react";

import ActionButton from "../button/ActionButton";

type ActionModalProps = {
  icon: string;
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDisable?: boolean;
};

const ActionModal = ({ icon, title, onClick, isDisable }: ActionModalProps) => {

  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-item">
          <ActionButton isDisable={isDisable} icon={icon} text={title} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default ActionModal;