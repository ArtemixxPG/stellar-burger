import {Link} from "react-scroll";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const BurgerTab = ({header, currentTab, setCurrentTab, to, containerID, value}) => {


    const handleChangeTab = (e) => {
        setCurrentTab(e.value)
    }

    return (
        <Link
            to={to}
            spy={true}
            smooth={true}
            duration={700}
            offset={-20}
            containerId={containerID}
            onSetActive={() => setCurrentTab(value)}>
            <Tab className='tab-ingrdient' value={value} active={currentTab === value} onClick={handleChangeTab}>
                {header}
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