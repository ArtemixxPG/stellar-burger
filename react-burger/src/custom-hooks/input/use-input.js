import {useCallback, useState} from "react";

const useInput = (inputValues) => {
    const [values, setValues] = useState(inputValues);

    const handleChange = useCallback( (e) => {
        const {value, name} = e.target;
        setValues({...values, [name]: value});
    }, [values])
    return {values, handleChange, setValues};
};

export default useInput;