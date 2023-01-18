import {Link} from "react-router-dom";
import PropTypes from "prop-types";


const MenuItemContent = (props) => {
    return (
        <>
            <Link to="/">
                {
                    props.activeClass === 'text_type_main-default text_color_inactive' ?
                        props.inActiveIcon : props.activeIcon
                }
                <span className={`ml-4 text ${props.activeClass}`}>{props.menuItemName}</span>
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