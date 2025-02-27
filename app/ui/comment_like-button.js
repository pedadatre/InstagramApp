'use client'

import { HeartIcon } from "@heroicons/react/24/solid"
import { insertCommentsLike, removeCommentsLike } from "../lib/actions";
import clsx from "clsx";
import { useState } from "react";

export default ({comment_id, user_id, isLikedCommentsInitial}) => {

    let [isLiked, setIsLiked] = useState(isLikedCommentsInitial);

    // TODO: quitar de aqui
    function toogleLike() {
        if (isLiked) {
            removeCommentsLike(comment_id, user_id);
            setIsLiked(false);
        } else {
            insertCommentsLike(comment_id, user_id);
            setIsLiked(true);
        }
    }

    return (
        <HeartIcon onClick={toogleLike} 
        className={clsx("w-8",{"text-red-600":isLiked})} />

        

    )
}