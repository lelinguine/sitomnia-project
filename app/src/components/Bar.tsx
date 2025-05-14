import React from "react";

import BackButton from "./button/BackButton";

import "./bar.css";

import { Megaphone, ChartNoAxesGantt, MessageCircleQuestion, User, Cog } from 'lucide-react';

const icons = {
  Megaphone,
  ChartNoAxesGantt,
  MessageCircleQuestion,
  User,
  Cog,
};

const Bar = ({ icon, title }) => {
  const IconComponent = icons[icon];

  return (
    <>
    <div className='bar'>
        <BackButton />
        <div className="bar-content">
          {IconComponent && <IconComponent className="icon" size={32} strokeWidth={2}/>}
          <span className="lg-text">{title}</span>
        </div>
      </div>
    </>
  );
};

export default Bar;