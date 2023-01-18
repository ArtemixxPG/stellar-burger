import {useEffect} from 'react';

const useEscape = (escape) => {

    const pressed = (e) => {
        if(e.key === 'Escape')
            escape(false)
    }

    useEffect(()=>{
        document.addEventListener('keydown', pressed, true)

        return () => (
            document.removeEventListener('keydown', pressed, true)
        )
    })

};

export default useEscape;