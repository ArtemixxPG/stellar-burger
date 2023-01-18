import {useEffect, useRef} from "react";


const usePortalScroll = (idElement) => {

    const from = useRef(null)


    const portal = (e) => {
        if(from.current && from.current.contains(e.target)){
            document.getElementById(idElement).scrollIntoView()
        }
    }

    useEffect(()=>{
        from.current.addEventListener('click', portal, true)

        return  () =>{
            from.current.removeEventListener('click', portal, true)
        }
    })


    return from
};

export default usePortalScroll;