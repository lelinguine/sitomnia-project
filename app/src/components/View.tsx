import React from "react";
import "./view.css";

const View = ({ children, isPrimary } : { children : React.ReactNode }) => {
    const className = isPrimary ? "container-primary" : "";

    return (
        <>
        <div className='view'>
            <div className={`container ${className}`}>
                {children}  
            </div>
        </div>
        </>
    );
};

export default View;