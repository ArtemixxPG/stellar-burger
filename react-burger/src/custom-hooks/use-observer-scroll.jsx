import {useEffect, useRef, useState} from "react";
import {tab} from "@testing-library/user-event/dist/tab";


const useObserverScroll = (observeClass, setCurrentElement) => {


    const observer = useRef(null)

    const intersectionObserver = new IntersectionObserver((entries, {root:observer})=>{
        for(let i = 0; i < entries[0].target.children.length; i++) {
                if (i === 0) {
                    if (entries[0].target.children[i].intersectionRatio > 0 && entries[0].target.children[i+1].intersectionRatio === 0) {
                        setCurrentElement('first')
                    }
                    if (entries[0].target.children[entries[0].target.children.length - 1]
                        .intersectionRatio > 0 && entries[0].target.children[i-1].intersectionRatio === 0) {
                        setCurrentElement('second')
                    } else {
                        setCurrentElement('third')
                    }

            }
        }
        console.log("hook")
    })



    const observe = (e) => {

        if(observer.current && observer.current.contains(e.target)){
            intersectionObserver.observe(observer.current)
        }
    }

    useEffect(()=>{
        observer.current.addEventListener('scroll', observe, true)
        return ()=> {
            observer.current.removeEventListener('scroll', observe, true)
        }
    })
    //const observeElements = Array(countObserveElements).fill(useRef(null))
    //const viewScrollElement = observeElements.map((elem)=>{

    //})

    return [observer]
};

export default useObserverScroll;