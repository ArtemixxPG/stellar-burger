import {useEffect, useState} from "react";
import PropTypes from "prop-types";

const useFetchList = (url) => {
    const [result, setResult] = useState({
        data:[],
        loading:true,
        error:false
    })

    useEffect(()=>{
        let cleanupFunction = false;
        const fetchDataIngredients = async () =>{
            try{
                const response = await fetch(url);
                if(response.ok) {
                    const json = await response.json();
                    if(!cleanupFunction){
                        setTimeout(()=> {
                            setResult((prevResult) => {
                                return {
                                    ...prevResult,
                                    data: json.data,
                                    loading: false
                                }
                            })
                        }, 3000)
                    }
                }
            } catch (e) {
                setTimeout(()=> {
                    setResult((prevResult) => {
                        return {
                            ...prevResult,
                            loading: false,
                            error: true
                        }
                    })
                }, 1000)
            }

        }
        fetchDataIngredients().then()
        return () => cleanupFunction = true;
    }, [url])

    console.log(result.data)

    return [result.data, result.loading, result.error]

};

useFetchList.propTypes = {
    url: PropTypes.string
}

export default useFetchList;