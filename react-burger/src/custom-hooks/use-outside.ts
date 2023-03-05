import {useEffect, useRef} from "react";


const useOutside = (close: ()=> void) => {


    const ref = useRef<HTMLDivElement>(null)

    const handleClickOutside = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
            close()
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    })

    return ref
};

export default useOutside;