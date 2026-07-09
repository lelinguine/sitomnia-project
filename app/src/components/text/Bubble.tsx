import React from "react";

import Icon from "../Icon";
import "./text.css";

type BubbleProps = {
    children: React.ReactNode;
    isDescription?: boolean;
    icon?: string;
    title?: string;
    title2?: string;
    icon2?: string;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Bubble = ({ children, isDescription, icon, title, title2, icon2, onClick }: BubbleProps) => {
      const classNameIsDescription = isDescription ? "description-bubble" : "";

      return (
        <>
            <div className="bubble-container" onClick={onClick}>
                <div className={`bubble ${classNameIsDescription}`}>
                    <div className='bubble-title'>
                        {icon && <Icon icon={icon} size={20}/>} 
                        <span className="sm-text">{title}</span>
                        {icon2 && <Icon icon={icon2} size={20}/>} 
                        <span className="sm-text">{title2}</span>
                    </div>
                    <span className="md-text">{children}</span>
                </div>
            </div>
        </>
    );
};

export default Bubble;