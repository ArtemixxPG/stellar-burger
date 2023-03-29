import {Link} from "react-scroll";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";


interface IBurgerTab{
    header: string
    currentTab: string
    setCurrentTab: (tab: string) => void
    to: string
    containerID: string,
    value: string
}

const BurgerTab = ({header, currentTab, setCurrentTab, to, containerID, value}:IBurgerTab) => {



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


export default BurgerTab;