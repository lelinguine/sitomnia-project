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
    Flame,
    Cross,
    Zap,
    Users,
    Droplet,
    Circle,
    CircleCheck,
    OctagonAlert,
    Star,
    Pin
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
    Flame,
    Cross,
    Zap,
    Users,
    Droplet,
    Circle,
    CircleCheck,
    OctagonAlert,
    Star,
    Pin
};

const Icon = ({ icon, size }) => {
  const IconComponent = icons[icon];

  return (
    <>
        {IconComponent && <IconComponent className="icon" size={size} strokeWidth={2.4} />}
    </>
  );
};

export default Icon;