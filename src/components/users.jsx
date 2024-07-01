import { FetchUsersHook } from '../hooks/fetch-users-hook'

const Users = () => {

    const userList = FetchUsersHook()

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