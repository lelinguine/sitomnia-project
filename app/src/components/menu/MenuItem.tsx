import { Megaphone, ChartNoAxesGantt, MessageCircleQuestion, User, Cog } from 'lucide-react';

const icons = {
  Megaphone,
  ChartNoAxesGantt,
  MessageCircleQuestion,
  User,
  Cog,
};

const MenuItem = ({ isOnTop, icon, title, link, color }) => {
  const IconComponent = icons[icon];
  const className = isOnTop ? "ontop-menu-item" : "";

  return (
    <>
      <a href={link} className={`button menu-item ${className}`} style={{ backgroundColor: color }}>
         {IconComponent && <IconComponent className="icon" size={24} strokeWidth={2}/>}
        <span className='md-text'>{ title }</span>
      </a>
    </>
  );
};

export default MenuItem;