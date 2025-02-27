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
        <div className="flex flex-col max-w-sm gap-2 p-4 bg-black border border-white rounded-lg shadow-lg sm:max-w-full">
           <div className="flex gap-2 items-center">
                <Image src={post.picture} 
                    alt="Foto de perfil"
                    className="rounded-full border-2 border-white"
                    width={24}
                    height={24}
                />
                <span className="text-white font-semibold">{post.username}</span>
                <span className="text-gray-400 text-sm">1 día</span>
           </div>

           <div className="mt-2">
                <Link href={`/post/${post.post_id}`}>
                    <Image src={post.url} 
                        alt="Imagen del post"
                        className="rounded-lg border border-white"
                        width={284}
                        height={284}
                        layout="responsive"
                    />
                </Link>
           </div>

           <div className="flex gap-2 mt-2 items-center">
                <LikeButton post_id={post.post_id} user_id={user_id} isLikedInitial={isLikedInitial}/>
                <ChatBubbleLeftIcon className="w-8 text-white"/>
           </div>
           <span className="text-white font-semibold">{post.num_likes} Me gusta</span>

           <div className="mt-2">
                <p className="text-white">
                    <span className="font-bold">{post.username}</span> {post.content}
                </p>
           </div>
           
           <div className="mt-2">
                {comments.map((comment) => (
                    <div key={comment.comment_id} className="flex flex-col gap-2 p-2 bg-gray-800 rounded-lg">
                        <div className="flex gap-2 items-center">
                            <Image
                                src={comment.picture}
                                alt="Foto de perfil"
                                className="rounded-full border-2 border-white"
                                width={24}
                                height={24}
                            />
                            <span className="text-white font-semibold">{comment.username}</span>
                        </div>
                        <p className="text-white">{comment.content}</p>
                        <div className="flex gap-2 items-center">
                            <Comment_likeButton 
                                comment_id={comment.comment_id} 
                                user_id={user_id} 
                                isLikedCommentsInitial={commentsLikes.some(like => like.comment_id === comment.comment_id)}
                            />
                            <span className="text-white">{comment.num_likes} Likes</span>
                        </div>
                    </div>
                ))}
           </div>

           <form action={addComment} className="mt-2">
                <input type="hidden" name="post_id" value={post.post_id} />
                <input name="content" className="w-full outline-0 bg-gray-900 text-white p-2 rounded-lg" type="text" placeholder="Add comment"/>
           </form>
        </div>
    )
}