import {Link} from "react-scroll";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {FC} from "react";

interface IBurgerTab{
    header: string
    currentTab: string
    setCurrentTab: (tab: string) => void
    to: string
    containerID: string,
    value: string
}

const BurgerTab:FC<IBurgerTab> = ({header, currentTab, setCurrentTab, to, containerID, value}) => {



    return (
        <Link
            to={to}
            spy={true}
            smooth={true}
            duration={700}
            offset={-20}
            containerId={containerID}
            onSetActive={() => setCurrentTab(value)}>
            <Tab value={value} active={currentTab === value} onClick={(type:string) => type ? currentTab : ''}>
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