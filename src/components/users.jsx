import { FetchUsersHook } from '../hooks/fetch-users-hook'

const Users = () => {

    const [list, loading, error] = FetchUsersHook('https://jsonplaceholder.typicode.com/users')

    if (loading) {
        return (<div>Loading...</div>)
    }

    if (error) {
        return (<div>{error.message}</div>)
    }

    return (
        <>
        {list.map(user => (<div key={user.id}>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <br/>
        </div>))}
        </>
    )
}

export default Users;