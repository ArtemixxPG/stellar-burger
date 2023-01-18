import {Link} from "react-scroll";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const BurgerTab = (props) => {


    const handleChangeTab = (e) => {
        props.setCurrentTab(e.value)
    }

    return (
        <Link
            to={props.to}
            spy={true}
            smooth={true}
            duration={700}
            offset={-20}
            containerId= {props.containerID}
            onSetActive={() => props.setCurrentTab(props.value)}>
            <Tab className='tab-ingrdient' value={props.value} active={props.currentTab === props.value} onClick={handleChangeTab}>
                {props.header}
            </Tab>
        </Link>
    );
};

BurgerTab.propTypes = {
    header: PropTypes.string.isRequired,
    currentTab: PropTypes.string.isRequired,
    setCurrentTab: PropTypes.func.isRequired,
    to: PropTypes.string.isRequired,
    containerID: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default BurgerTab;