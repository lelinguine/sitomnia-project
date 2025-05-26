"use client";

import Image from 'next/image';
import Checked from '@assets/settings-checked.svg';
import Unchecked from '@assets/settings-unchecked.svg';
import "./button.css";

const ToggleButton = ({ isChecked, onClick }) => {
  const classNameIsChecked = isChecked ? "disable-button" : "";

  return (
    <button onClick={onClick}>
      {isChecked ? (
        <Image
            src={Checked}
            alt="Loading icon"
            width={40}
            height={40}
            priority
          />
      ) : (
        <Image
            src={Unchecked}
            alt="Loading icon"
            width={40}
            height={40}
            priority
          />
      )}
    </button>
  );
};

export default ToggleButton;