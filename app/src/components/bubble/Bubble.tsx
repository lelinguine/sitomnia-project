import React from "react";
import { MessageCircleQuestion } from 'lucide-react';

import "./bubble.css";

const Bubble = ({ children } : { children : React.ReactNode }) => {
    return (
        <>
            <div className='bubble'>
                <div className='bubble-title'>
                    <MessageCircleQuestion className="icon" size={20} strokeWidth={2}/>
                    <span className="sm-text">Vous</span>
                </div>
                <span className="md-text">{children}</span>
            </div>
        </>
    );
};

export default Bubble;