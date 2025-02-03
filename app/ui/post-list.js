import { auth0 } from "../lib/auth0";
import { getPosts } from "../lib/data"
import Post from "./post"

export default async () => {

    const posts = await getPosts();
    
    const { user_id } = (await auth0.getSession()).user;

    return (
        <div className="flex flex-col grow items-center gap-16 mt-24">

            { 
                posts.map(post => <Post key={post.post_id} user_id={user_id} post_id={post.post_id} content={post.content} url={post.url} />)
            }
            
        </div>
    )
}