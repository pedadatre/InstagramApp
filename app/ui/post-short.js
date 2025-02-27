import { ChatBubbleLeftIcon, HeartIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import LikeButton from "./like-button";

export default function Post({ user_id, post, isLikedInitial }) {
  if (!post) {
    return <p>Error: No se pudo cargar el post.</p>;
  }

  return (
    <div className="flex flex-col max-w-sm gap-2 p-4 bg-black border border-white rounded-lg shadow-lg">
      <div className="flex gap-2 items-center">
        <Link href={`/profile/${post.user_id}`}>
          {post.picture ? (
            <Image
              src={post.picture}
              alt="Foto de perfil"
              className="rounded-full border-2 border-white cursor-pointer"
              width={24}
              height={24}
            />
          ) : (
            <div className="w-6 h-6 bg-gray-300 rounded-full" />
          )}
        </Link>
        <span className="text-white font-semibold">{post.username}</span>
        <span className="text-gray-400 text-sm">1 día</span>
      </div>

      <div className="mt-2">
        {post.url ? (
          <Image
            src={post.url}
            alt="Imagen del post"
            className="rounded-lg border border-white"
            width={284}
            height={284}
          />
        ) : (
          <p className="text-white">No hay imagen</p>
        )}
      </div>

    
      <div className="flex gap-2 mt-2 items-center">
        <LikeButton post_id={post.post_id} user_id={user_id} isLikedInitial={isLikedInitial} />
        <Link href={`/post/${post.post_id}`}>
          <ChatBubbleLeftIcon className="w-8 text-white" />
        </Link>
      </div>
      <span className="text-white font-semibold">{post.num_likes} Me gusta</span>

      
      <div className="mt-2">
        <p className="text-white">
          <span className="font-bold">{post.username}</span> {post.content}
        </p>
      </div>
      <div className="mt-2">
        <Link href={`/post/${post.post_id}`} className="text-blue-200 hover:underline">
          Ver los comentarios
        </Link>
      </div>
    </div>
  );
}