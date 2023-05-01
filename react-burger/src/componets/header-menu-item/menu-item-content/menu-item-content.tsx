import {Link} from "react-router-dom";
import {FC, ReactElement} from "react";

interface IMenuItemContent {
    activeClass: string
    inActiveIcon: ReactElement
    activeIcon: ReactElement
    menuItemName: string
    path: string
}
const MenuItemContent = ({activeClass, inActiveIcon, activeIcon, menuItemName, path}:IMenuItemContent) => {
    return (
        <>
            <Link to={path}>
                {
                    activeClass === 'text_type_main-default text_color_inactive' ?
                        inActiveIcon : activeIcon
                }
                <span className={`ml-4 text ${activeClass}`}>{menuItemName}</span>
            </Link>
        </>
    );
};

export default MenuItemContent;