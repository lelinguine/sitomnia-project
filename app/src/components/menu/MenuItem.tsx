import { Megaphone, ChartNoAxesGantt, MessageCircleQuestion, User, Cog } from 'lucide-react';

const icons = {
  Megaphone,
  ChartNoAxesGantt,
  MessageCircleQuestion,
  User,
  Cog,
};

const MenuItem = ({ isFirst, icon, title, link, color }) => {
  const IconComponent = icons[icon];
  const className = isFirst ? "menu-item first" : "menu-item";

  return (
    <>
      <a href={link} className={className} style={{ backgroundColor: color }}>
         {IconComponent && <IconComponent className="icon" />}
        <span className='md-text'>{ title }</span>
      </a>
    </>
  );
};

export default MenuItem;