import {Link} from "react-router-dom";
import PropTypes from "prop-types";


const MenuItemContent = ({activeClass, inActiveIcon, activeIcon, menuItemName, path}) => {
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

MenuItemContent.propTypes = {
    activeClass: PropTypes.string.isRequired,
    inActiveIcon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node.isRequired,
    menuItemName: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired
}

export default MenuItemContent;