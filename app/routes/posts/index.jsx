import { useLoaderData, Link } from "remix"
import {db} from '~/utils/db.server'

export const loader =  async () => {
    // console.log('You will only see this message in the IDE terminal, because this runs on the server')
    
    const data = {
        posts: await db.post.findMany({
            take: 20,
            select: {id: true, title: true, createdAt: true},
            orderBy: {createdAt: 'desc'}
        })
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
                            {new Date(post.createdAt).toLocaleString()}
                        </Link>
                    </li>  
                ))}
            </ul>

        </>
    )
}

export default PostItems
