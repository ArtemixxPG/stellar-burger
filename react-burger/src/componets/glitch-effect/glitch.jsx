import React from 'react';
import PropTypes from "prop-types";

import './glitch.scss'

const Glitch = ({glitchImage, glitchClass}) => {
    return (
        <>
            <div className={glitchClass}>
                {glitchImage}
            </div>
        </>
    );
};

Glitch.propTypes = {
    glitchImage: PropTypes.element.isRequired,
    glitchClass: PropTypes.string.isRequired
}

export default Glitch;