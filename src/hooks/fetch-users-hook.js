import { useState, useEffect } from 'react'
import axios from 'axios';

export const FetchUsersHook = () => {

    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsersList(response.data)
        })();
    }, [])


    return usersList  
}