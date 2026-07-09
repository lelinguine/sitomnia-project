import Icon from "../Icon";

type MenuItemProps = {
  isOnTop?: boolean;
  icon: string;
  title: string;
  link: string;
  color: string;
};

const MenuItem = ({ isOnTop, icon, title, link, color }: MenuItemProps) => {
  const className = isOnTop ? "ontop-menu-item" : "";

  return (
    <>
      <a href={link} className={`button menu-item ${className}`} style={{ backgroundColor: color }}>
         <Icon icon={icon} size={24}/>
        <span className='md-text'>{ title }</span>
      </a>
    </>
  );
};

export default MenuItem;