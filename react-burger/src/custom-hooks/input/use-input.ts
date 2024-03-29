import {ChangeEvent, useCallback, useState} from "react";



const useInput = <T>(inputValues: T) => {
    const [values, setValues] = useState<T>(inputValues);

    const handleChange = useCallback( (e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value});
    }, [values])
    return {values, handleChange, setValues};
};

export default useInput;