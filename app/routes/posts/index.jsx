import { useLoaderData, Link } from "remix"

export const loader = () => {
    // console.log('You will only see this message in the IDE terminal, because this runs on the server')
    
    const data = {
        posts: [
            {id: 1, title: 'Post 1', body: 'This is a test post'},
            {id: 2, title: 'Post 2', body: 'This is a test post, 2nd'},
            {id: 3, title: 'Post 3', body: 'This is a test post, 3rd'}
        ]
    }
    return data
}

const PostItems = () => {
    // const data = useLoaderData()
    const {posts} = useLoaderData()
   

    return (
        <>
            <div className="page-header">
                <h1>Posts</h1>
                <Link to='/posts/new' className="btn">
                    New Post
                </Link>
            </div>
         
            <ul className="posts-list">
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={post.id}>
                            <h3>{post.title}</h3>
                        </Link>
                    </li>  
                ))}
            </ul>

        </>
    )
}

export default PostItems
