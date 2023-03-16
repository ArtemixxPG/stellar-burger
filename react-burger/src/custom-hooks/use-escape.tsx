import {useEffect} from 'react';

const useEscape = (close: () => void) => {

    const pressed = (e: KeyboardEvent): void => {
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