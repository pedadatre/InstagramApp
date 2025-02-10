import { ChatBubbleLeftIcon, HeartIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import LikeButton from "./like-button"

export default ({user_id, post_id, content, url, isLikedInitial}) => {

    return (
        <div className="flex flex-col max-w-sm gap-2">
           <div className="flex gap-2">
                <Image src="/avatar.png" 
                    alt="hola"
                    className="rounded-full"
                    width={24}
                    height={24}
                />
                <span>simtegame</span>
                <span>1 dia</span>
           </div>

           <div>
            <Link href={`/post/${post_id}`}>
                <Image src={url} 
                    alt="hola"
                    className=""
                    width={384}
                    height={384}
                />
                </Link>
           </div>

           <div>
                <div className="flex gap-2">
                    <LikeButton post_id={post_id} user_id={user_id} isLikedInitial={isLikedInitial} />
                    <ChatBubbleLeftIcon className="w-8" />
                </div>
                <span>2654 Me gusta</span>
           </div>
           <div>
            <p><span className="font-bold">smitegame</span> {content}</p>
           </div>
           <div><Link href="#">Ver los 37 comentarios</Link></div>
           <div>
             <input className="w-full outline-0 dark:bg-neutral-950" type="text" placeholder="Add comment" />
           </div>
        </div>
    )
}