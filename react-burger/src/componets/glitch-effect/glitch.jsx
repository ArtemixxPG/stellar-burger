import React from 'react';
import PropTypes from "prop-types";

import './glitch.scss'

const Glitch = (props) => {
    return (
        <>
            <div className={props.glitchClass}>
                {props.glitchImage}
            </div>
        </>
    );
};

Glitch.propTypes = {
    glitchImage: PropTypes.element.isRequired,
    glitchClass: PropTypes.string.isRequired
}

export default Glitch;