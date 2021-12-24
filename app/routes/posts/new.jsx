import { Link, redirect } from "remix"

export const action = async ({request}) => {
    // console.log('Sever message...')

    const form = await request.formData()
    // console.log(form)

    const title = form.get('title')
    const body = form .get('body')

    const fields = {title, body}

    // @todo = submit to database

    // return redirect('/posts')
}

const NewPost = () => {
    return (
        <>
        <div className="page-header">
            <h1>New Post</h1>
            <Link to='/posts' className='btn btn-reverse'>
                Back
            </Link>
        </div>

        <div className="page-content">
            <form method='POST'>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title"/>
                </div>
                <div className="form-control">
                    <label htmlFor="body">Post Body</label>
                    <textarea type="text" name="body" id="body"/>
                </div>
                <button type='submit' className="btn btn-block">
                    Add Post
                </button>
            </form>
        </div>
            
        </>
    )
}

export default NewPost
