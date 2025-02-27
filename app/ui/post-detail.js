import { ChatBubbleLeftIcon, HeartIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import LikeButton from "./like-button"
import { addComment } from "../lib/actions"
import Comment_likeButton from "./comment_like-button"

export default ({
    user_id, 
    post,
    isLikedInitial,
    comments,
    commentsLikes
    
}) => {

    return (
        <div className="flex flex-col max-w-sm gap-2">
           <div className="flex gap-2">
                <Image src={post.picture} 
                    alt="hola"
                    className="rounded-full"
                    width={24}
                    height={24}
                />
                <span>{post.username}</span>
                <span>1 dia</span>
           </div>

           <div>
                <Link href={`/post/${post.post_id}`}>
                    <Image src={post.url} 
                        alt="hola"
                        className=""
                        width={284}
                        height={284}
                    />
                </Link>
           </div>

           <div>
                <div className="flex gap-2">
                    <LikeButton post_id={post.post_id} user_id={user_id} isLikedInitial={isLikedInitial}/>
                    <ChatBubbleLeftIcon className="w-8"/>
                </div>
                <span>{post.num_likes} Me gusta</span>
           </div>
           <div>
                <p>
                    <span className="font-bold">
                        {post.username}
                    </span> 
                    {post.content}
                </p>
           </div>
           
           <div>

   
    {
        comments.map((comment) => (
        <div key={comment.comment_id}>
            <div className="flex gap-2">
                <Image
                    src={comment.picture}
                    alt="Foto de perfil"
                    className="rounded-full"
                    width={24}
                    height={24}
                />
                {comment.username} 
            </div>
            {comment.content}
            <Comment_likeButton 
                comment_id={comment.comment_id} 
                user_id={user_id} 
                isLikedCommentsInitial={commentsLikes.some(like => like.comment_id === comment.comment_id)}
            />
            <span>{comment.num_likes} Likes</span>
        </div>
        ))
    }
            </div>
           <form action={addComment}>
            <input type="hidden" name="post_id" value={post.post_id} 
            />
             <input name="content" className="w-full outline-0 dark:bg-neutral-950" type="text" placeholder="Add comment" 
             />
           </form>

           
        </div>
    )
}