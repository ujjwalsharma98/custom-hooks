import { useState, useEffect } from 'react'
import axios from 'axios';

export const FetchUsersHook = () => {

    const [usersList, setUsersList] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            setLoading(true)
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                setUsersList(response.data)
                setLoading(false)
            } catch (error){
                setError(error)
                setLoading(false)
            }
        })();
    }, [])

    return [usersList, loading, error]
}