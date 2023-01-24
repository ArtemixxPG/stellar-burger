import React, {useEffect, useState} from 'react';

const defaultSettings = {
    method:'POST',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    }
}

const usePost = (settings, url) => {
//section init
    const [sending, setSending] = useState(false);
    const [data, setData] = useState([]);
    const [result, setResult] = useState({
        message: 0,
        loading: true,
        error: false
    });

    //section effect
    useEffect(() => {
        if(sending) {
            let cleanupFunction = false
            const fetchData = async () => {
                try {
                    const response = await fetch(url, {
                        method: defaultSettings.method,
                        headers: settings ? settings.headers : defaultSettings.headers,
                        body: JSON.stringify({ ingredients: data} )
                    })
                    if (response.ok) {
                        const json = await response.json();
                        setResult({
                            message: json.order.number,
                            loading: false,
                            error: false
                        });
                        setSending(false)
                    } else {
                        console.error('Упс... Что-то пошло не так! ' + response)
                    }
                } catch (error) {
                    console.error(error);
                    setResult({
                        message: 0,
                        loading: false,
                        error: true
                    });
                }
            }
            fetchData().then()
            return () => cleanupFunction = true
        }
    }, [sending])

    //section return
    return [result, setData, setSending];
};

export default usePost;