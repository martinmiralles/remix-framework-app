import { useParams } from "remix"

const Post = () => {
    const params = useParams()

    return (
        <div>
           <h1>Post Item (Singular)</h1> 
           <h1>{params.postId}</h1>
        </div>
    )
}

export default Post
