import { useFetch } from '../hooks/useFetch'

const Posts = () => {

    const [list, loading, error] = useFetch('https://jsonplaceholder.typicode.com/posts')

    if (loading) {
        return (<div>Loading...</div>)
    }

    if (error) {
        return (<div>{error.message}</div>)
    }

    return (
        <>
        {list.map(user => (<div key={user.id}>
            <div>Title: {user.title}</div>
            <br/>
        </div>))}
        </>
    )
}

export default Posts;