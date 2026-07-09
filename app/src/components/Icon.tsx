"use client";

import {
    MicVocal,
    PenLine,
    CornerUpRight,
    CornerDownLeft,
    X,
    MessageCirclePlus,
    Megaphone,
    ChartNoAxesGantt,
    MessageCircleQuestion,
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
    Pin,
    PencilLine,
    Info,
    TestTube,
    SquarePen,
    CircleStop,
    User,
    Unplug,
    CircleX,
    CheckCheck,
    Check,
    RotateCcw,
    CircleHelp,
    Bug,
    BellPlus,
    Clock,
    Eraser,
    Calendar,
    SquareChartGantt,
    Calendar1,
    ChevronRight
} from "lucide-react";

const icons = {
    MicVocal,
    PenLine,
    CornerUpRight,
    CornerDownLeft,
    X,
    MessageCirclePlus,
    Megaphone,
    ChartNoAxesGantt,
    MessageCircleQuestion,
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
    Pin,
    PencilLine,
    Info,
    TestTube,
    SquarePen,
    CircleStop,
    User,
    Unplug,
    CircleX,
    CheckCheck,
    Check,
    RotateCcw,
    CircleHelp,
    Bug,
    BellPlus,
    Clock,
    Eraser,
    Calendar,
    SquareChartGantt,
    Calendar1,
    ChevronRight
};

const Icon = ({ icon, size }: { icon: string; size: number }) => {
  const IconComponent = icons[icon as keyof typeof icons];

  return (
    <>
        {IconComponent && <IconComponent className="icon" size={size} strokeWidth={2.4} />}
    </>
  );
};

export default Icon;