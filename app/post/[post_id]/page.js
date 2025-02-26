import { auth0 } from "@/app/lib/auth0";
import { getComments, getLike, getPost } from "@/app/lib/data"
// import Post from "@/app/ui/post-short"
import PostDetail from "@/app/ui/post-detail";

export default async ({params}) => {
    
    const post_id = (await params).post_id
    const user_id = (await auth0.getSession()).user.user_id;
    
    const post = (await getPost(post_id))[0];
    const like = await getLike(user_id, post_id);
    const comments = await getComments(post_id);


    

    return (<>
        <PostDetail
            user_id={user_id} 
            post={post}
            isLikedInitial={like.length > 0} 
            comments={comments}
        />
    </>)
}