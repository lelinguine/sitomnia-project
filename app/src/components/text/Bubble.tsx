import React from "react";
import { MessageCircleQuestion, Search, Heart, Activity } from 'lucide-react';

import "./text.css";

const icons = {
    MessageCircleQuestion,
    Search,
    Heart,
    Activity
};

const Bubble = ({ children, isDescription, icon, title, onClick } : { children : React.ReactNode }) => {
      const IconComponent = icons[icon];
      const classNameIsDescription = isDescription ? "description-bubble" : "";

      return (
        <>
            <div className="bubble-container" onClick={onClick}>
                <div className={`bubble ${classNameIsDescription}`}>
                    <div className='bubble-title'>
                        {IconComponent && <IconComponent className="icon" size={20} strokeWidth={2} />}
                        <span className="sm-text">{title}</span>
                    </div>
                    <span className="md-text">{children}</span>
                </div>
            </div>
        </>
    );
};

export default Bubble;