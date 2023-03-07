import {FC, ReactElement} from 'react';

import './glitch.scss'

interface IGlitch {
    glitchImage: ReactElement
    glitchClass: string
}

const Glitch: FC<IGlitch> = ({glitchImage, glitchClass}) => {
    return (
        <>
            <div className={glitchClass}>
                {glitchImage}
            </div>
        </>
    );
};



export default Glitch;