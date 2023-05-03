import {ReactElement} from 'react';

import './glitch.scss'

interface IGlitch {
    glitchImage: ReactElement
    glitchClass: string
}

const Glitch = ({glitchImage, glitchClass}: IGlitch) => {
    return (
        <>
            <div className={glitchClass}>
                {glitchImage}
            </div>
        </>
    );
};



export default Glitch;