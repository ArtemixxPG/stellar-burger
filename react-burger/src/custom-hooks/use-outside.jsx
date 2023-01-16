import {useEffect, useRef, useState} from "react";


const useOutside = (open, setOpen) => {

    // const [open, setOpen] = useState(initialIsVisible)

    const ref = useRef(null)

    const handleClickOutside = (e) => {
        if(ref.current && !ref.current.contains(e.target)){
            setOpen(false)
        }
    }

    useEffect(()=>{
        document.addEventListener('click', handleClickOutside, true)

        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    })

    return ref
};

export default useOutside;