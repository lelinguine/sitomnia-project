import React from "react";

import BackButton from "./button/BackButton";

import "./bar.css";

import { Megaphone, ChartNoAxesGantt, MessageCircleQuestion, User, Cog, TestTube } from 'lucide-react';

const icons = {
  Megaphone,
  ChartNoAxesGantt,
  MessageCircleQuestion,
  User,
  Cog,
  TestTube
};

const Bar = ({ icon, title, color }) => {
  const IconComponent = icons[icon];

  return (
    <>
    <div className='bar' style={{ backgroundColor: color }}>
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