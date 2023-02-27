import {useEffect, useRef, useState} from "react";


const useOutside = (close) => {


    const ref = useRef(null)

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
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