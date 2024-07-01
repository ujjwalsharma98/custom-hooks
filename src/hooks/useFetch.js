import { useState, useEffect } from 'react'
import axios from 'axios';

export const useFetch = (resourceUrl) => {

    const [list, setUsersList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                const response = await axios.get(resourceUrl)
                setUsersList(response.data)
                setLoading(false)
            } catch (error){
                setError(error)
                setLoading(false)
            }
        })();
    }, [resourceUrl])

    return [list, loading, error]
}