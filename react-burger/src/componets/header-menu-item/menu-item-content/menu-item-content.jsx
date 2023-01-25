import {Link} from "react-router-dom";
import PropTypes from "prop-types";


const MenuItemContent = ({activeClass, inActiveIcon, activeIcon, menuItemName}) => {
    return (
        <>
            <Link to="/">
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
    inActiveIcon: PropTypes.element.isRequired,
    activeIcon: PropTypes.element.isRequired,
    menuItemName: PropTypes.string.isRequired
}

export default MenuItemContent;