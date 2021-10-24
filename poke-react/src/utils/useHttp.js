import React, {useState, useEffect} from 'react';
import axios from 'axios';

const useGet = ({initialState = [], url, params = {}}) => {
    const [data, setData] = useState(initialState);
    const [loading, setLoading] = useState(true);
    const [error,setError] = useState();

    useEffect(() => {
        const get = async() => {
            try{
                const {data} = await axios.get(url, params);
                setData(data);                
                setLoading(false);
                setError();
            }
            catch(err){
                console.error(err);                                
                setError(err);
            }
        }

        get();
    }, [url]);

    return [data, loading, error];
}
 
export default useGet;