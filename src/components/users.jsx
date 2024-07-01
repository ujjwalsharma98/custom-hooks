import { FetchUsersHook } from '../hooks/fetch-users-hook'

const Users = () => {

    const [userList, loading, error] = FetchUsersHook()

    if (loading) {
        return (<div>Loading...</div>)
    }

    if (error) {
        return (<div>{error.message}</div>)
    }

    return (
        <>
        {userList.map(user => (<div key={user.id}>
            <div>Name: {user.name}</div>
            <div>Email: {user.email}</div>
            <br/>
        </div>))}
        </>
    )
}

export default Users;