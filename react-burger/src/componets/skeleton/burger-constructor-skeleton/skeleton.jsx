import styles from './skeleton.module.scss'
import PropTypes from "prop-types";

const Skeleton = ({type, name}) => {
    return (
        <div className={`text text_type_main-default ${styles.skeleton} ${styles[type]}`}>
            {name}
        </div>
    );
};
Skeleton.proTypes = {
    type: PropTypes.string,
    name: PropTypes.string.isRequired
}
export default Skeleton;