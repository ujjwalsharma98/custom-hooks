import { useState, useEffect } from 'react'
import axios from 'axios';

const Users = () => {

    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsersList(response.data)
        })();
    }, [])

    return (
        <>
        {usersList.map(user => (<div key={user.id}>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <br/>
        </div>))}
        </>
    )
}

export default Users;