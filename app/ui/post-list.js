import { getPosts } from "../lib/data"
import Post from "./post"

export default async () => {

    const posts = await getPosts();

    return (
        <div className="flex flex-col grow items-center gap-16 mt-24">

            { posts.map(post => <Post key={post.id} content={post.content} url={post.url} />)

            }
            
        </div>
    )
}