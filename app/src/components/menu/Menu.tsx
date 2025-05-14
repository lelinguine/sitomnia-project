import MenuItem from '@/components/menu/MenuItem';
import "./menu.css";

const Menu = () => {
    const menuItems = [
        { icon: "Megaphone", title: "Prévention", link: "/empty", color: "#EEE9DA" },
        { icon: "ChartNoAxesGantt", title: "Agenda", link: "/empty", color: "#A0C3D2" },
        { icon:"MessageCircleQuestion", title: "Questions", link: "/discussion", color: "#BBDED6" },
        { icon:"User", title: "Vous", link: "/empty", color: "#F9F7F7" },
        { icon:"Cog", title: "Réglages", link: "/empty", color: "#F9F7F7" },
    ];

    return (
        <>
            <div className="menu">
                {menuItems.map((item, index) => (
                    <MenuItem key={index}  isFirst={index === 0} icon={item.icon} title={item.title} link={item.link} color={item.color}/>
                ))}
            </div>
        </>
    );
};

export default Menu;