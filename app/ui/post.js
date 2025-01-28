import { ChatBubbleLeftIcon, HeartIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"

export default ({content, url}) => {
    return (
        <div className="flex flex-col max-w-sm gap-2">
           <div className="flex gap-2">
                <Image src="/avatar.png" 
                    className="rounded-full"
                    width={24}
                    height={24}
                />
                <span>simtegame</span>
                <span>1 dia</span>
           </div>

           <div>
                <Image src={url} 
                    className=""
                    width={384}
                    height={384}
                />
           </div>

           <div>
                <div className="flex gap-2">
                    <HeartIcon className="w-8"/>
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