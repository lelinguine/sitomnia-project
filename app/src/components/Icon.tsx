"use client";

import {
    MicVocal,
    PenLine,
    CornerUpRight,
    CornerDownLeft,
    X,
    MessageCirclePlus,
    TestTube,
    Megaphone,
    ChartNoAxesGantt,
    MessageCircleQuestion,
    User,
    Cog,
    Search,
    Heart,
    Activity,
} from "lucide-react";

const icons = {
    MicVocal,
    PenLine,
    CornerUpRight,
    CornerDownLeft,
    X,
    MessageCirclePlus,
    TestTube,
    Megaphone,
    ChartNoAxesGantt,
    MessageCircleQuestion,
    User,
    Cog,
    Search,
    Heart,
    Activity,
};

const Icon = ({ icon, size }) => {
  const IconComponent = icons[icon];

  return (
    <>
        {IconComponent && <IconComponent className="icon" size={size} strokeWidth={2} />}
    </>
  );
};

export default Icon;