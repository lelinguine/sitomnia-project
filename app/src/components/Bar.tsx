import React from "react";
import BackButton from "./button/BackButton";
import "./bar.css";

const Bar = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
    <div className='bar'>
        <BackButton />
        {children}
      </div>
    </>
  );
};

export default Bar;