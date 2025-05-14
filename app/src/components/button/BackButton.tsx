"use client"; // important si le composant est dans /app

import { useRouter } from "next/navigation";
import { CornerDownLeft } from "lucide-react";
import "./button.css";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      className="button default-button back-button"
      onClick={() => router.back()}
    >
      <CornerDownLeft className="icon" size={20} strokeWidth={2}/>
      <span className="sm-text">Retour</span>
    </button>
  );
};

export default BackButton;