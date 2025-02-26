import { ChatBubbleLeftIcon, HeartIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import LikeButton from "./like-button"


export default function Post({ user_id, post, isLikedInitial }) {
    if (!post) {
        return <p>Error: No se pudo cargar el post.</p>;
    }

    return (
        <div className="flex flex-col max-w-sm gap-2">
            <div className="flex gap-2">
                {post.picture ? (
                    <Image
                        src={post.picture}
                        alt="Foto de perfil"
                        className="rounded-full"
                        width={24}
                        height={24}
                    />
                ) : (
                    <div className="w-6 h-6 bg-gray-300 rounded-full" />
                )}
                <span>{post.username}</span>
                <span>1 día</span>
            </div>

            <div>
                
                    {post.url ? (
                        <Image
                            src={post.url}
                            alt="Imagen del post"
                            width={284}
                            height={284}
                        />
                    ) : (
                        <p>No hay imagen</p>
                    )}
                
            </div>

            <div className="flex gap-2">
                <LikeButton post_id={post.post_id} user_id={user_id} isLikedInitial={isLikedInitial} />
                <ChatBubbleLeftIcon className="w-8" />
            </div>
            <span>{post.num_likes} Me gusta</span>

            <div>
                <p><span className="font-bold">{post.username}</span> {post.content}</p>
            </div>

            <div>
                <Link href={`/post/${post.post_id}`} >Ver los comentarios</Link>
                
            </div>

        </div>
    );
    
}