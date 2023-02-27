import {useEffect} from 'react';

const useEscape = (close) => {

    const pressed = (e) => {
        if (e.key === 'Escape')
            close()
    }

    useEffect(() => {
        document.addEventListener('keydown', pressed, true)

        return () => (
            document.removeEventListener('keydown', pressed, true)
        )
    })

};

export default useEscape;